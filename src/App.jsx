import React from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Marquee from './Component/Marquee'
import About  from './Component/About'
import Eye from './Component/Eye'
import Featured from './Component/Featured'
import Client from'./Component/Client'
import Card from './Component/Card'
import Footer from './Component/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Project from './Component/Project'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <Landing/>
        <Marquee/>
        <About/>
        <Eye/>
        <Featured/>
        <Client/>
        <Card/>
        <Project/>
        <Footer/>
    </div>
    
  )
}

export default App