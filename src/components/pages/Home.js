import 'styles/home.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Home() {

    useEffect(() => {
        updatePageTitle("Home")
        return resetScroll
    }, [])

    return (
        <section className="home">
            <div className="filter"></div>
            <div className="image teapot">
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
            </div>
            <div className="content">
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
                    <li>
                        <NavLink to={{pathname: "/pottery"}}>Pottery</NavLink>
                    </li>
                </ul>
            </div>
            <div className="image vase">
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
            </div>
        </section>
    )
}

export default Home
