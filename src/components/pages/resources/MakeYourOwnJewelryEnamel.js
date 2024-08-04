import 'styles/resources_makeYourOwnJewelryEnamel.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useEffect } from 'react'
import enamels from 'data/enamels.json'

function MakeYourOwnJewelryEnamel() {
    useEffect(() => {
        updatePageTitle("Make Your Own Jewelry Enamel")
        return resetScroll
    }, [])

    return (
        <section className="resource make-your-own-jewelry-enamel">
            <div className="preview">
            </div>
            <div className="description">
                <h1>Make Your Own Jewelry Enamel</h1>
                <hr></hr>
                <p>
                    In 2022, I started taking metalsmithing classes at a local art center in Chicago. 
                    One of the teachers there mentioned off-hand to me that jewelry enamel (also called copper enamel or vitreous enamel) has a lot of similarities to low-fire ceramics. 
                    As a long-time potter and new metalsmith, this kickstarted interest in seeing if I could recreate enamels meant for metal with ceramic glaze materials. 
                    After many months of trial and error, I finally figured it out! This article shares everything I've learned and what you need to create your own enamel from home, whether you're a potter, metalsmith, or a total beginner.  
                </p>
                <p>If you want to skip my preamble, head to Getting Started</p>
            </div>
            <div className="content">
                {enamels.map(enamel => <img src={`images/enamels/${enamel.id}.png`} width="100"/> )}
                <br/>
                <br/>
                <h2>Getting Started</h2>
                <div className="group">
                    <img src="images/resources/make-your-own-jewelry-enamel/materials.png" width="1000"></img>
                    <p>
                        Paragraph todo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MakeYourOwnJewelryEnamel