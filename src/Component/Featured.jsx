import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const card=[useAnimation(),useAnimation(),useAnimation(),useAnimation()];
  const handelHover=(index)=>{
    card[index].start({y:"0"})
  }
  const handelHoverEnd=(index)=>{
    card[index].start({y:"100%"})
  }
  return (
    <div  className="w-full  py-20  bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h2 className='text-7xl font-["NeueMontreal-Regular (1)"] tracking-tight '>
          Featured projects
        </h2>
      </div>
      <div className="px-10 ">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div onHoverStart={()=>handelHover(0)}  onHoverEnd={()=>handelHoverEnd(0)} className="cardcontainer  relative w-1/2 h-[80vh] ">
            <div className="pb-5 flex gap-3 items-center">
              <div className=" w-2 h-2 rounded-full bg-zinc-100"></div>
              <h2>FYDE</h2>
            </div>
            <h1 className="absolute   flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl font-['FoundersGrotesk-Semibold (1)'] leading-none tracking-tighter text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={card[0]} transition={{ease:[0.22,1,0.36,1],delay:index*0.05}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full   rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="flex items-center gap-5  py-5">
              <button className="border-[2px] border-white w-20 h-10 rounded-full uppercase">
                Audit
              </button>
              <button className="border-[2px] border-white w-32 h-10 rounded-full uppercase">
                copywriting
              </button>
              <button className="border-[2px] border-white w-32 h-10 rounded-full uppercase">
                saledesk
              </button>
              <button className="border-[2px] border-white w-32 h-10 rounded-full uppercase">
                slides design
              </button>
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handelHover(1)}  onHoverEnd={()=>handelHoverEnd(1)} className="cardcontainer relative w-1/2 h-[80vh] ">
            <div className="pb-5 flex gap-3 items-center">
              <div className=" w-2 h-2 rounded-full bg-zinc-100"></div>
              <h2>VISE</h2>
            </div>
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl font-['FoundersGrotesk-Semibold (1)'] leading-none tracking-tighter text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={card[1]} transition={{ease:[0.22,1,0.36,1],delay:index*0.05}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full   rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center gap-5  py-5">
              <button className="border-[2px] border-white w-20 h-10 rounded-full uppercase">
                Agency
              </button>
              <button className="border-[2px] border-white w-52 h-10 rounded-full uppercase">
                company presentation
              </button>
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-10 mt-40">
          <motion.div onHoverStart={()=>handelHover(2)}  onHoverEnd={()=>handelHoverEnd(2)} className="cardcontainer relative w-1/2 h-[80vh] ">
            <div className="pb-5 flex gap-3 items-center">
              <div className=" w-2 h-2 rounded-full bg-zinc-100"></div>
              <h2>TRAWA</h2>
            </div>
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl font-['FoundersGrotesk-Semibold (1)'] leading-none tracking-tighter text-[#CDEA68]">
              {"TRAWA".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={card[2]} transition={{ease:[0.22,1,0.36,1],delay:index*0.05}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full   rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center gap-5  py-5">
              <button className="border-[2px] border-white w-40 h-10 rounded-full uppercase">
                brand identity
              </button>
              <button className="border-[2px] border-white w-40 h-10 rounded-full uppercase">
                design research
              </button>
              <button className="border-[2px] border-white w-40 h-10 rounded-full uppercase">
                investor deck
              </button>
              
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handelHover(3)}  onHoverEnd={()=>handelHoverEnd(3)} className="cardcontainer relative w-1/2 h-[80vh] ">
            <div className="pb-5 flex gap-3 items-center">
              <div className=" w-2 h-2 rounded-full bg-zinc-100"></div>
              <h2>PREMIUM BLEND</h2>
            </div>
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl font-['FoundersGrotesk-Semibold (1)'] leading-none tracking-tighter text-[#CDEA68]">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={card[3]} transition={{ease:[0.22,1,0.36,1],delay:index*0.05}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full   rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="flex items-center gap-5  py-5 ">
              <button className="border-[2px] border-white w-52 h-10 rounded-full uppercase">
                branded template
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-40  ">
        <button className="flex items-center gap-5 border-[1px] border-white  rounded-full w-58 h-10 px-5">view all case studies <div className="border-[1px] border-white  bg-zinc-100 w-2 h-2 rounded-full "></div></button>
      </div>
    </div>
  );
}

export default Featured;
