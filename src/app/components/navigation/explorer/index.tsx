import { FolderIcon, SearchIcon, SettingsIcon } from 'lucide-react';

export default function Explorer() {
    return (
        <aside className="w-16 flex flex-col items-center space-y-6 py-4 border-r border-white bg-[#1E1E1E]">
            <div className="hover:text-white cursor-pointer">
                <FolderIcon />
            </div>
            <div className="hover:text-white cursor-pointer">
                <SearchIcon />
            </div>
            <div className="hover:text-white cursor-pointer">
                <SettingsIcon />
            </div>
        </aside>
    )
}