import React, { useEffect, useState, useRef } from 'react'
import { TbTemplate } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { FiSave } from "react-icons/fi";
import { SiSpeedtest } from "react-icons/si";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBrain } from "react-icons/tb";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const features = [
  {
    title: '100+ Templates',
    description: 'ResumCraft\'s experience and features library make customization easy. Powering over 100 templates, you can easily create a personalized resume that reflects your skills, experiences, and career goals.',
    icon: <TbTemplate className='text-xl lg:text-4xl text-center' />
  },
  {
    title: 'Customizable',
    description: 'Create your own customized resume tailored to your career goals and skills. Simply upload your resume and select the template you want to use, and ResumCraft will generate a personalized resume for you.',
    icon: <LuSettings className='text-xl lg:text-4xl text-center' />
  },
  {
    title: 'Save Changes',
    description: 'Save your changes to resume and resume history. ResumCraft will automatically save your changes and generate a personalized resume for you.',
    icon: <FiSave className='text-xl lg:text-4xl text-center' />
  },
  {
    title: 'Resume Score',
    description: 'Resume Score is a tool that helps you to evaluate your resume. It provides a score based on your resume and highlights areas that need improvement.',
    icon: <SiSpeedtest className='text-xl lg:text-4xl text-center' />
  },
  {
    title: 'Suggestions',
    description: 'ResumCraft will suggest improvements to your resume based on your skills and experiences. It will help you to improve your resume and make it more effective.',
    icon: <BsFillLightningChargeFill className='text-xl lg:text-4xl text-center' />
  },
  {
    title: 'AI Assistance',
    description: 'ResumCraft will provide AI assistance to help you create a personalized resume. It will analyze your resume and provide suggestions to improve your resume.',
    icon: <TbBrain className='text-xl lg:text-4xl text-center' />
  },
]

function Features() {
  const [selected, setSelected] = useState(0);
  const interval = useRef(null)
  useEffect(() => {

    interval.current = setInterval(() => {
      setSelected((prev) => {
        if (prev === features.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 4000)
    return () => clearInterval(interval.current)
  }, [])

  return (
    <div className="py-12 relative">
      <div className="absolute inset-0  pt-[25rem]  z-[1] flex justify-center items-baseline">
        <div className='w-[120vw] max-w-[90rem] h-[80vh]  bg-[url("/images/gradient-bg.jpg")] bg-no-repeat bg-center  '></div>
      </div>
      <div className='z-[5] relative'>
        <h1 className='text-3xl lg:text-7xl font-bold text-center'>Make your own</h1>
        <h1 className='text-3xl lg:text-7xl font-[100] text-center'>Customized</h1>
        <h1 className='text-3xl lg:text-7xl font-bold text-center underline decoration-dashed decoration-purple-400'>Resume</h1>
        <div className='flex justify-center  items-center lg:px-0 px-3'>
          <p className='text-center text-lg lg:text-2xl  py-6 lg:w-1/2'>
            ResumCraft&apos;s  experience and features library make customization easy. Powering over 100 templates, you can easily create a personalized resume that reflects your skills, experiences, and career goals.
          </p>
        </div>
        <div className=" gap-4 py-12 w-full hidden lg:flex ">
          <Splide options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            gap: '1rem',
            perPage: 6,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: .5,
              pauseOnHover: true,
            },
          }}
            extensions={{ AutoScroll }}
            className='w-full'
            aria-label="Features">

            {
              features.map((feature, index) => (
                <SplideSlide key={index}>
                  <div className=' flex justify-center cursor-pointer border-2 border-transparent opacity-70 hover:opacity-100 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-2xl hover:border-2 hover:border-white hover:border-opacity-20 py-2 rounded-2xl' onClick={() => {
                    clearInterval(interval.current)
                    setSelected(index)
                  }}>

                    <div className='flex flex-col justify-center items-center' key={index}>
                      {feature.icon}
                      <h1 className='text-[.5rem] lg:text-lg mt-1 font-[550]'>{feature.title}</h1>
                    </div>
                  </div>
                </SplideSlide>

              ))
            }
            
          </Splide>
        </div>
        <div className=" gap-4 py-12 w-full flex lg:hidden ">
          <Splide options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            gap: '1rem',
            perPage: 4,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: .5,
              pauseOnHover: true,
            },
          }}
            extensions={{ AutoScroll }}
            className='w-full'
            aria-label="Features">

            {
              features.map((feature, index) => (
                <SplideSlide key={index}>
                  <div className=' flex justify-center cursor-pointer border-2 border-transparent opacity-70 hover:opacity-100 hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-2xl hover:border-2 hover:border-white hover:border-opacity-20 py-2 rounded-2xl' onClick={() => {
                    clearInterval(interval.current)
                    setSelected(index)
                  }}>

                    <div className='flex flex-col justify-center items-center' key={index}>
                      {feature.icon}
                      <h1 className='text-[.65rem] lg:text-lg mt-1 font-[550]'>{feature.title}</h1>
                    </div>
                  </div>
                </SplideSlide>

              ))
            }
            
          </Splide>
        </div>

        <div className='py-6 flex justify-center items-center lg:px-0 px-3'>

          <div className='rounded-2xl w-full lg:w-1/2 h-[300px] bg-black text-white p-8 flex flex-col justify-between hover:rounded-[3rem] transition-all duration-300 items-start'>
            <div>
              <h1 className='text-xl lg:text-2xl font-bold'>{features[selected].title}</h1>
              <p className='text-base lg:text-lg mt-2'>{features[selected].description}</p>
            </div>

            <button className='bg-white text-black border-black border-2 p-2 px-4 rounded-lg flex justify-center items-center gap-2 mt-2 hover:scale-95 transition-all duration-300'>
              <p>Create Now</p>
              <GoArrowRight className='text-xl' />
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Features