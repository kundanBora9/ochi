import { motion } from 'framer-motion';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

function Landing() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3"  className='w-full h-screen bg-zinc-900 text-white pt-1'>
        <div className='textstructure mt-40 px-8'>
            {["we create","eye-opening","presatation"].map((item,index)=>{
                return <div className='masker'>
                    <div className='w-fit flex items-center overflow-hidden'>
                    {index===1 && (< motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className=' mr-[1vw] w-[8vw] h-[5.7vw] -bottom-2 relative rounded-lg'>
                        <img className='w-[8vw] h-[5.7vw] rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>)}
                    <h1 className='text-[7.5vw] uppercase leading-[7vw] tracking-tighter font-medium  font-["FoundersGrotesk-Semibold (1)"]'>{item}</h1>
                    </div>
                
            </div>
            })}
            
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-start py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>
                <p className='text-md font-light treaking-tight leading-none' >{item}</p>
            )}
            <div className='start flex justify-center items-center gap-2'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full uppercase font-light text-md'>
                    start the project
                </div>
                <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'> 
                <span className='text-2xl'>
                <GoArrowUpRight />
                </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing