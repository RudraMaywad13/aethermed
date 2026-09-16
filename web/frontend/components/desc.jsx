// import Link from "next/link";
//
// export default function Hero() {
//     return (
//         <main className="w-full bg-zinc-950 text-zinc-50">
//             <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
//                 <div className="max-w-xl">
//                     <p className="mb-5 font-mono text-xs text-teal-400">
//                         chest X-ray / AI analysis
//                     </p>
//
//                     <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
//                         A closer look at a chest X-ray.
//                     </h1>
//
//                     <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
//                         Upload a chest X-ray, add a prompt, and see what the
//                         model finds. The image stays visible while you review
//                         the response.
//                     </p>
//
//                     <div className="mt-8">
//                         <Link
//                             href="/dashboard"
//                             className="inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
//                         >
//                             start analysis
//                         </Link>
//                     </div>
//                 </div>
//
//                 <div className="overflow-hidden border border-zinc-800 bg-zinc-950">
//                     <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
//                         <span className="h-2 w-2 rounded-full bg-zinc-700" />
//                         <span className="h-2 w-2 rounded-full bg-zinc-700" />
//                         <span className="h-2 w-2 rounded-full bg-zinc-700" />
//
//                         <span className="ml-3 font-mono text-[10px] text-zinc-500">
//                             aethermed / dashboard
//                         </span>
//                     </div>
//
//                     <div className="grid grid-cols-1 md:grid-cols-2">
//                         <div className="flex min-h-[420px] items-center justify-center bg-black p-4">
//                             <img
//                                 src="/x-ray.jpg"
//                                 alt="Chest X-ray"
//                                 className="h-full max-h-[480px] w-full object-contain"
//                             />
//                         </div>
//
//                         <div className="border-t border-zinc-800 p-6 md:border-l md:border-t-0">
//                             <div className="flex items-center gap-3">
//                                 <span className="font-mono text-xs text-teal-400">
//                                     output
//                                 </span>
//                             </div>
//
//                             <div className="mt-5 max-h-[380px] overflow-hidden text-sm leading-6 text-zinc-400">
//                                 <p className="font-semibold text-zinc-200">
//                                     Overall
//                                 </p>
//
//                                 <p className="mt-2">
//                                     The image shows a standard chest X-ray
//                                     view. The major structures of the chest
//                                     are visible, including the lungs, heart,
//                                     mediastinum, ribs, and clavicles.
//                                 </p>
//
//                                 <p className="mt-5 font-semibold text-zinc-200">
//                                     Lungs
//                                 </p>
//
//                                 <p className="mt-2">
//                                     The lung fields appear clear bilaterally.
//                                     There are no obvious signs of consolidation,
//                                     pleural effusions, or pneumothorax.
//                                 </p>
//
//                                 <p className="mt-5 font-semibold text-zinc-200">
//                                     Heart
//                                 </p>
//
//                                 <p className="mt-2">
//                                     The heart size appears normal and the
//                                     cardiothoracic ratio seems within the
//                                     normal range.
//                                 </p>
//
//                                 <p className="mt-5 font-semibold text-zinc-200">
//                                     Summary
//                                 </p>
//
//                                 <p className="mt-2">
//                                     The chest X-ray appears normal, but clinical
//                                     context is important for a complete
//                                     interpretation.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }