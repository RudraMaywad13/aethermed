import Image from "next/image";

export default function Desc() {
    return (
        <section className="w-full bg-zinc-950 px-6 py-24 text-white">
            <div className="container mx-auto">
                <div className="mx-auto max-w-2xl text-center">
          <span className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-purple-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Under the hood
          </span>
                    <h2
                        className="mt-4 text-4xl font-medium italic leading-tight sm:text-5xl"
                        style={{ fontFamily: "var(--font-display, inherit)" }}
                    >
                        Diagnostic superiority
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-zinc-400">
                        Advanced algorithms, integrated seamlessly into the workflow you already run.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-6">
                    <div className="flex flex-col md:pr-4">
                        <span className="font-mono text-xs tracking-wider text-cyan-300/70">01</span>
                        <h3 className="mt-2 text-xl font-semibold">High-precision detection</h3>
                        <p className="mt-3 leading-relaxed text-zinc-400">
                            Reads longitudnal X-rays scans together, catching subtle
                            anomalies that are easy to miss under volume — trained on
                            222k + reports of peer-reviewed cases.
                        </p>
                    </div>

                    <div className="relative order-first md:order-none">
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="h-[200px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
                        </div>
                        <div className="relative overflow-hidden rounded-lg border border-white/10">
                            <Image
                                src="/img1.png"
                                alt="Medical imaging analysis"
                                width={400}
                                height={300}
                                className="h-auto w-full object-contain"
                            />
                            <div className="absolute inset-3 pointer-events-none">
                                <span className="absolute top-0 left-0 h-3 w-3 border-t border-l border-cyan-300/50" />
                                <span className="absolute top-0 right-0 h-3 w-3 border-t border-r border-cyan-300/50" />
                                <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-cyan-300/50" />
                                <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-cyan-300/50" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:pl-4">
                        <span className="font-mono text-xs tracking-wider text-cyan-300/70">02</span>
                        <h3 className="mt-2 text-xl font-semibold">Instant reporting</h3>
                        <p className="mt-3 leading-relaxed text-zinc-400">
                            Structured, standards-compliant preliminary reports in
                            milliseconds, so less time goes to admin and more stays with
                            the patient.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}