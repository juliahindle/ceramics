import 'styles/base.scss'
import React, { useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

function Base({showSidebar}) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            let newScale = (window.innerWidth <= 660) ? window.innerWidth/660 : 1
            setScale(newScale)
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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
                </nav>
            </header>

            <main id="main" className={showSidebar ? "aside-enabled" : undefined}>
                <Outlet/>
            </main>
    </>)
}

export default Base
