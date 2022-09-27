import 'styles/base.scss'
import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

function Base({showSidebar}) {
    return (<>
            <header>
                <Link to="/">
                    <img src='logo.svg' alt='Website logo' to="/"/>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resources">Resources</NavLink>
                        </li>
                        <li>
                            <NavLink to={{pathname: "/glazes"}}>Glazes</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className={showSidebar ? "aside-enabled" : undefined}>
                <Outlet/>
            </main>
    </>)
}

export default Base
