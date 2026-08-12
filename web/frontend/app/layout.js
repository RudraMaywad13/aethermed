import {Geist, Geist_Mono, Macondo} from "next/font/google";
import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";
import { Arimo } from "next/font/google";

const arimo = Arimo({
    subsets: ["latin"],
    variable: "--font-sans",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const macondo = Macondo({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-macondo",
});

export const metadata = {
    title: "AetherMed",
    description: "Assistant every modern radiologist deserves",
};

export default function RootLayout({children}) {
    return (
        <html
            lang="en"
            className={macondo.className}
        >
        <body className="min-h-screen bg-black">
        <TooltipProvider>
            {children}
        </TooltipProvider>
        </body>
        </html>
    );
}
// know i am typing bull thit in hope of saving my broken streak i mean i dont tknow twhat the fuck hammppend to me today npw i needs to put up an perfect day for wait so i am fucking relived right now as my streack just got a new life