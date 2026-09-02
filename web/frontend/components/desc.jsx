export default function Desc() {
    return (
        <section className="w-full bg-zinc-950 px-8 py-20 text-white">
            <div className="max-w-3xl">
                <p className="font-mono text-xs text-purple-400 mb-3">— how it works</p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Upload. Analyze. Review.
                </h2>

                <p className="mt-4 text-base text-zinc-400 max-w-xl leading-7">
                    Drop in a chest X-ray, write a quick prompt, and the model spits out
                    a structured read. You review it. Simple.
                </p>

                <div className="mt-14 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="py-8 md:pr-8">
                            <span className="font-mono text-xs text-cyan-400">01</span>
                            <h3 className="mt-3 text-lg font-semibold">Upload the study</h3>
                            <p className="mt-2 text-sm text-zinc-400 leading-6">
                                Drop in your chest X-ray. PNG, JPG, JPEG — whatever you have.
                            </p>
                        </div>

                        <div className="py-8 md:px-8">
                            <span className="font-mono text-xs text-cyan-400">02</span>
                            <h3 className="mt-3 text-lg font-semibold">AI reads it</h3>
                            <p className="mt-2 text-sm text-zinc-400 leading-6">
                                MedGemma analyzes the image and flags potential findings.
                            </p>
                        </div>

                        <div className="py-8 md:pl-8">
                            <span className="font-mono text-xs text-cyan-400">03</span>
                            <h3 className="mt-3 text-lg font-semibold">You decide</h3>
                            <p className="mt-2 text-sm text-zinc-400 leading-6">
                                Review the output alongside the image. Clinical judgment stays with you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
