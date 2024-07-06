import { Metadata } from "next"
import IntroVideo from "./IntroVideo"
import Link from "next/link"
import Nav from "@/components/Nav";
import Button from "@/components/Button"

export const metadata: Metadata = {
    title: "Orangewood Labs - PhotoBooth",
    description: "PhotoBooth application for Orangewood Labs",
}

export default function Page() {
    return (

        <div className="w-screen h-screen" style={{ backgroundImage: `url(/ui_images/home.gif)`, backgroundSize: 'cover' }}>
            <Nav />
            {/* <IntroVideo /> */}

            <div className="flex justify-center items-center">
                <Button>
                    <Link href="/app">
                        Start Motion
                    </Link>
                </Button>
            </div>
        </div>

    )
}