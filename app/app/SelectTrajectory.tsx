"use client"


import { useState, useEffect } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    const [selectedTrajectory, setSelectedTrajectory] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(5);

    console.log(seconds)

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (start && seconds > -7) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            if (seconds == 0) {
                startMotionProcess();
                sendStartMotionRequest();
            }

            if (seconds == -6) {
                router.push('/');
            }
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
        centerPadding: '100px',
        infinite: true,
        slidesToShow: 3,
        speed: 600,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: number, next: number) => {
            console.log('Before change:', current, next);
            setSelectedTrajectory(next + 1);
            setCurrentSlide(next);
        },
        appendDots: dots => (
            <div
                style={{
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <div className="no-overflow">
            <div className="mt-[15vh] relative max-w-7xl m-auto">
                {
                    !start ? (
                        (
                            <Slider {...settings} >
                                {trajectory.map((item, index) => {
                                    return (
                                        <div className="flex justify-center items-center" key={index}>
                                            <div className={`w-[320px] ${index === currentSlide ? 'border-2 border-yellow-600 bg-gray-950  rounded-3xl' : ''}`}>
                                                <div className="p-2">
                                                    <div className="rounded-3xl" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', width: "300px", height: "400px" }}></div>
                                                </div>
                                                {index === currentSlide && (
                                                    <h1 className="border-t-2 mt-6 border-yellow-600 text-lg text-center tracking-in-expand-fwd p-2">{item.title}</h1>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[60vh]">
                            <div className="text-6xl font-bold text-white ">
                                {seconds > 0 ? (
                                    <div className="text-gray-800 heartbeat w-[100px] h-[100px] p-2 bg-white rounded-full flex justify-center items-center">
                                        {seconds}
                                    </div>
                                ) : (
                                    <h1 className="tracking-in-contract">Starting!</h1>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="absolute bottom-0 left-20 w-full">
                <div className="p-4 m-auto max-w-6xl">
                    <div className="flex justify-between items-center p-4 mt-8 max-w-6xl mx-auto">
                        <h3 className="text-lg">You have selected {
                            selectedTrajectory === -1 ? 'No trajectory selected' : trajectory[selectedTrajectory - 1].title
                        } trajectory.</h3>

                        <div className="space-x-3">
                            {selectedTrajectory === -1 || start ? "" : <Button onClick={startMotionProcess}>Start Motion</Button>}
                            {
                                start && (

                                    <Link
                                        href="/"
                                    >
                                        <Button>
                                            Next
                                        </Button>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
