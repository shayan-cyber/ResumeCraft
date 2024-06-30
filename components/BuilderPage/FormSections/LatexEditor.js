import React from 'react'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
function LatexEditor({latexCode, setLatexCode}) {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    );
    return (
        <div className='h-full'>

            <div className='h-[90%] !overflow-y-auto bg-gray-100   rounded-md z-50'>
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.js)}
                    padding={10}
                    className=''
                    textareaClassName='border-0 outline-0 w-full'
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                    }}
                />
            </div>
            <button className='bg-blue-400 text-white p-2 mt-4 rounded-md' onClick={()=>{
                setLatexCode(code)
            }}>Save</button>
        </div>

    );
}

export default LatexEditor