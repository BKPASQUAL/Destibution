import React, { useState } from 'react'
import "../../assets/scss/Test.css"

function Header() {
    const [menuClick ,  setmenuClick ] = useState(false);
  return (
    <header className='header-contant'>
        <h1> BK <span> BK </span></h1>
        <nav>
            <div onClick={()=>{
                setmenuClick(true);
            }}>Open</div>
            <ul style={{
                right:`${menuClick? '-20px ' : '-150px'}`
            }}>
                <div  onClick={()=>{
                    setmenuClick(false);
                }}>Cloce</div>
                <li>home</li>
                <li>about</li>
                <li>Contact</li>
                <li>Project</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
