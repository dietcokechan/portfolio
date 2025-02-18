import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
}

const ProjectCard = ({ title, description, imageUrl, githubLink } : ProjectCardProps) => {
    return (
        <div className="bg-[#1e1e1e] text-white rounded-2xl shadow-lg overflow-hidden w-80 p-4">
            <div className="bg-gray-700 h-40 flex items-center justify-center rounded-xl">
                <Image
                    src={imageUrl || "/placeholder.svg"} // Replace with actual image paths
                    alt={title}
                    width={150}
                    height={150}
                    className="opacity-50"
                />
            </div>
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <p className="text-gray-400 text-sm mt-2">{description}</p>
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center border border-gray-400 rounded-lg py-2 hover:bg-[#2c2c2c] transition"
            >
                View Project on GitHub
            </a>
        </div>
    );
};

export default ProjectCard;