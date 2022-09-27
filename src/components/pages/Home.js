import 'styles/home.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {

    return (<>
        <section className="home">
            <img 
                className="icon filled teapot"
                src={"images/home/teapot-filled.svg"}
                alt={"teapot icon with color"}
            />
            <img 
                className="icon outline teapot"
                src={"images/home/teapot-outline.svg"}
                alt={"teapot icon outline"}
            />
            <img 
                className="icon filled vase"
                src={"images/home/vase-filled.svg"}
                alt={"vase icon with color"}
            />
            <img 
                className="icon outline vase"
                src={"images/home/vase-outline.svg"}
                alt={"vase icon outline"}
            />
            <h1>Julia Hindle Ceramics</h1>
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
        </section>
    </>)
}

export default Home
