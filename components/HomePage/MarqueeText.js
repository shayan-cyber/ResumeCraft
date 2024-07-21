import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
function MarqueeText() {
    return (
        <div className='mt-24'>
            <Splide options={{
                type: 'loop',
                drag: 'free',
                focus: 'center',
                gap: '0rem',
                perPage: 2.5,
                arrows: false,
                pagination: false,
                autoScroll: {
                    speed: 1,
                    pauseOnHover: true,
                },
            }}
                extensions={{ AutoScroll }}
                className='w-full'
                aria-label="Features">
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold'>Easy to Use</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold not-filled'>Easy to Use</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold '>Easy to Use</h1>
                </SplideSlide>
            </Splide>
            <Splide options={{
                type: 'loop',
                drag: 'free',
                focus: 'center',
                gap: '0rem',
                perPage: 2,
                arrows: false,
                pagination: false,
                autoScroll: {
                    speed: -1,
                    direction: 'right',
                    pauseOnHover: true,
                },
            }}
                extensions={{ AutoScroll }}
                className='w-full'
                aria-label="Features">
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold'>Customizable</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold not-filled'>Customizable</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold '>Customizable</h1>
                </SplideSlide>
            </Splide>
            <Splide options={{
                type: 'loop',
                drag: 'free',
                focus: 'center',
                gap: '0rem',
                perPage: 2.5,
                arrows: false,
                pagination: false,
                autoScroll: {
                    speed: 1,
                    pauseOnHover: true,
                },
            }}
                extensions={{ AutoScroll }}
                className='w-full'
                aria-label="Features">
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold'>AI Powered</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold not-filled'>AI Powered</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className='text-[1.35rem] md:text-4xl lg:text-8xl uppercase font-bold '>AI Powered</h1>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default MarqueeText