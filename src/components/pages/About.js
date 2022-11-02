import 'styles/about.scss'
import { updatePageTitle } from 'Constants'
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        updatePageTitle("About - Julia Hindle Ceramics")
    }, [])

    return <section className="about">
        <div className="content-block">
            <img src="images/about/me.JPG"></img>
            <div className="text-block">
                <h2>My background</h2>
                <p>
                    My name is Julia. I’m a full-time software engineer, part-time hobby potter. I’ve been dabbling with ceramics on and off for the last 10 years, becoming more committed to the hobby in college (2017-2021). In 2019, I was managing a student-run craft space, and while renovating the ceramics room, I stumbled across old buckets of powders that I learned were for making glazes from scratch. 
                    With those powders as well as learning from books and online resources, I started making my own glazes. My method for glaze discovery thus far has been mostly finding base glazes with interesting properties and iterating on the colorants/additives to get new and exciting results. I’ve only recently gotten into creating my own bases as well.
                    Since graduating college, I’ve built my own home studio where I continue to make new pieces and develop more glazes.
                </p>
            </div>
        </div>
        <div className="content-block">
            <img src="images/about/tiles.png"></img>
            <div className="text-block">
                <h2>My website</h2>
                <p>
                    Though I’ve posted some of my work on Glazy and in various ceramics Facebook groups, most of the hundreds of tests I’ve run just existed in my spreadsheets, photos, and notes. That was part of my motivation for making this website. I wanted a space to showcase my glaze work and resources I’ve created that I could share with other potters. I strongly believe that our community benefits from sharing our knowledge with each other rather than keeping trade secrets. 
                    The other reason I wanted to make this website is because it’s a good project to make use of my web development skills, since that is part of what I do for a living.
                    This website has two main sections: the Resources tab and the Glazes tab. Resources contains documents I’ve published, mini apps I’ve created, and other various articles all surrounding the topics of glaze development and ceramics. Glazes has a large portion of the glazes I’ve made, with recipes and other information available when you click on one. 
                </p>
            </div>
        </div>
        <div className="content-block">
            <div className="text-block">
                <p>
                    If you have any questions or comments, feel free to send a message to me below.
                </p>
            </div>
        </div>
    </section>
}

export default About