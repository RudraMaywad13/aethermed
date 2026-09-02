import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex min-h-screen w-full flex-col justify-center bg-zinc-950 px-8 py-20 text-white">
            <div className="max-w-2xl">
                <p className="mb-3 font-mono text-xs text-purple-400">— built alongside radiologists</p>

                <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                    AI radiology,<br />without the fluff.
                </h1>

                <p className="mt-6 text-base leading-7 text-zinc-400 max-w-xl">
                    Upload a chest X-ray. Get a structured AI analysis in seconds.
                    AetherMed is a no-nonsense tool for radiologists who want a second opinion fast.
                </p>

                <div className="mt-8 flex items-center gap-4">
                    <Link
                        href="/dashboard"
                        className="rounded bg-purple-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-purple-400"
                    >
                        try it now
                    </Link>
                    <span className="text-xs text-zinc-500">no account needed</span>
                </div>
            </div>
        </section>
    );
}
