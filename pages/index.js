import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/HomePage/Hero";
import Navbar from "@/components/HomePage/Navbar";
import { GoArrowRight } from "react-icons/go";
import ShowCase from "@/components/HomePage/ShowCase";
import Features from "@/components/HomePage/Features";
// const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/HomePage/Footer";
import MarqueeText from "@/components/HomePage/MarqueeText";
export default function Home() {

  function handleMouseMove(event) {
    var card = document.querySelector('.card');
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
  return (
    <>
      <div className="bg-warm-grey relative">
        <Navbar />
        <Hero />
        <div className="flex justify-center gap-4 items-center pb-4">
          <button className='bg-black text-base lg:text-xl  hover:scale-95 transition-all duration-100 font-[550] border-2 text-white p-2 px-4 rounded-lg flex justify-center items-center gap-2'>
            <p>Build Now</p>
            <GoArrowRight className='text-xl' />
          </button>
          <button className='bg-white text-base lg:text-xl  hover:scale-95 transition-all duration-100 font-[550] text-black border-black border-2 p-2 px-4 rounded-lg flex justify-center items-center gap-2'>
            <p>Sign Up</p>
          </button>

        </div>
        <MarqueeText/>
        <ShowCase/>
        <Features/>
        <Footer/>
      </div>

    </>
  );
}
