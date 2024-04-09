import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className='font-["NeueMontreal-Regular (1)"] text-[3.5vw] leading-[4vw]'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="mt-20">
        <div className=" flex justify-between items-start gap-20 font-['NeueMontreal-Regular (1)']  py-3 border-t-[1px] border-[#a1b562] w-full">
          <p className="">What you can expect:</p>
          <div className="w-[40%] font-normal flex">
            <div className="flex  items-center justify-evenly">
              <div>
                <p className="">
                  We create tailored presentations to help you persuade your
                  colleagues, clients, or investors. Whether it’s live or
                  digital, delivered for one or a hundred people
                </p>
                <p className="py-10">
                  We believe the mix of strategy and design (with a bit of
                  coffee) is what makes your message clear, convincing, and
                  captivating.
                </p>
              </div>
              <div>
                <p>Social Media:</p>
                <ul className="underline underline-offset-1 px-10">
                  <li>
                    <a href="">Instragram</a>
                  </li>
                  <li>
                    <a href="">Behance</a>
                  </li>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Linkdin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px] mt-20 border-[#a1b562] flex">
        <div className="w-1/2 mt-10">
          <h2 className="text-7xl">Our approach:</h2>
          <button className=" flex gap-10 items-center px-10 py-5 rounded-full bg-black text-white uppercase mt-10">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh]  mt-10">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className="rounded-3xl"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
