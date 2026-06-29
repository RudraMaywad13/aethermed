import Image from "next/image";

export default function Home() {
    return (
        <div className="flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 60">
                <!-- Anthropic-style organic geometric mark -->
                <path d="M20 45 L35 15 L50 45 M25 35 H45" fill="none" stroke="#a78bfa" stroke-width="3.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="35" cy="15" r="3" fill="#a78bfa"/>

                <!-- Elegant, wide typography inspired by Anthropic -->
                <text x="70" y="42" font-family="Geist, sans-serif" font-size="32" font-weight="500"
                      letter-spacing="0.02em" fill="#ffffff">
                    AETHER
                    <tspan fill="#a78bfa" font-weight="300">MED</tspan>
                </text>
            </svg>
        </div>
    );
}
