import { Metadata } from "next"
import IntroVideo from "./IntroVideo"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Orangewood Labs - PhotoBooth",
    description: "PhotoBooth application for Orangewood Labs",
}

export default function Page() {
    return (
        <div className="mt-20">
            <IntroVideo />

            <div className="flex justify-center items-center">
                <Link className="
                    bg-pink-500
                    hover:bg-pink-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                    mt-4
                    text-2xl
                "
                    href="/app"
                >
                    Start
                </Link>
            </div>
        </div>
    )
}