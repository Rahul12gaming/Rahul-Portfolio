import { useState } from 'react'
import './header.css'
export const Header=()=>
{
    const [open,setOpen]=useState(false)
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <p>RAHUL <span>ADHIKARI</span></p>
                    </div>
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="/project">Projects</a>
                        <a href="/about">About Me</a>
                        <a href="">Resume</a>
                        <a href="https://github.com/Rahul12gaming/">Github</a>
                    </div>
                    <div className="menuBtn">
                        <button onClick={()=>setOpen(!open)}><i class="fa-solid fa-bars-staggered"></i></button>
                    </div>
                </nav>
                {
                    open?(
                        <div className="menuContainer">
                <a href="/">Home</a>
                        <a href="/project">Projects</a>
                        <a href="/about">About Me</a>
                        <a href="">Resume</a>
                        <a href="https://github.com/Rahul12gaming/">Github</a>
                </div>
                    ):<>
                    </>
                }
            </header>
        </>

    )
}