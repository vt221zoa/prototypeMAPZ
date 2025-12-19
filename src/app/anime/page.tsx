import Image from 'next/image'
import Link from 'next/link'
import { animeList } from '@/data/anime'
import { GenreView } from '@/types'

export default function Page() {
    const total = animeList.length

    const avgEpisodes =
        Math.round(
            animeList.reduce((sum, a) => sum + (a.episodes ?? 0), 0) / total
        ) || 0

    const avgYear =
        Math.round(
            animeList.reduce((sum, a) => {
                if (!a.dateRelease) return sum
                return sum + new Date(a.dateRelease).getFullYear()
            }, 0) / total
        ) || 0

    const genreCount = animeList
        .flatMap(a => a.genres ?? [])
        .filter(isGenre)
        .reduce<Record<string, number>>((acc, genre) => {
            acc[genre.name] = (acc[genre.name] ?? 0) + 1
            return acc
        }, {})

    const topAnimeGenres = Object.entries(genreCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)

    const topAnimeGenre =
        topAnimeGenres.length > 0 ? topAnimeGenres[0][0] : '—'


    return (
        <section className="space-y-8">
            {/* Заголовок */}
            <div>
                <h1 className="text-2xl font-bold">Аналітика аніме</h1>
                <p className="text-gray-600">
                    Огляд аніме-тайтлів та їх ключових показників
                </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Stat title="Кількість аніме" value={total} />
                <Stat title="Сер. епізодів" value={avgEpisodes} />
                <Stat title="Сер. рік релізу" value={avgYear} />
                <Stat title="Топ-жанр" value={topAnimeGenre} />
            </div>

            {/* Каталог */}
            <h2 className="text-2xl font-bold">Каталог аніме</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {animeList.map(anime => (
                    <Link
                        key={anime.id}
                        href={`/anime/${anime.id}`}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow transition"
                    >
                        <Image
                            src={anime.imageUrl ?? '/placeholder.png'}
                            alt={anime.titleEn}
                            width={300}
                            height={560}
                            className="object-cover h-[260px] w-full"
                        />

                        <div className="p-4 space-y-1">
                            <h3 className="font-semibold">
                                {anime.titleUa ?? anime.titleEn}
                            </h3>

                            <div className="text-sm text-gray-600">
                                {anime.kind} · {anime.status}
                            </div>

                            <div className="text-xs text-gray-500">
                                Жанри:{' '}
                                {anime.genres?.map(g => g.name).join(', ')}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

function Stat({ title, value }: { title: string; value: string | number }) {
    return (
        <div className="bg-white p-4 rounded shadow-sm">
            <div className="text-xs text-gray-500">{title}</div>
            <div className="text-xl font-bold">{value}</div>
        </div>
    )
}


function isGenre(genre: GenreView | undefined): genre is GenreView {
    return genre !== undefined
}
