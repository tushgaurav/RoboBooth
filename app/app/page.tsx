import { Metadata } from "next";
import Image from "next/image";
import SelectTrajectory from "./SelectTrajectory";
import { Trajectory } from "./Trajectory";

export const metadata: Metadata = {
  title: "Orangewood RoboBooth",
  description: "Home page",
};

const SERVER_URL = process.env.SERVER_URL || "http://localhost:8023230";

export default async function Home() {
  const response = await fetch(`${SERVER_URL}/motion_list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json();
  const TRAJECTORY: Trajectory[] = data.motions;


  return (
    <div>
      <SelectTrajectory trajectory={TRAJECTORY} server_url={SERVER_URL} />
    </div>
  );
}
