import Image from "next/image"
import Badge from "./Badge"

export default function Nav({ title = "", styled = false, logoMode = "light" }: { title?: string, styled?: boolean, logoMode?: "light" | "dark" }) {
    if (styled) {
        return (
            <div className="bg-white/30 backdrop-blur-sm fixed w-full top-0 left-0 z-10">
                <nav className="flex justify-between max-w-7xl mx-auto py-4 px-8">
                    {title ? <h1 className="text-2xl font-bold">{title}</h1> :
                        <Image src={logoMode == "light" ? "/orangewood_light.png" : "/orangewood.webp"} alt="Vercel Logo" width={200} height={200} />
                    }
                    <Badge>Online</Badge>
                </nav>
            </div>
        )
    }
    return (
        <nav className="flex justify-between max-w-7xl mx-auto py-4 px-8">
            {title ? <h1 className="text-2xl font-bold">{title}</h1> :
                <Image src={logoMode == "light" ? "/orangewood_light.png" : "/orangewood.webp"} alt="Vercel Logo" width={200} height={200} />
            }
        </nav>
    )
}