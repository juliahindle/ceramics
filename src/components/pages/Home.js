import 'styles/home.scss'
import React from 'react'

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
            <h1>Julia Hindle Ceramics</h1>
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
        </section>
    </>)
}

export default Home
