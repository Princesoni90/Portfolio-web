import React from 'react'

function Navbar() {
  return (
    < nav className=''>
      <div className='fixed w-screen flex justify-between items-center px-5 py-[2vh] border-b-2 rounded-b-xl "backdrop-blur-xl bg-white/60'>
          <span className="logo text-[5vh] font-bold max-md:text-3xl">Astra Verse</span>
          <div className="controls flex gap-16 max-md:hidden">
              {["Services","Our Work","About us","Insights"].map((item,index)=>(<a className='text-xl capitalize font-semibold '>{item}</a>))}
              <a className='text-xl capitalize font-semibold mx-10'>Contact</a>                                            
          </div> 
      </div>
    </nav>
  )
}

export default Navbar
