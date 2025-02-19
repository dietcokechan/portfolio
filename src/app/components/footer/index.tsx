import React from 'react';
import Link from 'next/link'
import { Github as GitHubIcon, Linkedin as LinkedinIcon, Mail as MailIcon } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <div className="w-full h-12 bg-[#1E1E1E] bottom-0 border-t z-10 fixed">
                <div className="mx-4 px-0 h-full">
                    <div className="flex justify-between items-center h-full divide-x text-gray-300">
                        <div className="flex justify-between items-center md:divide-x">
                            <p className="hidden md:flex pr-4 py-4 font-medium text-white text-sm">
                                links
                            </p>
                            <ul className="flex text-white justify-center items-center divide-x">
                                <li className="px-5 py-3 cursor-pointer">
                                    <Link href="https://linkedin.com/in/habiba-sameh" target="_blank">
                                        <LinkedinIcon className="size-5" />
                                    </Link>
                                </li>
                                <li className="px-5 py-3 cursor-pointer">
                                    <Link href="mailto:habibasamehmosa@gmail.com" target="_blank">
                                        <MailIcon className="size-5" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="https://github.com/dietcokechan" target="_blank" className="flex gap-x-2 text-white pl-6 py-3 cursor-pointer items-center">
                            <p className="text-sm">@dietcokechan</p>
                            <GitHubIcon className="size-5"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}