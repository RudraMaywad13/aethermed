import {Button} from "./ui/button";
import Image from "next/image";

export default function Desc() {
    return (
        <section className={"flex flex-col  text-white bg-zinc-950   w-screen"}>

            <h1 className={'font-extrabold text-4xl mt-10 pl-4'}>Diagnostic superiority</h1>
            <h4 className={'font-extralight text-xl mt-1 pl-4 text-gray-300'}>Advanced algorithms integrated seamlessly into your workflow.</h4>

            <hr className={'w-9/10 mx-auto border-gray-600 border-t-2 my-6'}/>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full">

                {/* Left Text Block */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-extrabold text-center">High-Precision Detection</h3>
                    <p className="text-gray-400 mt-4 text-center leading-relaxed">
                        Our multimodal AI analyzes X-rays, MRIs, and CT scans simultaneously, identifying subtle anomalies with unprecedented accuracy. Trained on millions of peer-reviewed cases.
                    </p>
                </div>

                {/* Center Image Container */}
                <div className="flex justify-center">
                    <Image
                        src="/img1.png"
                        alt="Medical imaging analysis"
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain border-1 border-gray-700 max-w-[400px]"
                    />
                </div>

                {/* Right Text Block */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-extrabold text-center">Instant Reporting</h3>
                    <p className="text-gray-400 mt-4 text-center leading-relaxed">
                        Generate structured, standards-compliant preliminary reports in milliseconds. Reduce administrative overhead and focus on patient care.
                    </p>
                </div>

            </div>



        </section>
    );
}