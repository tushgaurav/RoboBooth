enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
}

export default function Button({ variant, children, ...props }: { variant: "primary" | "secondary", children: React.ReactNode }) {
    return (
        <button className={`px-4 py-2 text-lg`} {...props}>
            {children}
        </button>
    )
}