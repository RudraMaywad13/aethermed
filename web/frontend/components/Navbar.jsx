import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
                >
                    <span
                        className="text-xl font-light italic text-white"
                    >
            AetherMed
          </span>
                </Link>

                <div className="flex items-center gap-6">
                    <Button
                        asChild
                        size="sm"
                        className="bg-purple-400 font-light font-2xl text-black transition-colors hover:bg-purple-300"
                    >
                        <Link href="/dashboard">Get started</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}