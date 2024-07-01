export default function CardImage({ source, alt }: { source: string, alt: string }) {
    return (
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-90">
            <img
                src={source}
                alt={alt} className="object-cover w-full h-full" />
        </div>
    )
}