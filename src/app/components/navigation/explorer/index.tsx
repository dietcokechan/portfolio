import { FolderIcon, SearchIcon, SettingsIcon } from 'lucide-react';

export default function Explorer() {
    return (
        <aside className="w-14 h-[calc(100vh-4rem)] sticky -top-1/4 flex flex-col items-center space-y-6 py-4 border-r border-white bg-[#1E1E1E]">
            <div className="hover:text-white cursor-pointer">
                <FolderIcon className="size-5" />
            </div>
            <div className="hover:text-white cursor-pointer">
                <SearchIcon className="size-5" />
            </div>
            <div className="hover:text-white cursor-pointer">
                <SettingsIcon className="size-5" />
            </div>
        </aside>
    )
}