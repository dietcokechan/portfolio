import Editor from "@/app/components/editor";

const file = {
    name: "hello-world.js",
    content: `{* ////////////////////// *}
    
 Habiba Sameh
 >> Software Developer

 * *  *           *  * 
*       *   *    *                           
                       
  **    *        *  *  
     *     *           
 *    *                

Welcome to my portfolio!
 
 * *  *           *  *
              *        
            *          
                *    * 
*       *   *    *     
                       
     *     *           
 *    *
 
I'm a creative professional with a background in art, game development, and full-stack development.
Skilled in design and front-end technologies, and quick to learn and adapt to new tools and technologies.
Self-motivated with a passion for blending creativity and technical expertise.

{* ////////////////////// *}
`,
}

export default function Home() {
    return (
        <div className="flex md:h-[calc(100vh-4rem)] w-screen overflow-hidden">
            <Editor name={file.name} content={file.content} />
        </div>
    );
}