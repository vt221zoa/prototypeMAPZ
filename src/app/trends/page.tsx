import { animeList } from '@/data/anime'
import { mangaList } from '@/data/manga'
import { GenreView, ReviewView } from '@/types'

type CountMap = Record<string, number>

function countGenres(genres: GenreView[]): CountMap {
    return genres.reduce<CountMap>((acc, g) => {
        acc[g.name] = (acc[g.name] ?? 0) + 1
        return acc
    }, {})
}

function averageRatingByYear(
    items: { dateRelease?: string; reviews?: ReviewView[] }[]
): Record<number, number> {
    const map: Record<number, { sum: number; count: number }> = {}

    items.forEach(item => {
        if (!item.dateRelease || !item.reviews) return

        const year = new Date(item.dateRelease).getFullYear()

        item.reviews.forEach(review => {
            if (review.rating === undefined) return

            if (!map[year]) map[year] = { sum: 0, count: 0 }
            map[year].sum += review.rating
            map[year].count += 1
        })
    })

    return Object.fromEntries(
        Object.entries(map).map(([year, v]) => [
            year,
            Number((v.sum / v.count).toFixed(2)),
        ])
    )
}

function isGenre(g: GenreView | undefined): g is GenreView {
    return g !== undefined
}


export default function Page() {
    const animeGenres = countGenres(
        animeList.flatMap(a => a.genres).filter(isGenre)
    )

    const mangaGenres = countGenres(
        mangaList.flatMap(m => m.genres).filter(isGenre)
    )
    const topAnimeGenres = Object.entries(animeGenres)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)

    const topMangaGenres = Object.entries(mangaGenres)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)

    const animeStatus = animeList.reduce<CountMap>((acc, a) => {
        acc[a.status] = (acc[a.status] ?? 0) + 1
        return acc
    }, {})

    const mangaStatus = mangaList.reduce<CountMap>((acc, m) => {
        acc[m.status] = (acc[m.status] ?? 0) + 1
        return acc
    }, {})

    const animeYears = animeList.reduce<CountMap>((acc, a) => {
        if (!a.dateRelease) return acc
        const year = new Date(a.dateRelease).getFullYear()
        acc[year] = (acc[year] ?? 0) + 1
        return acc
    }, {})

    const mangaYears = mangaList.reduce<CountMap>((acc, m) => {
        if (!m.dateRelease) return acc
        const year = new Date(m.dateRelease).getFullYear()
        acc[year] = (acc[year] ?? 0) + 1
        return acc
    }, {})

    const animeAvgRatingByYear = averageRatingByYear(animeList)
    const mangaAvgRatingByYear = averageRatingByYear(mangaList)

    return (
        <section className="space-y-10">
            <div>
                <h1 className="text-2xl font-bold">Тренди індустрії</h1>
                <p className="text-gray-600 max-w-3xl">
                    Узагальнений аналіз тенденцій розвитку аніме та манґи
                    на основі користувацьких оцінок та метаданих.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Stat title="Кількість аніме" value={animeList.length} />
                <Stat title="Кількість манґи" value={mangaList.length} />
            </div>

            <Section title="Топ жанрів (аніме)">
                <SimpleTable data={topAnimeGenres} />
            </Section>

            <Section title="Топ жанрів (манґа)">
                <SimpleTable data={topMangaGenres} />
            </Section>

            <Section title="Статуси аніме">
                <KeyValue data={animeStatus} />
            </Section>

            <Section title="Статуси манґи">
                <KeyValue data={mangaStatus} />
            </Section>

            <Section title="Розподіл релізів за роками (аніме)">
                <KeyValue data={animeYears} />
            </Section>

            <Section title="Розподіл релізів за роками (манґа)">
                <KeyValue data={mangaYears} />
            </Section>

            <Section title="Середня оцінка аніме за роками">
                <KeyValue data={animeAvgRatingByYear} />
            </Section>

            <Section title="Середня оцінка манґи за роками">
                <KeyValue data={mangaAvgRatingByYear} />
            </Section>
        </section>
    )
}

function Stat({ title, value }: { title: string; value: number }) {
    return (
        <div className="bg-white rounded p-4 shadow-sm">
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    )
}

function Section({
                     title,
                     children,
                 }: {
    title: string
    children: React.ReactNode
}) {
    return (
        <section className="bg-white rounded p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            {children}
        </section>
    )
}

function SimpleTable({ data }: { data: [string, number][] }) {
    return (
        <table className="w-full text-sm">
            <tbody>
            {data.map(([key, value]) => (
                <tr key={key} className="border-b last:border-0">
                    <td className="py-1">{key}</td>
                    <td className="py-1 text-right font-medium">{value}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

function KeyValue({ data }: { data: Record<string, number> }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {Object.entries(data).map(([key, value]) => (
                <div
                    key={key}
                    className="bg-gray-50 rounded px-3 py-2 flex justify-between"
                >
                    <span>{key}</span>
                    <span className="font-medium">{value}</span>
                </div>
            ))}
        </div>
    )
}
