import Link from "next/link";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-8 py-6 sm:px-12">
            <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-white"
            >
                aethermed
            </Link>

            <Link
                href="/dashboard"
                className="text-sm text-zinc-400 hover:text-white"
            >
                open app →
            </Link>
        </header>
    );
}