import Editor from "@/app/components/editor";

const bio = {
    name: "bio.js",
    content: `// index.js\nconsole.log('Hello from index.js!');`,
};

const experience = {
    name: "experience.js",
    content: `// index.js\nconsole.log('Hello from index.js!');`,
};

const skills = {
    name: "skills.js",
    content: `// index.js\nconsole.log('Hello from index.js!');`,
};

const education = {
    name: "education.js",
    content: `// index.js\nconsole.log('Hello from index.js!');`,
};

export default function About() {
    return (
        <div className="grid md:grid-cols-2 md:grid-rows-2 md:h-[calc(100vh-8rem)] w-screen">
            <Editor name={bio.name} content={bio.content} />
            <Editor name={experience.name} content={experience.content} />
            <Editor name={skills.name} content={skills.content} />
            <Editor name={education.name} content={education.content} />
        </div>
    )
}