import Editor from "@/app/components/editor";

const file = {
    name: "hello-world.js",
    content: `{* //////////////////////// *}
    
Welcome to my portfolio!

 * *  *           *  * 
*       *   *    *                           
                       
  **    *        *  *  
     *     *           
 *    *                

 Habiba Sameh
 >> Software Developer
 
 * *  *           *  *
              *        
            *          
                *    * 
*       *   *    *     
                       
     *     *           
 *    *
 
Creative professional with a background in art, game development, and full-stack development.
Skilled in design and front-end technologies, and quick to learn and adapt to new tools and technologies.
Self-motivated with a passion for blending creativity and technical expertise.

{* //////////////////////// *}
`,
}

export default function Home() {
    return (
        <div className="w-screen">
            <Editor name={file.name} content={file.content} />
        </div>
    );
}