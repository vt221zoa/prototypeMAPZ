import Image from 'next/image'
import Link from 'next/link'
import {
    AnimeView,
    MangaView,
    CharacterView,
    CommentView,
} from '@/types'

type MediaDetailProps = {
    data: AnimeView | MangaView
}

export default function MediaDetail({ data }: MediaDetailProps) {
    const titles = [data.titleUa, data.titleEn, data.titleJp]
        .filter(Boolean)
        .join(' / ')

    const characters = data.characters ?? [];
    const comments = data.comments ?? [];

    return (
        <article className="space-y-6">
            <h1 className="text-2xl font-bold">{titles}</h1>

            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
                <div>
                    <Image
                        src={data.imageUrl ?? '/placeholder.png'}
                        alt={data.titleEn}
                        width={260}
                        height={380}
                        className="rounded-md object-cover"
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <h2 className="text-lg font-semibold mb-2">Інформація</h2>

                    <div><b>Тип:</b> {data.kind}</div>

                    {'episodes' in data && data.episodes !== undefined && (
                        <div><b>Епізодів:</b> {data.episodes}</div>
                    )}

                    {'volumes' in data && data.volumes !== undefined && (
                        <div><b>Томів:</b> {data.volumes}</div>
                    )}

                    {'chapters' in data && data.chapters !== undefined && (
                        <div><b>Розділів:</b> {data.chapters}</div>
                    )}

                    <div><b>Статус:</b> {data.status}</div>

                    {data.ageRating && (
                        <div><b>Віковий рейтинг:</b> {data.ageRating}</div>
                    )}

                    {data.dateRelease && (
                        <div>
                            <b>Дата релізу:</b>{' '}
                            {new Date(data.dateRelease).toLocaleDateString()}
                        </div>
                    )}

                    <div>
                        <b>Жанри:</b> {data.genres?.map(g => g.name).join(', ')}
                    </div>

                    {'studio' in data && data.studio && (
                        <div><b>Студія:</b> {data.studio.name}</div>
                    )}

                    {'publisher' in data && data.publisher && (
                        <div><b>Видавництво:</b> {data.publisher.name}</div>
                    )}
                </div>
            </div>

            {data.description && (
                <section>
                    <h2 className="text-lg font-semibold mb-2">Опис</h2>
                    <p className="text-gray-700">{data.description}</p>
                </section>
            )}


            {characters?.length > 0 && (
                <section>
                    <h2 className="text-lg font-semibold mb-4">Головні герої</h2>
                    <div className="flex gap-4">
                        {characters?.map((c: CharacterView) => (
                            <div key={c.name} className="space-y-2">
                                <Image
                                    src={c.imageUrl ?? '/placeholder.png'}
                                    alt={c.name}
                                    width={100}
                                    height={100}
                                    className="rounded-md object-cover"
                                />
                                <div className="text-sm font-medium">{c.name}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {comments?.length > 0 && (
                <section>
                    <h2 className="text-lg font-semibold mb-4">Коментарі</h2>
                    <div className="space-y-4">
                        {comments?.map((comment: CommentView) => (
                            <div key={comment.id} className="rounded-md p-4">
                                <hr className="w-full border-dashed border-gray-400 mb-1" />
                                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-sm">
                    {comment.author}
                  </span>
                                    <span className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                                </div>
                                <p className="text-sm text-gray-700">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </article>
    )
}
