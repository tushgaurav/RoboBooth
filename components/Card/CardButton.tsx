import { useContext } from "react"
import { CardContext } from "./Card"


export default function CardButton({ text, selected }: { text: string, selected: boolean }) {
    const { index, setIndex } = useContext(CardContext);
    return (
        <div className="p-6 pt-0">
            {
                selected ? (
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-md py-1 px-3 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button"
                        disabled
                    >
                        Currenlty Selected
                    </button>
                ) : (
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-pink-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button"
                        onClick={() => setIndex(index)}
                    >
                        {text}
                    </button>
                )
            }
        </div>
    )
}