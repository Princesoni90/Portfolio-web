import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Moving from './components/Moving'
import Projects from './components/Projects'
import Game from './components/Game'
import Aboutme from './components/Aboutme'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=''>
      <Navbar/>
      <Landing/>
      <Moving/>
      <Projects/>
      <Game/>
     </div>
  )
}
export default App
