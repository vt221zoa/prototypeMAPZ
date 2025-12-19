export type Weekday =
    | 'Понеділок'
    | 'Вівторок'
    | 'Середа'
    | 'Четвер'
    | 'Пʼятниця'
    | 'Субота'
    | 'Неділя'

export type OngoingScheduleItem = {
    id: number
    title: string
    type: 'Anime' | 'Manga'
    weekday: Weekday
    time: string // HH:mm
}
