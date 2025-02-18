import Editor from "@/app/components/editor";

const file = {
    name: "highlighted-projects.js",
    content: `// index.js\nconsole.log('Hello from index.js!');`,
};

export default function AllProjects() {
    return (
        <>
            <Editor name={file.name} content={file.content} />
        </>
    )
}