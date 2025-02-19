import React from 'react';
import Link from 'next/link';

export default function Navbar({ toggle } : { toggle: () => void }) {
    return (
        <>
            <div className="w-full h-12 bg-[#1E1E1E] sticky top-0 border-b z-10">
                <div className="mx-4 px-0 h-full">
                    <div className="flex justify-between items-center h-full md:divide-x text-gray-300">
                        <div className="flex justify-between items-center divide-x">
                            <Link href="/" className="pr-16 py-3 cursor-pointer">
                                habiba-sameh
                            </Link>
                            <ul className="hidden md:flex text-white justify-center items-center divide-x">
                                <li className="px-6 py-3 cursor-pointer">
                                    <Link href="/">
                                        <p className="text-sm">home</p>
                                    </Link>
                                </li>
                                <li className="px-6 py-3 cursor-pointer">
                                    <Link href="/about">
                                        <p className="text-sm">about me</p>
                                    </Link>
                                </li>
                                <li className="px-6 py-3 cursor-pointer">
                                    <Link href="/projects">
                                        <p className="text-sm">projects</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/contact" className="hidden md:flex text-white px-6 py-3 cursor-pointer">
                            <p className="text-sm">contact</p>
                        </Link>
                        <button type="button" className="inline-flex items-center md:hidden"
                                onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="40"
                                 height="40"
                                 viewBox="0 0 24 24">
                                <path fill="#fff"
                                      d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}