import ProjectCard from "@/app/components/project-card";
import Link from "next/link";
import Editor from "@/app/components/editor";

const projects = [
    {
        title: "Portfolio",
        description: "Personal portfolio developed with Next.js using Typescript and Tailwind CSS.",
        imageUrl: "/placeholder.svg",
        githubLink: "https://github.com/dietcokechan/portfolio",
    },
    {
        title: "Single Page CV",
        description: "My take on the cloud resume challenge (AWS edition).",
        imageUrl: "/placeholder.svg",
        githubLink: "https://github.com/dietcokechan/single-page-cv",
    },
    {
        title: "HBNB - Airbnb Clone",
        description: "airbnb clone project as part of my ALX SWE programme journey.",
        imageUrl: "/placeholder.svg",
        githubLink: "https://github.com/dietcokechan/AirBnB_clone_v4",
    },
    {
        title: "React Bookshelf",
        description: "All your books in one place! Developed with React, Node.js, Express.js and MySQL.",
        imageUrl: "/placeholder.svg",
        githubLink: "All your books in one place! Developed with React, Node.js, Express.js and MySQL.",
    },
];

const file = {
    name: 'highlighted-projects.js',
    content: `// Highlighted Projects\n
{* Personal Portfolio *}
My personal portfolio is a modern, responsive web application built with Next.js, React.js, and Tailwind CSS. 
It serves as a platform to showcase my projects, skills, and experience in UI/UX design, front-end development, and branding. 
The site features a clean and intuitive design, a project gallery with interactive cards, and smooth animations for an engaging user experience. 
Leveraging Next.js for performance optimization and Tailwind CSS for a sleek, consistent UI, this portfolio highlights my expertise in building visually appealing and user-friendly applications.\n
{* Single Page CV *}
Created a static resume website hosted on AWS, integrating front-end (HTML, CSS),
serverless back-end (AWS Lambda, API Gateway), and Infrastructure as Code (Terraform),
and implemented CI/CD with GitHub Actions for automated deployment and a visitor counter API.\n
{* HBNB - Airbnb Clone *}
Developed a full-stack web application simulating an Airbnb platform using Python and Flask for the back-end and MySQL for database management. 
The project includes a RESTful API for handling user interactions and integrates a front-end built with HTML, CSS, and JavaScript.
Collaboration was managed using Git and GitHub, with deployment to platforms like AWS or Heroku and workflows automated through continuous deployment tools.\n
{* React Bookshelf *}
Designed and developed a full-stack bookshelf application for managing and organizing books.
The front-end was built using HTML, CSS, JavaScript, and React.js for a dynamic and responsive user interface. 
The back-end was implemented with Node.js and Express.js, providing RESTful API endpoints. 
Data was stored and managed in a MySQL database, ensuring reliable and efficient data handling. This project demonstrates skills in full-stack development, API integration, and database management.`,
}

export default function AllProjects() {
    return (
        <div className="flex flex-col-reverse md:flex-row h-full md:h-[calc(100vh-4rem)] w-screen overflow-hidden">
            <div className="md:basis-2/3">
                <Editor name={file.name} content={file.content} />
            </div>
            <div className="bg-[#272727] md:basis-1/3 flex-col items-center justify-items-center p-10 overflow-scroll">
                <div className="grid grid-cols-1 gap-8 justify-items-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <Link href={"https://github.com/dietcokechan?tab=repositories"}>
                    <p className="text-white cursor-pointer hover:underline py-6">View all projects on GitHub</p>
                </Link>
            </div>
        </div>
    )
}