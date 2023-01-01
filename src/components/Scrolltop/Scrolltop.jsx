import React, { useState } from "react";
import './Scrolltop.css'

function Scrolltop() {
  

  const [activeNav, setActiveNav] = useState('#')

  return (
    <div className='scroll-top'><a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}></a></div>
  )
}

export default Scrolltop