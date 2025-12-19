import { AnimeView } from '@/types'

export const animeList: AnimeView[] = [
    {
        id: 1,
        titleUa: 'Атака титанів',
        titleEn: 'Attack on Titan',
        titleJp: '進撃の巨人',
        description: 'Людство веде боротьбу за виживання проти гігантських титанів.',
        ageRating: 'R',
        kind: 'TV Series',
        episodes: 87,
        status: 'Завершено',
        dateRelease: '2013-04-07',
        imageUrl: '/6e47d9541f0a77b994c1f487408121e6.jpeg',
        studio: { id: 1, name: 'Wit Studio / MAPPA' },
        genres: [
            { id: 1, name: 'Action' },
            { id: 2, name: 'Drama' },
        ],
        characters: [
            { name: 'Ерен Єгер', imageUrl: '/characters/eren.webp' },
            { name: 'Мікаса Аккерман', imageUrl: '/characters/mikasa.webp' },
            { name: 'Армін Арлерт', imageUrl: '/characters/armin.webp' },
        ],
        comments: [
            { id: 1, author: 'AnimeFan99', text: 'lorem ipsum dolor', createdAt: '2025-12-12' },
            { id: 2, author: 'User123', text: 'lorem ipsum dolor', createdAt: '2025-12-01' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 1, username: 'AnimeFan99', role: 'USER' },
                text: 'Сильний сюжет і глибокі персонажі.',
                rating: 9,
                createdAt: '2023-06-12',
            },
            {
                id: 2,
                author: { id: 2, username: 'CriticUA', role: 'USER' },
                text: 'Один із найвпливовіших тайтлів десятиліття.',
                rating: 10,
                createdAt: '2023-08-21',
            },
        ],
    },

    {
        id: 2,
        titleEn: 'Fullmetal Alchemist: Brotherhood',
        titleJp: '鋼の錬金術師',
        description: 'Брати-алхіміки шукають спосіб повернути втрачені тіла.',
        ageRating: 'PG-13',
        kind: 'TV Series',
        episodes: 64,
        status: 'Завершено',
        dateRelease: '2009-04-05',
        imageUrl: undefined,
        studio: { id: 2, name: 'Bones' },
        genres: [
            { id: 1, name: 'Action' },
            { id: 4, name: 'Adventure' },
            { id: 5, name: 'Fantasy' },
        ],
        characters: [
            { name: 'Едвард Елрік', imageUrl: '/characters/edward.jpg' },
            { name: 'Алфонс Елрік', imageUrl: '/characters/alphonse.jpg' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 3, username: 'OtakuUA', role: 'USER' },
                text: 'Ідеальний баланс драми, екшену та філософії.',
                rating: 10,
                createdAt: '2022-11-02',
            },
        ],
    },

    {
        id: 3,
        titleEn: 'Death Note',
        titleJp: 'デスノート',
        description: 'Зошит смерті змінює долю людства.',
        ageRating: 'R',
        kind: 'TV Series',
        episodes: 37,
        status: 'Завершено',
        dateRelease: '2006-10-04',
        imageUrl: undefined,
        studio: { id: 3, name: 'Madhouse' },
        genres: [
            { id: 6, name: 'Thriller' },
            { id: 7, name: 'Mystery' },
            { id: 8, name: 'Supernatural' },
        ],
        characters: [
            { name: 'Лайт Яґамі', imageUrl: '/characters/light.jpg' },
            { name: 'L', imageUrl: '/characters/l.jpg' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 4, username: 'MindGames', role: 'USER' },
                text: 'Блискуче інтелектуальне протистояння.',
                rating: 9,
                createdAt: '2021-05-17',
            },
        ],
    },

    {
        id: 4,
        titleEn: 'Naruto',
        titleJp: 'ナルト',
        description: 'Історія ніндзя, який мріє стати Хокаґе.',
        ageRating: 'PG',
        kind: 'TV Series',
        episodes: 220,
        status: 'Завершено',
        dateRelease: '2002-10-03',
        imageUrl: undefined,
        genres: [
            { id: 1, name: 'Action' },
            { id: 4, name: 'Adventure' },
            { id: 9, name: 'Shounen' },
        ],
        characters: [{ name: 'Наруто Узумакі', imageUrl: '/characters/naruto.jpg' }],
        reviews: [
            {
                id: 1,
                author: { id: 5, username: 'ShounenFan', role: 'USER' },
                text: 'Легендарний шонен, який виріс разом з поколінням.',
                rating: 8,
                createdAt: '2020-09-10',
            },
        ],
    },

    {
        id: 5,
        titleEn: 'Demon Slayer',
        titleJp: '鬼滅の刃',
        description: 'Мисливець на демонів рятує свою сестру.',
        ageRating: 'R',
        kind: 'TV Series',
        episodes: 55,
        status: 'Онгоїнг',
        dateRelease: '2019-04-06',
        imageUrl: undefined,
        studio: { id: 5, name: 'ufotable' },
        genres: [
            { id: 1, name: 'Action' },
            { id: 5, name: 'Fantasy' },
            { id: 9, name: 'Shounen' },
        ],
        characters: [{ name: 'Танджіро Камадо', imageUrl: '/characters/tanjiro.jpg' }],
        reviews: [
            {
                id: 1,
                author: { id: 6, username: 'VisualLover', role: 'USER' },
                text: 'Неймовірна анімація та музика.',
                rating: 9,
                createdAt: '2023-01-14',
            },
        ],
    },
]
