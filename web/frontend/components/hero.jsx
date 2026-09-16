import Link from "next/link";

export default function Hero() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#111417] text-[#e8ebe8]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(27,93,82,0.16),transparent_32%),radial-gradient(circle_at_18%_80%,rgba(255,255,255,0.035),transparent_30%)]" />

            <header className="relative z-10 flex items-center justify-between border-b border-white/[0.06] px-6 py-6 sm:px-10 lg:px-14">
                <Link
                    href="/"
                    className="text-[17px] font-semibold tracking-[-0.02em] text-white"
                >
                    aethermed
                </Link>

                <Link
                    href="/dashboard"
                    className="text-sm text-[#9da6a2] transition-colors hover:text-white"
                >
                    open workspace
                    <span className="ml-2 text-[#557d75]">↗</span>
                </Link>
            </header>

            <section className="relative z-10 mx-auto max-w-[1500px] px-6 pb-16 pt-12 sm:px-10 lg:px-14 lg:pt-16">
                <div className="grid items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">

                    <div className="max-w-xl">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#527c73]" />

                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#71817d]">
                                multimodal radiology
                            </span>
                        </div>

                        <h1 className="mt-7 max-w-lg font-serif text-[3.5rem] font-normal leading-[0.98] tracking-[-0.045em] text-[#f0f1ed] sm:text-[4.5rem] lg:text-[5.25rem]">
                            A closer look at a chest X-ray.
                        </h1>

                        <p className="mt-7 max-w-md text-[15px] leading-7 text-[#929b98]">
                            AetherMed pairs a chest X-ray with multimodal
                            analysis, giving you another view of the study
                            without taking the image out of context.
                        </p>

                        <div className="mt-9 flex items-center gap-5">
                            <Link
                                href="/dashboard"
                                className="group inline-flex items-center gap-3 rounded-full bg-[#e8ebe8] px-5 py-2.5 text-sm font-medium text-[#171a1a] transition-all hover:bg-white"
                            >
                                Open workspace

                                <span className="transition-transform group-hover:translate-x-0.5">
                                    →
                                </span>
                            </Link>

                            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#66716e]">
                                AetherMed / 01
                            </span>
                        </div>

                        <div className="mt-16 border-t border-white/[0.07] pt-5">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3">
                                <div>
                                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#65716d]">
                                        Model
                                    </p>

                                    <p className="mt-2 text-sm text-[#c0c7c4]">
                                        AetherMed v1.0
                                    </p>
                                </div>

                                <div>
                                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#65716d]">
                                        Modality
                                    </p>

                                    <p className="mt-2 text-sm text-[#c0c7c4]">
                                        Chest radiograph
                                    </p>
                                </div>

                                <div>
                                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#65716d]">
                                        Dataset
                                    </p>

                                    <p className="mt-2 text-sm text-[#c0c7c4]">
                                        222K+ reports
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-start gap-4 border-l border-[#527c73]/60 pl-4">
                                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#527c73]">
                                    Research
                                </span>

                                <div>
                                    <p className="text-sm text-[#c0c7c4]">
                                        AetherMed research paper
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-[#69736f]">
                                        Methodology, evaluation and model
                                        analysis.
                                    </p>

                                    <span className="mt-2 inline-block font-mono text-[9px] uppercase tracking-[0.12em] text-[#527c73]">
                                        Coming soon
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-white/[0.07] pt-4">
                                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white">
                                    Built by hand · human coded
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:translate-y-5">
                        <div className="absolute -inset-6 bg-[#1c5149]/10 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[2px] border border-white/[0.09] bg-[#171b1d]/80 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                            <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-4">
                                <div className="flex items-center gap-2.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#527c73]" />

                                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#707b77]">
                                        study / chest-xray
                                    </span>
                                </div>

                                <span className="font-mono text-[9px] text-[#53615d]">
                                    preview
                                </span>
                            </div>

                            <div className="grid md:grid-cols-[1.05fr_0.95fr]">

                                <div className="flex h-[520px] items-center justify-center bg-[#080a0b] p-2 sm:h-[620px]">
                                    <img
                                        src="/x-ray.jpg"
                                        alt="Chest X-ray"
                                        className="h-full w-full object-contain opacity-[0.94]"
                                    />
                                </div>

                                <div className="border-t border-white/[0.07] bg-[#15191b]/90 p-6 sm:p-7 md:border-l md:border-t-0">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#62706c]">
                                                generated analysis
                                            </p>

                                            <h2 className="mt-2 text-[17px] font-medium tracking-[-0.02em] text-[#e3e7e4]">
                                                Findings
                                            </h2>
                                        </div>

                                        <span className="font-mono text-[9px] text-[#527c73]">
                                            27B VLM
                                        </span>
                                    </div>

                                    <div className="mt-8 space-y-7 text-[13px] leading-6 text-[#929b98]">
                                        <div>
                                            <p className="mb-1.5 text-[#d3d8d5]">
                                                Overall
                                            </p>

                                            <p>
                                                The image shows a standard
                                                chest X-ray view. The major
                                                structures of the chest are
                                                visible.
                                            </p>
                                        </div>

                                        <div>
                                            <p className="mb-1.5 text-[#d3d8d5]">
                                                Lungs
                                            </p>

                                            <p>
                                                The lung fields appear clear
                                                bilaterally. There are no
                                                obvious signs of consolidation,
                                                pleural effusions, or
                                                pneumothorax.
                                            </p>
                                        </div>

                                        <div>
                                            <p className="mb-1.5 text-[#d3d8d5]">
                                                Heart
                                            </p>

                                            <p>
                                                The heart size appears normal.
                                                The cardiothoracic ratio seems
                                                to be within the normal range.
                                            </p>
                                        </div>

                                        <div>
                                            <p className="mb-1.5 text-[#d3d8d5]">
                                                Summary
                                            </p>

                                            <p>
                                                The chest X-ray appears normal,
                                                but clinical context is
                                                important for a complete
                                                interpretation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-9 border-t border-white/[0.06] pt-4">
                                        <p className="font-mono text-[9px] leading-5 text-[#56615e]">
                                            AI-generated interpretation
                                            <br />
                                            Review alongside clinical context
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between font-mono text-[9px] uppercase tracking-[0.14em] text">
                            <span>27B multimodal model</span>
                            <span>AetherMed preview</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}