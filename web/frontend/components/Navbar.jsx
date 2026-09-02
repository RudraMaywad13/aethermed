import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{ borderBottom: "1px solid #333" }} className="sticky top-0 z-50 w-full bg-zinc-950 px-6 py-3">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-white text-lg font-mono hover:text-purple-300">
                    aethermed
                </Link>
                <Link
                    href="/dashboard"
                    className="rounded bg-purple-500 px-4 py-1.5 text-sm text-white hover:bg-purple-400"
                >
                    open app
                </Link>
            </div>
        </nav>
    );
}
