'use client'

import { useEditor, EditorContent, EditorProvider, useCurrentEditor, getAttributes } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaBold, FaItalic } from "react-icons/fa";
import cn from 'classnames'
const MenuBar = ()=>{
  const {editor} = useCurrentEditor()
  if(!editor)
    return null;
  return (
    <>
    <div className='flex gap-1 mb-1 mt-[-.6rem] justify-start items-center'>
      <button className={cn('border-[2px]  rounded-sm p-1 text-[0.6rem]', editor.isActive("bold") ? "bg-black text-white border-black ":"border-gray-300")} onClick={()=> editor.chain().focus().toggleBold().run()}>
        <FaBold/>
      </button>
      <button className={cn('border-[2px]  rounded-sm p-1 text-[0.6rem]', editor.isActive("italic") ? "bg-black text-white border-black ":"border-gray-300")} onClick={()=> editor.chain().focus().toggleItalic().run()}>
        <FaItalic/>
      </button>
    </div>
    </>
  )
}


const RichTextEditor = ({content, setContent}) => {
    const extensions = [StarterKit]
    return (
      <div className=''>
        <EditorProvider 
        extensions={extensions}
        slotBefore={<MenuBar/>}
        content={content}
        onUpdate={({editor})=> {
          // onChange(editor.getHTML())
          // console.log(editor.getHTML());
          setContent(editor.getHTML())
        
        }}
        
        editorProps={
          {
            attributes:{
              class:"h-[200px] p-2 border-2 rounded-xl w-full bg-gray-100 focus:outline-none focus:bg-blue-50"
            }
          }
        }
        
        >

        </EditorProvider>
      </div >
    )

}

export default RichTextEditor
