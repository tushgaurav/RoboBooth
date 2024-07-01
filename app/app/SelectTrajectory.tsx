"use client"

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card/Card";
import CardBody from "@/components/Card/CardBody";
import CardButton from "@/components/Card/CardButton";
import CardTitle from "@/components/Card/CardTitle";
import CardImage from "@/components/Card/CardImage";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type Trajectory = {
    index: number;
    image: string;
    alt: string;
    title: string;
    duration: string;
    description: string;
}

const TRAJECTORY: Trajectory[] = [
    {
        index: 1,
        image: "/image.png",
        alt: "card-image",
        title: "Rotating Trajectory",
        duration: "10",
        description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case."
    },
    {
        index: 2,
        image: "/image.png",
        alt: "card-image",
        title: "Dancing Robot",
        duration: "6",
        description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case."
    },
    {
        index: 3,
        image: "/image.png",
        alt: "card-image",
        title: "Top Down Views",
        duration: "12",
        description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case."
    },
    {
        index: 4,
        image: "/image.png",
        alt: "card-image",
        title: "Slow Motion",
        duration: "5",
        description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case."
    }
]

export default function SelectTrajectory() {
    const router = useRouter();
    const [selectedTrajectory, setSelectedTrajectory] = useState(-1);
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (start && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            startMotionProcess();
        }
        return () => clearInterval(timer);
    }, [start, seconds]);

    const sendStartMotionRequest = async () => {
        try {
            const response = await fetch('http://localhost:5000/start-motion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ trajectory: selectedTrajectory }),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response.json());
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    const startMotionProcess = () => {
        setStart(true);
    }

    return (
        <div className="">
            <h1 className="text-xl font-semibold text-center p-4 m-4 mt-20">Select Trajectory</h1>
            {
                !start ? (
                    (
                        <div className="grid grid-cols-3 gap-4 w-max m-auto">
                            {TRAJECTORY.map((item, index) => {
                                return (
                                    <Card key={index} currentSelectedIndex={selectedTrajectory} index={item.index} setIndex={setSelectedTrajectory} trajectoryData={item}>
                                        <CardImage source={item.image} alt={item.alt} />
                                        <CardTitle titleText={item.title} duration={item.duration} />
                                        <CardBody>
                                            {item.description}
                                        </CardBody>
                                        <CardButton text="Select Motion" />
                                    </Card>
                                )
                            })}
                        </div>
                    )
                ) : (
                    <div className="flex flex-col items-center justify-center h-90">
                        <div className="text-6xl font-bold text-gray-800 h-max">
                            {seconds > 0 ? seconds : 'Starting!'}
                        </div>
                    </div>
                )
            }



            <div className=" w-full">
                <div className="flex justify-between items-center p-4 mt-8 max-w-6xl mx-auto">
                    <h3 className="text-lg">You have selected {
                        selectedTrajectory === -1 ? 'No trajectory selected' : TRAJECTORY[selectedTrajectory - 1].title
                    } trajectory.</h3>

                    <div className="space-x-3">
                        <button className="
                        px-4 py-2 text-lg
                        bg-pink-500 text-white rounded-full
                        hover:bg-pink-600
                        focus:outline-none
                        focus:ring-2 focus:ring-pink-600
                        focus:ring-opacity-50
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                 "
                            disabled={selectedTrajectory === -1 || start}
                            onClick={startMotionProcess}
                        >
                            Start Motion
                        </button>
                        {
                            start && (
                                <Link className="
                                px-6 py-3 text-lg
                                bg-pink-800 text-white rounded-full
                                focus:outline-none
                                focus:ring-2 focus:ring-red-600
                                focus:ring-opacity-50
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                                    href="/experience"
                                >
                                    Next
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}