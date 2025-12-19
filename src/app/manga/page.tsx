import Image from 'next/image'
import Link from 'next/link'
import { mangaList } from '@/data/manga'
import {GenreView} from "@/types";
import {animeList} from "@/data/anime";

export default function Page() {
    const total = mangaList.length

    const avgVolumes =
        Math.round(
            mangaList.reduce((sum, m) => sum + (m.volumes ?? 0), 0) / total
        ) || 0

    const avgChapters =
        Math.round(
            mangaList.reduce((sum, m) => sum + (m.chapters ?? 0), 0) / total
        ) || 0

    const genreCount = animeList
        .flatMap(a => a.genres ?? [])
        .filter(isGenre)
        .reduce<Record<string, number>>((acc, genre) => {
            acc[genre.name] = (acc[genre.name] ?? 0) + 1
            return acc
        }, {})

    const topMangaGenres = Object.entries(genreCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)

    const topMangaGenre =
        topMangaGenres.length > 0 ? topMangaGenres[0][0] : '—'

    return (
        <section className="space-y-8">
            {/* Заголовок */}
            <div>
                <h1 className="text-2xl font-bold">Аналітика манги</h1>
                <p className="text-gray-600">
                    Огляд манги та її ключових показників
                </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Stat title="Кількість манґ" value={total} />
                <Stat title="Сер. томів" value={avgVolumes} />
                <Stat title="Сер. розділів" value={avgChapters} />
                <Stat title="Топ-жанр" value={topMangaGenre} />
            </div>

            {/* Список манги */}
            <h1 className="text-2xl font-bold">Каталог манги</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mangaList.map((manga) => (
                    <Link
                        key={manga.id}
                        href={`/manga/${manga.id}`}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow transition"
                    >
                        <Image
                            src={manga.imageUrl ?? '/placeholder.png'}
                            alt={manga.titleEn}
                            width={400}
                            height={560}
                            className="object-cover h-[260px] w-full"
                        />

                        <div className="p-4 space-y-1">
                            <h2 className="font-semibold">
                                {manga.titleUa ?? manga.titleEn}
                            </h2>
                            <div className="text-sm text-gray-600">
                                {manga.kind} · {manga.status}
                            </div>
                            <div className="text-xs text-gray-500">
                                Жанри:
                                {manga.genres?.map(g => g.name).join(', ')}
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