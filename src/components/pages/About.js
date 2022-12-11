import 'styles/about.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        updatePageTitle("About")
        return resetScroll
    }, [])

    return <section className="about">
        <div className="container">
            <p>My name is Julia. I’m a full-time software engineer, part-time hobby potter.</p>
            <div className="image-block">
                <div className="me"><img src="images/about/me.jpg" alt="artist with her pots"></img></div>
                <div className="me2"><img src="images/about/me2.jpg" alt="artist with her pots again"></img></div>
            </div>
            <p>In 2019, I was managing a student-run craft space at my college, and while renovating the ceramics room, I stumbled across old buckets of powders that I learned were for making glazes from scratch.</p>  
            <div className="image-block">
                <div className="buckets"><img src="images/about/buckets.jpg" alt="buckets"></img></div>
                <div className="powders"><img src="images/about/powders.jpg" alt="powders"></img></div>
            </div>
            <p>With those powders alongside learning from books and online resources, I started making my own glazes.</p>
            <div className="image-block">
                <div className="mixing"><img src="images/about/mixing.jpg" alt="me mixing"></img></div>
                <div className="tiles1"><img src="images/about/tiles1.jpg" alt="tiles"></img></div>
                <div className="tiles2"><img src="images/about/tiles2.jpg" alt="tiles again"></img></div>
            </div>
            <p>My method for glaze discovery thus far has been mostly finding base glazes with interesting properties and iterating on the colorants/additives to get new and exciting results.
            I’ve only recently gotten into creating my own bases as well.</p>
            <div className="image-block">
                <div className="tiles3"><img src="images/about/tiles3.jpg" alt="glazes"></img></div>
            </div>
            <p>Since graduating college, I’ve built my own home studio where I continue to make new pieces and develop more glazes.</p>
            <div className="image-block">
                <div className="studio2"><img src="images/about/studio2.jpg" alt="studio"></img></div>
                <div className="powders2"><img src="images/about/powders2.jpg" alt="studio again"></img></div>
            </div>
            <p>Though I’ve posted some of my work on <a href="https://glazy.org/u/juliahindle/recipes" target="_blank" rel="noreferrer">Glazy</a> and in various ceramics Facebook groups, most of the hundreds of tests I’ve run just existed in my spreadsheets, photos, and notes.</p>
            <div className="image-block">
                <div className="spreadsheet"><img src="images/about/spreadsheet.jpg" alt="spreadsheet"></img></div>
                <div className="notebook"><img src="images/about/notebook.jpg" alt="notebook"></img></div>
            </div>
            <p>One of the reasons I wanted to make this website was to have a space to showcase my glaze work and resources I’ve created. I strongly believe that our community benefits from sharing our knowledge with each other rather than keeping trade secrets.</p>
            
            <p>The other reason I wanted to make this website is because it’s a good project to make use of my web development skills as a software engineer.</p>
            <div className="image-block">
                <div className="code"><img src="images/about/code.jpg" alt="code"></img></div>
                <div className="illustrator"><img src="images/about/illustrator.jpg" alt="designs"></img></div>
            </div>
            <p>I hope you enjoy browsing the site! If you have any questions or comments, feel free to <a href="mailto: julia.hindle+ceramics@gmail.com">email me</a>.</p>
        </div>
    </section>
}

export default About