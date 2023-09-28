import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 mr-5">
                        Log in
                    </Link>
                    <Link href="/tracking/BPS1EP58YI5SKBR" className="text-sm font-semibold leading-6 text-gray-900">
                        Tracking
                    </Link>
                </div>
            </nav>
        </header>
    )
}
