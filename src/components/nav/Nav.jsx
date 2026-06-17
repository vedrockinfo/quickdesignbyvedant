import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSolidBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /><span className='nav-items'>home</span></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /><span className='nav-items'>about</span></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiSolidBook /><span className='nav-items'>services</span></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /><span className='nav-items'>portfolio</span></a>
      <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><BiMessageSquareDetail /><span className='nav-items'>contact</span></a>
    </nav>
  )
}

export default Nav
