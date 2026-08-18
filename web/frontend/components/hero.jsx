import {Button} from "./ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-zinc-950 px-6 py-24 text-white">
            <div className="flex flex-col items-center gap-2 text-center">
                <span className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-purple-300/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    Built alongside practicing radiologists
                </span>

                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                    AI-assisted
                    <br />
                    radiology workflows.
                </h1>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-400 sm:text-4xl lg:text-5xl">
                    AetherMed AI
                </h2>

                <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-zinc-400">
                    Analyze chest X-ray studies, identify potential abnormalities,
                    compare current and prior examinations, and generate structured
                    preliminary findings from a single radiology workspace.
                </p>

                <div className="mt-8">
                    <Button
                        asChild
                        size="lg"
                        className="bg-purple-400 px-8 font-semibold text-black transition-colors hover:bg-purple-300"
                    >
                        <Link href="/dashboard">Get started</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}