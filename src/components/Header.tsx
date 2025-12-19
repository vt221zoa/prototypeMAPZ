import Link from 'next/link'

const navItems = [
    { label: 'Аніме', href: '/anime' },
    { label: 'Манга', href: '/manga' },
    { label: 'Тренди', href: '/trends' },
    { label: 'Календар онгоїнгів', href: '/calendar' },
]

export default function Header() {
    return (
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href='/' className="text-xl font-semibold">
                    Anime & Manga Analytics
                </Link>

                <nav className="flex gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-gray-600 hover:text-black transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}