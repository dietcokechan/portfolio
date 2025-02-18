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
        <div className="flex flex-col w-full border-r border-t overflow-hidden" ref={containerRef}>
            <Tab filename={name} isActive={isActive} setIsActive={setIsActive} />
            <div className="flex-1 flex divide-x">
                {/* Line Numbers */}
                <div className="bg-[#000000] opacity-50 py-3 px-4 font-mono text-sm">
                    <pre>
                        <code>
                            {Array.from({ length: 38}, (_, i) => i + 1).map((lineNumber) => (
                                <div key={lineNumber}>{lineNumber}</div>
                            ))}
                        </code>
                    </pre>
                </div>

                {/* Code */}
                <div className="flex-1 px-4 py-3 font-mono text-sm text-gray-300 overflow-auto">
                    <pre>
                        <code className="whitespace-pre-wrap max-w-80ch">
                            {content}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}