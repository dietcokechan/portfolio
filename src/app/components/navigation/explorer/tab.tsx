interface TabProps {
    filename: string;
    isActive: boolean;
    setIsActive: (e: boolean) => void;
}

export default function Tab( { filename, isActive, setIsActive } : TabProps ) {
    return (
        <>
            <nav className="border-b bg-[#1e1e1e] px-4 flex items-center space-x-4 divide-x">
                <div
                    className={`flex cursor-pointer py-2 pr-4 text-sm transition-all ${
                        isActive
                            ? "text-white border-r"
                            : "text-gray-500"
                    }`}
                    onClick={() => setIsActive(true)}
                >
                    {filename}

                    {/* Close Button */}
                    {isActive && (
                        <button
                            className="ml-2 text-xs text-gray-300 hover:text-white"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </nav>
        </>
    )
}