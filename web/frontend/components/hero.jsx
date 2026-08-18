import {Button} from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import {Fraunces} from "next/font/google";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["500", "600"],
    style: ["normal", "italic"],
    variable: "--font-display",
});

export default function Hero() {
    return (
        <section
            className={`${fraunces.variable} relative flex flex-col items-center justify-center min-h-screen bg-zinc-950 overflow-hidden px-6 py-24`}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "48px 48px"
                }}
            />

            <div className="relative flex flex-col items-center gap-2 text-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[250px] rounded-full bg-purple-500/20 blur-[120px]"/>
                </div>

                <span
                    className="relative mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-purple-300/80">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400"/>
          Built alongside practicing radiologists
        </span>

                <h1
                    className="relative text-6xl sm:text-7xl lg:text-8xl font-medium leading-[1.05] text-white"
                    style={{fontFamily: "var(--font-display)"}}
                >
                    Precision in
                    <br/>
                    <span className="italic text-zinc-400">darkness.</span>
                </h1>

                <h2
                    className="relative text-5xl sm:text-6xl lg:text-7xl italic font-medium text-purple-400 mt-1"
                    style={{fontFamily: "var(--font-display)"}}
                >
                    AetherMed AI
                </h2>

                <p className="mt-8 max-w-2xl text-center text-lg text-zinc-400 leading-relaxed">
                    A multimodal assistant that reads alongside you — surfacing findings,
                    flagging discordance, and clearing the routine so you can spend your
                    attention where it matters.
                </p>

                <div className="mt-8 flex flex-col items-center gap-3">
                    <Button
                        asChild
                        size="lg"
                        className="bg-purple-400 hover:bg-purple-300 text-black font-semibold px-8 transition-colors"
                    >
                        <Link href="/dashboard">Get started</Link>
                    </Button>
                </div>

                <div className="relative mt-16 w-full max-w-4xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10">
                        <Image
                            src="/hero.png"
                            alt="AetherMed AI reading interface"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent animate-scan"/>
                        </div>

                        <div className="absolute inset-4 pointer-events-none">
                            <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-cyan-300/60"/>
                            <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-cyan-300/60"/>
                            <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-cyan-300/60"/>
                            <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-cyan-300/60"/>
                        </div>
                        <div className="absolute top-6 left-6 font-mono text-[10px] tracking-wider text-cyan-300/70">
                            AXIAL · T2
                        </div>
                        <div
                            className="absolute bottom-6 right-6 font-mono text-[10px] tracking-wider text-cyan-300/70">
                            WL 40 · WW 400
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent"/>

            <style>{`
        @keyframes scan {
          0% { top: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3.5s ease-in-out 0.6s 1 both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scan { animation: none; }
        }
      `}</style>
        </section>
    );
}