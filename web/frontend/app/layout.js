import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "AetherMed",
    description: "AI-assisted radiology workflows",
};

export default function RootLayout({children}) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body className="min-h-screen w-full overflow-x-hidden bg-zinc-950 font-sans">
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </body>
        </html>
    );
}