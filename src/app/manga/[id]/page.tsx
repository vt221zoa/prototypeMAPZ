import { mangaList } from '@/data/manga'
import { PagePromise } from "@/types/interfaces";
import { notFound } from 'next/navigation'
import MediaDetail from "@/components/MediaDetail";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const mangaId = Number(id);
    const manga = mangaList.find(
        (a) => a.id === Number(mangaId)
    )

    if (!manga) notFound()

    return <MediaDetail data={manga} />
}
