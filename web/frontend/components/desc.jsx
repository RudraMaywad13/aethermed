export default function Desc() {
    return (
        <section className="w-full bg-zinc-950 px-6 py-24 text-white">
            <div className="container mx-auto">
                <div className="mx-auto max-w-3xl">
                    <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-purple-300/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                        Current workflow
                    </span>

                    <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Upload. Analyze. Review.
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
                        Upload a chest X-ray and AetherMed analyzes the study,
                        identifies potential findings, and presents the results
                        for review.
                    </p>
                </div>

                <div className="mx-auto mt-20 max-w-5xl border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="border-b border-white/10 py-10 md:border-r md:pr-10 md:border-b-0">
                            <span className="font-mono text-xs tracking-wider text-cyan-300/70">
                                01
                            </span>

                            <h3 className="mt-3 text-xl font-semibold tracking-tight">
                                Upload the study
                            </h3>

                            <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                                Upload a chest X-ray directly through the AetherMed
                                workspace for analysis.
                            </p>
                        </div>

                        <div className="border-b border-white/10 py-10 md:border-r md:px-10 md:border-b-0">
                            <span className="font-mono text-xs tracking-wider text-cyan-300/70">
                                02
                            </span>

                            <h3 className="mt-3 text-xl font-semibold tracking-tight">
                                AI analysis
                            </h3>

                            <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                                The model analyzes the uploaded image and evaluates
                                it for potential radiographic findings.
                            </p>
                        </div>

                        <div className="py-10 md:pl-10">
                            <span className="font-mono text-xs tracking-wider text-cyan-300/70">
                                03
                            </span>

                            <h3 className="mt-3 text-xl font-semibold tracking-tight">
                                Review the result
                            </h3>

                            <p className="mt-3 max-w-md leading-relaxed text-zinc-400">
                                Review the generated analysis alongside the original
                                image before making your own clinical assessment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}