import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="w-full border-b-2 border-b-gray-600 bg-gray-900">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    {/*<Image*/}
                    {/*    src="/Logo.png"*/}
                    {/*    alt="AetherMed Logo"*/}
                    {/*    width={40}*/}
                    {/*    height={40}*/}
                    {/*/>*/}
                    <span className="text-2xl font-bold text-white">AetherMed</span>
                </Link>

                <Button className={'bg-purple-400  text-black font-sans '} asChild>
                    <Link href="/dashboard" className={'p-6'}>Get Started</Link>
                </Button>
            </div>
        </nav>
    );
}