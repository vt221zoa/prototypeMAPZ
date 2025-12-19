export type CommentView = {
    id: number
    author: string
    text: string
    createdAt: string
}

export type UserRole = 'USER' | 'MODERATOR' | 'ADMIN'

export type UserView = {
    id: number
    username: string
    role: UserRole
}

export type ReviewView = {
    id: number
    author: UserView
    text?: string
    rating: number
    createdAt: string
}

export type CharacterView = {
    name: string
    imageUrl?: string
}

export type GenreView = {
    id: number
    name: string
}

export type StudioView = {
    id: number
    name: string
}

export type PublisherView = {
    id: number
    name: string
}

export type AnimeView = {
    id: number
    titleUa?: string
    titleEn: string
    titleJp?: string
    description?: string

    ageRating?: string
    kind: string
    episodes?: number
    status: string
    dateRelease?: string
    imageUrl?: string

    studio?: StudioView
    genres?: GenreView[]

    characters?: CharacterView[]
    reviews?: ReviewView[]
    comments?: CommentView[]
}

export type MangaView = {
    id: number
    titleUa?: string
    titleEn: string
    titleJp?: string
    description?: string

    ageRating?: string
    kind: string
    chapters?: number
    volumes?: number
    status: string
    dateRelease?: string
    imageUrl?: string

    publisher?: PublisherView
    genres?: GenreView[]

    characters?: CharacterView[]
    reviews?: ReviewView[]
    comments?: CommentView[]
}

type OngoingItem = {
    title: string
    type: 'Anime' | 'Manga'
    date: string
}
