import Editor from "@/app/components/editor";

const bio = {
    name: "bio.js",
    content: `{* What I'm currently doing *}\n
I’m working as a freelance/contracted React frontend developer, where my responsibilities include designing and developing responsive user interfaces using React.js, Next.js, Tailwind CSS and Material-UI. 
I collaborate with clients to understand their requirements and implement features that align with their vision. 
Additionally, I manage the deployment process, including integrating CI/CD pipelines and working with AWS services for efficient hosting.`,
};

const experience = {
    name: "experience.js",
    content: `{* Professional Experience *}\n
Frontend Developer | MyRefera (Contract) Dec 2024 – Present
Technologies: React.js • Next.js • TypeScript • JavaScript • HTML/CSS • Git\n
Game Developer | Arlation May 2024 – Oct 2024
Technologies: Unreal Engine 5 • C++ • Git
// Created playable prototypes and tried out different game loops and exploring innovative game design
concepts.
// Designed and built initial playable versions of different kinds of games to test and refine gameplay
mechanics, ensuring engaging and functional experiences.
// Contributed to game design by crafting unique and compelling gameplay elements, storylines and
interactive features.\n
Game Developer | Streaming Creativity Jan 2023 – May 2023
Technologies: Unity • C# • Git
// Helped with the implementation of new game mechanics, and testing different mechanics to ensure
smooth gameplay, as well as identifying and fixing bugs.
// Designed and implemented UI/UX features, improving game accessibility and user experience.
// Participated in team meetings and contributed ideas for game design and development approaches,
as well as serving as a scrum master facilitating daily stand-ups, sprint planning and retrospectives.`,
};

const skills = {
    name: "skills.js",
    content: `{* Development and Programming *}
C/C++, Python, JavaScript, TypeScript, Tailwind CSS, React.js, Node.js, Express.js, MERN Stack\n
{* Database Management *}
MySQL, MongoDB\n
{* Tools and Technologies *}
Adobe Creative Cloud, Figma, GitHub, AWS\n
{* Version Control *}
Git, SVN, Plastic SCM\n
{* UI/UX Design *}
User Interface Design, User Experience Design, Web Application Design\n
{* Languages *}
Arabic (Native), English (Fluent), French(Beginner), German (Beginner)`,
};

export default function About() {
    return (
        <div className="flex flex-wrap md:h-[calc(100vh-8rem)] w-screen">
            <div className="flex flex-col w-full md:w-1/2 md:h-full">
                <Editor name={bio.name} content={bio.content} />
                <Editor name={skills.name} content={skills.content} />
            </div>
            <div className="w-full md:w-1/2 md:h-full">
                <Editor name={experience.name} content={experience.content} />
            </div>
        </div>
    )
}