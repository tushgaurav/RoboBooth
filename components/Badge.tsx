export default function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block bg-green-400 text-gray-800 text-xs font-semibold rounded-full px-2 py-1 h-min uppercase tracking-wide cursor-context-menu">
            {children}
        </span>
    )
}