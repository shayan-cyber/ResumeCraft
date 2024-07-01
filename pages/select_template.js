import Navbar from '@/components/HomePage/Navbar'
import React, { useEffect } from 'react'

function select_template() {
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
        <div className='bg-warm-grey'>

            <Navbar />
            <div className='px-16 py-10'>
                <h1 className='text-3xl'>Select A Template</h1>
                <div className='grid grid-cols-4 gap-12 my-12'>

                    <div className='w-full h-[400px] rounded-lg shadow-md bg-white card1 cursor-pointer' onMouseMove={(e)=> handleMouseMove(e, "card1")} onMouseLeave={(e)=>{
                        handleMouseLeave(e, "card1")
                    }}>

                    </div>
                    <div className='w-full h-[400px] rounded-lg shadow-md bg-white card2 cursor-pointer' onMouseMove={(e)=> handleMouseMove(e, "card2")} onMouseLeave={(e)=>{
                        handleMouseLeave(e, "card2")
                    }}>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default select_template