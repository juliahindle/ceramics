import 'styles/home.scss'
import React from 'react'
import glazes from 'data/glazes.json'
function Home() {

    return (<>
        <section className="home">
            <img 
                className="icon filled teapot"
                src={`images/home/teapot-filled.svg`}
            />
            <img 
                className="icon outline teapot"
                src={`images/home/teapot-outline.svg`}
            />
            <h1>Julia Hindle Ceramics</h1>
            <img 
                className="icon filled vase"
                src={`images/home/vase-filled.svg`}
            />
            <img 
                className="icon outline vase"
                src={`images/home/vase-outline.svg`}
            />
        </section>
    </>)
}

export default Home
