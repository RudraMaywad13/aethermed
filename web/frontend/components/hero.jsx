import {Button} from "./ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 overflow-hidden">


            <div className="relative mt-4 justify-center flex flex-col items-center gap-2">
                {/* Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[250px] rounded-full bg-purple-100/50 blur-[120px]"/>
                </div>
                <h1 className="text-center text-8xl font-extrabold text-white leading-tight">
                    Precision in
                    <br/>
                    Darkness.
                </h1>

                <h1 className="relative text-center text-8xl font-extrabold text-purple-400">
                    AetherMed AI.
                </h1>

                <p className="mt-8 max-w-3xl text-center text-lg text-gray-400">
                    Multimodal AI assistant for radiologists. Accelerating diagnostic
                    workflows with developer-grade precision and near-instant analysis.
                </p>

                <Button size={'lg'} className={'bg-purple-400 text-black font-black width-50'}>GET STARTED</Button>
                <Image src={"/hero.png"} alt={'image'} width={400} height={300} className={'w-full h-150'}/>
                <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-black to-transparent"></div>
            </div>


        </section>
    );
}