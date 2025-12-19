import '@/app/global.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'Anime & Manga Analytics Portal',
    description: 'Аналітичний портал аніме та манга індустрії',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="uk">
        <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-6">
            {children}
        </main>
        </body>
        </html>
    )
}
