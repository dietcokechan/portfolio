'use client';

import { useState, useRef} from "react";
import Tab from "@/app/components/navigation/explorer/tab";

interface EditorProps {
    name: string;
    content: string;
}

export default function Editor({ name, content } : EditorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="flex flex-col w-full border-r border-t h-full" ref={containerRef}>
            <Tab filename={name} isActive={isActive} setIsActive={setIsActive} />
            <div className="flex-1 flex overflow-visible md:overflow-scroll pb-16">
                {/* Line Numbers */}
                <div className="py-2 px-2 text-sm">
                    <pre>
                        <code>
                            {Array.from({ length: 30}, (_, i) => i + 1).map((lineNumber) => (
                                <div key={lineNumber}>{lineNumber}</div>
                            ))}
                        </code>
                    </pre>
                </div>

                {/* Code */}
                <div className="flex-1 px-2 py-2 text-sm text-gray-300">
                    <pre>
                        <code className="whitespace-pre-wrap max-w-80ch pb-16">
                            {content}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}