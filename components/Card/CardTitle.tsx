export default function CardTitle({ titleText, duration }: { titleText: string, duration: number }) {
    return (
        <div className="p-6 pb-0">
            <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {titleText}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {duration}
                </p>
            </div>
        </div>
    )

}