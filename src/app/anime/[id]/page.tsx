import { animeList } from '@/data/anime'
import { PagePromise } from "@/types/interfaces";
import { notFound } from 'next/navigation'
import MediaDetail from "@/components/MediaDetail";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const animeId = Number(id);
    const anime = animeList.find(
        (a) => a.id === Number(animeId)
    )

    if (!anime) notFound()

    return <MediaDetail data={anime} />
}
