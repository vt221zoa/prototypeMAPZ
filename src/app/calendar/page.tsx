import { ongoingSchedule } from '@/data/ongoingSchedule'
import { Weekday } from '@/types/ongoing'

const weekOrder: Weekday[] = [
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'Пʼятниця',
    'Субота',
    'Неділя',
]

export default function OngoingCalendarPage() {
    const grouped = weekOrder.map(day => ({
        day,
        items: ongoingSchedule.filter(i => i.weekday === day),
    }))

    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold">Календар онгоїнгів</h1>
                <p className="text-gray-600 max-w-3xl">
                    Розклад виходу поточних аніме та манґи за днями тижня.
                    Дані є демонстраційними та можуть бути замінені
                    на інтеграцію із зовнішніми сервісами.
                </p>
            </div>

            <div className="grid gap-6">
                {grouped.map(({ day, items }) => (
                    <div
                        key={day}
                        className="bg-white rounded shadow-sm p-4"
                    >
                        <h2 className="text-lg font-semibold mb-3">
                            {day}
                        </h2>

                        {items.length === 0 ? (
                            <p className="text-sm text-gray-500">
                                Немає релізів
                            </p>
                        ) : (
                            <ul className="space-y-2 text-sm">
                                {items.map(item => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between items-center border-b last:border-0 pb-1"
                                    >
                                        <span>{item.title}</span>

                                        <span className="text-gray-600">
                      {item.type} · {item.time}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
