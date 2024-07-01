import React from 'react'

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
        <div className='px-20 mt-[200px]'>
            <div className='flex justify-center'>

                <div className='w-1/2 text-center'>

                    <h1 className='text-7xl text-center font-[1000]'>Build your Resume,</h1>
                    <h2 className=' text-7xl font-[100]'>your way.</h2>

                </div>

            </div>

            <div className='flex justify-center py-20'>

                <div className='w-[500px] h-[600px] rounded-2xl shadow-md bg-white card1 cursor-pointer' onMouseMove={(e) => handleMouseMove(e, "card1")} onMouseLeave={(e) => {
                    // handleMouseLeave(e, "card1")
                }}>
                    
                </div>

            </div>

        </div>
    )
}

export default ShowCase