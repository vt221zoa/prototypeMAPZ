import { MangaView } from '@/types'

export const mangaList: MangaView[] = [
    {
        id: 1,
        titleUa: 'Берсерк',
        titleEn: 'Berserk',
        titleJp: 'ベルセルク',
        description: 'Темне фентезі про воїна Ґатса та його боротьбу з долею.',
        kind: 'Manga',
        chapters: 371,
        volumes: 41,
        status: 'Видається',
        dateRelease: '1989-08-25',
        imageUrl: '/1b55dd3a4afe472f28ce0c9d4f507005.jpeg',
        publisher: { id: 1, name: 'Hakusensha' },
        genres: [
            { id: 10, name: 'Dark Fantasy' },
            { id: 1, name: 'Action' },
            { id: 11, name: 'Drama' },
        ],
        characters: [
            { name: 'Ґатс', imageUrl: '/characters/guts.webp' },
            { name: 'Ґріффіт', imageUrl: '/characters/griffit.webp' },
            { name: 'Каска', imageUrl: '/characters/casca.webp' },
        ],
        comments: [
            { id: 1, author: 'MangaReader', text: 'lorem ipsum dolor', createdAt: '2025-11-18' },
            { id: 2, author: 'DarkFantasyFan', text: 'lorem ipsum dolor', createdAt: '2025-03-02' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 10, username: 'DarkSoul', role: 'USER' },
                text: 'Одна з найглибших манґ усіх часів.',
                rating: 10,
                createdAt: '2022-04-01',
            },
        ],
    },

    {
        id: 2,
        titleEn: 'Death Note',
        titleJp: 'デスノート',
        description: 'Інтелектуальне протистояння геніїв.',
        kind: 'Manga',
        chapters: 108,
        volumes: 12,
        status: 'Завершено',
        dateRelease: '2003-12-01',
        imageUrl: undefined,
        publisher: { id: 2, name: 'Shueisha' },
        genres: [
            { id: 6, name: 'Thriller' },
            { id: 7, name: 'Mystery' },
        ],
        characters: [
            { name: 'Лайт Яґамі', imageUrl: '/characters/light.jpg' },
            { name: 'L', imageUrl: '/characters/l.jpg' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 11, username: 'LogicMind', role: 'USER' },
                text: 'Манґа читається на одному подиху.',
                rating: 9,
                createdAt: '2021-06-18',
            },
        ],
    },

    {
        id: 3,
        titleEn: 'One Piece',
        titleJp: 'ワンピース',
        description: 'Піратська пригода у пошуках легендарного скарбу.',
        kind: 'Manga',
        chapters: 1100,
        volumes: 108,
        status: 'Видається',
        dateRelease: '1997-07-22',
        imageUrl: undefined,
        publisher: { id: 2, name: 'Shueisha' },
        genres: [
            { id: 4, name: 'Adventure' },
            { id: 1, name: 'Action' },
            { id: 5, name: 'Fantasy' },
        ],
        characters: [
            { name: 'Монкі Д. Луффі', imageUrl: '/characters/luffy.jpg' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 12, username: 'PirateKing', role: 'USER' },
                text: 'Найбільша пригода в історії манґи.',
                rating: 10,
                createdAt: '2023-02-20',
            },
        ],
    },

    {
        id: 4,
        titleEn: 'Tokyo Ghoul',
        titleJp: '東京喰種',
        description: 'Темний світ гулів та людей.',
        kind: 'Manga',
        chapters: 143,
        volumes: 14,
        status: 'Завершено',
        dateRelease: '2011-09-08',
        imageUrl: undefined,
        publisher: { id: 2, name: 'Shueisha' },
        genres: [
            { id: 12, name: 'Horror' },
            { id: 10, name: 'Dark Fantasy' },
        ],
        characters: [
            { name: 'Кен Канекі', imageUrl: '/characters/kaneki.jpg' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 13, username: 'GhoulFan', role: 'USER' },
                text: 'Похмура і емоційно важка історія.',
                rating: 8,
                createdAt: '2020-12-11',
            },
        ],
    },

    {
        id: 5,
        titleEn: 'Chainsaw Man',
        titleJp: 'チェンソーマン',
        description: 'Жорсткий та динамічний екшн.',
        kind: 'Manga',
        chapters: 160,
        volumes: 16,
        status: 'Видається',
        dateRelease: '2018-12-03',
        imageUrl: undefined,
        publisher: { id: 2, name: 'Shueisha' },
        genres: [
            { id: 1, name: 'Action' },
            { id: 12, name: 'Horror' },
        ],
        characters: [
            { name: 'Дендзі', imageUrl: '/characters/denji.jpg' },
        ],
        reviews: [
            {
                id: 1,
                author: { id: 14, username: 'CrazyChainsaw', role: 'USER' },
                text: 'Нестандартний і дуже сміливий тайтл.',
                rating: 9,
                createdAt: '2022-08-09',
            },
        ],
    },
]
