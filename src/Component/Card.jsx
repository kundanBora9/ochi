import React from 'react'

function Card() {

  return (
    <div data-scroll  data-scroll-section  data-scroll-stop className='mainCards Cardss w-full h-screen bg-zinc-100 flex items-center px-10 gap-5'>
        <div className='cardcontainer w-2/3 h-[60vh]'>
           <div className=' relative card w-full h-full  rounded-xl bg-[#004D43] flex justify-center items-center'>
                <img className='text-[#CDEA68]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] text-sm' > &copy;2019-2020</button>
           </div>
        </div>
        <div className="cardcontainer flex gap-5 w-2/3 h-[60vh] ">
        <div className=' relative card w-full h-full rounded-xl bg-[#000000] flex justify-center items-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-5 bottom-10 px-5 py-1 border-2 rounded-full uppercase text-sm' >rating 5.0 on clutch</button>
        </div>
        <div className=' relative card w-full h-full rounded-xl bg-[#212121] flex justify-center items-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute left-5 bottom-10 px-5 py-1 border-2 rounded-full uppercase text-sm ' > &copy;business bootcamp alumni</button>
        </div>
        </div>
    </div>
  )
}

export default Card