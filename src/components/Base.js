import 'styles/base.scss'
import React, { useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

function Base({showSidebar}) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            let newScale

            if (window.innerWidth <= 500) newScale = (window.innerWidth + 40)/660
            else if (window.innerWidth <= 660) newScale = window.innerWidth/660
            else newScale = 1

            setScale(newScale)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return (<>
            <header>
                <nav>
                    <ul style={{scale: scale.toString()}}>
                        <li className="page">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="page">
                            <NavLink to="/resources">Resources</NavLink>
                        </li>
                        <li className="logo">
                            <Link to="/">
                                <img src='logo.svg' alt='Website logo' to="/"/>
                            </Link>
                        </li>
                        <li className="page">
                            <NavLink to={{pathname: "/glazes"}}>Glazes</NavLink>
                        </li>
                        <li className="page">
                            <NavLink to={{pathname: "/pottery"}}>Pottery</NavLink>
                        </li>
                    </ul>
                    <a className="email" href="mailto: julia.hindle+ceramics@gmail.com">
                        <img src="cursors/mail.svg" title="e-mail me" alt="e-mail icon"></img>
                    </a>
                </nav>
            </header>

            <main id="main" className={showSidebar ? "aside-enabled" : undefined}>
                <Outlet/>
            </main>
    </>)
}

export default Base
