import 'styles/base.scss'
import { Outlet, Link, NavLink } from 'react-router-dom'

function Base({showSidebar}) {

    return (<>
            <header>
                <nav>
                    <ul>
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
