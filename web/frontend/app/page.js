import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Desc from "@/components/desc";

export default function Home() {
    return (<div className={'flex justify-center items-center flex-col'}>
        <Navbar/>

        <Hero/>

        <hr className="w-9/10 border-gray-500" />

        <Desc/>
    </div>);
}