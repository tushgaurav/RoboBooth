import { Metadata } from "next";
import ExperienceRating from "./ExperienceRating";

export const metadata: Metadata = {
    title: "Experience Rating ",
    description: "Rate your experience",
};

export default function Page() {
    return (
        <div className="h-full">
            <ExperienceRating />
        </div>
    )
}