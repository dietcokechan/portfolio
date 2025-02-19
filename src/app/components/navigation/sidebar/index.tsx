import React from 'react';
import Link from 'next/link';

export default function Sidebar({ isOpen, toggle } : { isOpen: boolean, toggle: () => void }) : React.ReactElement {
    return (
        <>
            <div
                className="sidebar-container fixed w-6/12 h-full overflow-hidden justify-center bg-[#1e1e1e] border-2 grid pt-[120px] right-0"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <ul className="sidebar-nav text-left leading-relaxed text-xl divide-y">
                    <li className="px-10 py-4">
                        <Link href="/about" onClick={toggle}><p className="text-sm">about</p></Link>
                    </li>
                    <li className="px-10 py-4">
                        <Link href="/projects" onClick={toggle}><p className="text-sm">projects</p></Link>
                    </li>
                    <li className="px-10 py-4">
                        <Link href="/contact" onClick={toggle}><p className="text-sm">contact</p></Link>
                    </li>
                </ul>
            </div>
        </>
    );
}