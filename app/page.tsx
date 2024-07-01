import { Metadata } from "next";
import Image from "next/image";
import SelectTrajectory from "./SelectTrajectory";

export const metadata: Metadata = {
  title: "Orangewood RoboBooth",
  description: "Home page",
};

export default function Home() {
  return (
    <div>

      <SelectTrajectory />
    </div>
  );
}
