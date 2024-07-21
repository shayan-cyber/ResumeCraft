import React from 'react'
import Dummy from '../ResumeTemplates/Default/Dummy';
import Link from 'next/link';
function ShowCase() {
    function handleMouseMove(event, cardName) {
        var card = document.querySelector(`.${cardName}`);
        var boundingRect = card.getBoundingClientRect();
    
        // Calculate mouse position relative to the card center
        var mouseX = event.clientX - boundingRect.left - boundingRect.width / 2;
        var mouseY = event.clientY - boundingRect.top - boundingRect.height / 2;
    
        // Maximum tilt angle
        var maxTilt = 10;
    
        // Calculate tilt values based on mouse position
        var tiltX = (mouseY / boundingRect.height) * maxTilt;
        var tiltY = -(mouseX / boundingRect.width) * maxTilt;
    
        // Apply tilt using CSS transform
        card.style.transform = 'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
      }

      function handleMouseLeave(e, cardName){
        var card = document.querySelector(`.${cardName}`);
        card.style.transform = '';
      }     
    return (
        <div className='px-3 lg:px-20 mt-[100px]'>
            <div className='flex justify-center'>

                <div className='w-full lg:w-1/2 text-center'>
                     <h2 className=' text-2xl font-[100]'>Templates</h2>
                    <h1 className='text-3xl lg:text-7xl text-center font-[1000]'>Build your Resume,</h1>
                    <h2 className=' text-3xl lg:text-7xl font-[100]'>your way.</h2>

                </div>

            </div>

            <div className='flex justify-center py-12'>

                <Link href={"/select_template"}>
                <div className='w-full h-auto lg:w-[500px] lg:h-[600px] rounded-2xl shadow-md bg-white card1 cursor-pointer hover:shadow-blue-200 hover:shadow-2xl' onMouseMove={(e) => handleMouseMove(e, "card1")} onMouseLeave={(e) => {
                    // handleMouseLeave(e, "card1")
                }}>
                    <Dummy/>
                </div>
                </Link>

            </div>

        </div>
    )
}

export default ShowCase