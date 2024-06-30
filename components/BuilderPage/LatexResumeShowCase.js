import React, { useEffect, useRef } from 'react';

function LatexResumeShowCase({ latexCode }) {
    const containerRef = useRef(null);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     // global.window = createHTMLWindow()
    //     // global.document = window.document
    //     // Compile the LaTeX code to HTML
    //     let generator = new HtmlGenerator({ hyphenate: false })
    //     let html = parse(latexCode, { generator: generator }).htmlDocument()
    //     // const html = parse(latexCode).htmlDocument();

    //     // Inject the HTML into the container
    //     container.innerHTML = '';
    //     container.appendChild(html.body);
    // }, [latexCode]);

    return (
        <div className='w-full'>
            <div ref={containerRef}></div>


        </div>
    )
}

export default LatexResumeShowCase