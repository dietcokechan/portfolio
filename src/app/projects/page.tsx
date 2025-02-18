import ProjectCard from "@/app/components/project-card";
import Link from "next/link";
import Editor from "@/app/components/editor";

const projects = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur.",
        imageUrl: "/placeholder.svg",
        githubLink: "https://github.com/user/project1",
    },
    {
        title: "Project 2",
        description: "Tristique vitae hendrerit fermentum lorem fringilla.",
        imageUrl: "/placeholder.svg",
        githubLink: "https://github.com/user/project2",
    },
    {
        title: "Project 3",
        description: "Sit scelerisque morbi egestas amet ultricies erat viverra.",
        imageUrl: "/placeholder.svg",
        githubLink: "https://github.com/user/project3",
    },
];

const file = {
    name: 'highlighted-projects.js',
    content: `// Highlighted Projects`,
}

export default function AllProjects() {
    return (
        <div className="grid md:grid-cols-2 h-[calc(100vh-8rem)] w-screen">
            <Editor name={file.name} content={file.content} />
            <div className="bg-[#272727] flex flex-col items-center p-10 overflow-y-scroll">
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <Link href={"https://github.com/dietcokechan?tab=repositories"} className="text-white mt-8 cursor-pointer hover:underline">
                    <p>View all projects on GitHub</p>
                </Link>
            </div>
        </div>
    )
}