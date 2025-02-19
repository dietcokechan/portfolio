import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
}

const ProjectCard = ({ title, description, imageUrl, githubLink } : ProjectCardProps) => {
    return (
        <div className="bg-[#1e1e1e] text-white rounded-2xl shadow-lg overflow-hidden w-11/12 p-4  items-center justify-center">
            <div className="h-40 flex items-center justify-center rounded-xl">
                <Image
                    src={imageUrl ? imageUrl : "/placeholder.svg"} // Replace with actual image paths
                    alt={title}
                    width={300}
                    height={300}
                    className="opacity-80"
                    style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "0.6rem" }}
                />
            </div>
            <h3 className="text-lg sm:text-sm font-semibold mt-4">{title}</h3>
            <p className="text-gray-400 text-sm sm:text-xs mt-2">{description}</p>
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-xs underline block mt-4 text-center border border-gray-400 rounded-lg py-2 hover:bg-[#2c2c2c] transition"
            >
                View Project on GitHub
            </a>
        </div>
    );
};

export default ProjectCard;