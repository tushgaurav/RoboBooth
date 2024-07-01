export default function CardBody({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-6">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {children}
            </p>
        </div>
    )

}