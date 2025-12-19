import StatsCard from '@/components/StatsCard'
import Link from 'next/link'

export default function Page() {
  return (
      <div className="space-y-10">
        {/* Заголовок */}
        <section>
          <h2 className="text-3xl font-bold">
            Аналітичний портал аніме та манга індустрії
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Платформа для аналізу, систематизації та візуалізації даних
            про аніме та мангу. Портал дозволяє відстежувати рейтинги,
            жанрові тренди та динаміку популярності тайтлів.
          </p>
        </section>

        {/* Статистика */}
        <section>
          <h3 className="text-xl font-semibold mb-4">
            Загальна статистика
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
                title="Кількість аніме"
                value={1280}
                description="Тайтлів у базі даних"
            />
            <StatsCard
                title="Кількість манги"
                value={860}
                description="Манґа-серій та томів"
            />
            <StatsCard
                title="Середній рейтинг"
                value="8.3 / 10"
                description="На основі відгуків користувачів"
            />
            <StatsCard
                title="Жанр-лідер"
                value="Action"
                description="Найпопулярніший жанр"
            />
          </div>
        </section>

        {/* Навігація */}
        <section>
          <h3 className="text-xl font-semibold mb-4">
            Перейти до аналітики
          </h3>

          <div className="flex flex-wrap gap-4">
            <Link
                href="/anime"
                className="px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Аналітика аніме
            </Link>

            <Link
                href="/manga"
                className="px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Аналітика манги
            </Link>

            <Link
                href="/trends"
                className="px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Тренди індустрії
            </Link>
          </div>
        </section>
      </div>
  )
}
