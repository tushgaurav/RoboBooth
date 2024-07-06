"use client"


import { useState, useEffect } from "react";
import Slider from "react-slick";
import Button from "@/components/Button";
import Card from "@/components/Card/Card";
import CardBody from "@/components/Card/CardBody";
import CardButton from "@/components/Card/CardButton";
import CardTitle from "@/components/Card/CardTitle";
import CardImage from "@/components/Card/CardImage";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Trajectory } from "./Trajectory";
import Image from "next/image";

export default function SelectTrajectory({ trajectory, server_url }: { trajectory: Trajectory[], server_url: string }) {
    const router = useRouter();
    const [selectedTrajectory, setSelectedTrajectory] = useState(-1);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (start && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            startMotionProcess();
            sendStartMotionRequest();
        }
        return () => clearInterval(timer);
    }, [start, seconds]);

    const sendStartMotionRequest = async () => {
        console.log('Sending POST request to start motion')
        try {
            const response = await fetch(`${server_url}/start_motion`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(trajectory[selectedTrajectory - 1]),
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

    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        draggable: true,
        beforeChange: (current: number, next: number) => {
            console.log('Before change:', current, next);
            setSelectedTrajectory(next + 1);
            setCurrentSlide(next);
        },
    };

    return (
        <>
            {
                !start ? (
                    (
                        <Slider {...settings} >
                            {trajectory.map((item, index) => {
                                return (

                                    <div>
                                        <div key={index} className={`p-2 w-[320px] ${index === currentSlide ? 'border-2 border-yellow-600 rounded-3xl' : ''}`}>
                                            <div className="rounded-3xl" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', width: "300px", height: "400px" }}></div>
                                            {index === currentSlide && (
                                                <h1 className="text-lg text-center p-2">{item.title}</h1>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>

                    )
                ) : (
                    <div className="flex flex-col items-center justify-center h-[60vh]">
                        <div className="text-6xl font-bold text-gray-800 ">
                            {/* {seconds > 0 ? (
                                <div className="p-10 bg-white rounded-full">{seconds}</div>
                                ) : 'Starting!'} */}
                            <div className="w-8 h-8 bg-white rounded-full">{seconds}</div>
                        </div>
                    </div>
                )
            }
            <div className="m-auto p-4 max-w-6xl">
                <div className=" w-full">
                    <div className="flex justify-between items-center p-4 mt-8 max-w-6xl mx-auto">
                        <h3 className="text-lg">You have selected {
                            selectedTrajectory === -1 ? 'No trajectory selected' : trajectory[selectedTrajectory - 1].title
                        } trajectory.</h3>

                        <div className="space-x-3">
                            {selectedTrajectory === -1 || start ? "" : <Button onClick={startMotionProcess}>Start Motion</Button>}
                            {
                                start && (
                                    <Button>
                                        <Link
                                            href="/"
                                        >
                                            Next
                                        </Link>
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
