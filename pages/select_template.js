import Navbar from '@/components/HomePage/Navbar'
import Dummy from '@/components/ResumeTemplates/Default/Dummy';
import Link from 'next/link';
import React, { useEffect } from 'react'

function select_template() {
    function handleMouseMove(event, cardName) {
        var card = document.querySelector(`.${cardName}`);
        var boundingRect = card.getBoundingClientRect();
    

        var mouseX = event.clientX - boundingRect.left - boundingRect.width / 2;
        var mouseY = event.clientY - boundingRect.top - boundingRect.height / 2;
    

        var maxTilt = 10;

        var tiltX = (mouseY / boundingRect.height) * maxTilt;
        var tiltY = -(mouseX / boundingRect.width) * maxTilt;

        card.style.transform = 'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
      }

      function handleMouseLeave(e, cardName){
        var card = document.querySelector(`.${cardName}`);
        card.style.transform = '';
      }

    let resumeTemplates = {
        default:<Dummy/>
    }
    return (
        <div className='bg-warm-grey'>

            <Navbar />
            <div className='px-16 py-10'>
                <h1 className='text-3xl'>Select A Template</h1>
                <div className='grid grid-cols-3 gap-12 my-12'>

                    {
                        Object.keys(resumeTemplates).map((item, key)=>{
                            return (
                                <Link href={`/builder?template=${item}`} key={key}>
                                    <div className='w-full h-[620px] rounded-2xl shadow-md bg-white card1 cursor-pointer' onMouseMove={(e)=> handleMouseMove(e, "card1")} onMouseLeave={(e)=>{
                                        handleMouseLeave(e, "card1")
                                    }}>
                                        {resumeTemplates[item]}
                                    </div>
                                </Link>
                                
                            )
                        })
                    }
                    

                </div>

            </div>



        </div>
    )
}

export default select_template