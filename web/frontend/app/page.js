import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";

export default function Home() {
    return (<div className={'flex justify-center items-center flex-col'}>
            <Navbar/>

        <Hero />
    </div>);
}