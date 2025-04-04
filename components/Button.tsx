
export default function Button({ variant = 'primary', children, ...props }: { variant?: "primary" | "secondary", children: React.ReactNode }) {
    const styles = ``

    return (
        <button className={"slide-bck-center tracking-in-expand-fwd px-16 py-4 bg-white text-black text-lg rounded-lg"} {...props}>
            {children}
        </button>
    )
} 