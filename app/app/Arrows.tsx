function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style, display: "block", position: "absolute", right: "100px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
            onClick={onClick}
        >
            <div className="h-12 w-12 bg-yellow-600 hover:bg-yellow-700 rounded-full flex items-center justify-center">

                <svg
                    className="h-6 w-6 text-white rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 4.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 2z"
                        clipRule="evenodd"
                    />
                </svg>

            </div>
        </div>
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style, display: "block", position: "absolute", left: "100px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }}
            onClick={onClick}
        >
            <div className="h-12 w-12 bg-yellow-600 hover:bg-yellow-700 rounded-full flex items-center justify-center">
                <svg
                    className="h-6 w-6 text-white rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 15.586l6.293-6.293a1 1 0 011.414 1.414l-7 7A1 1 0 0110 18z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}

export { NextArrow, PrevArrow }