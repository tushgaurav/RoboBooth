import Image from "next/image"
import Badge from "./Badge"

export default function Nav() {
    return (
        <div className="bg-white/30 backdrop-blur-sm fixed w-full top-0 left-0 z-10">
            <nav className="flex justify-between max-w-7xl mx-auto py-4 px-8">
                <Image src="/orangewood.webp" alt="Vercel Logo" width={200} height={200} />
                <Badge>Online</Badge>
            </nav>
        </div>
    )
}