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
                    As a long-time potter and new metalsmith, this kickstarted my interest in seeing if I could recreate enamels meant for metal with ceramic glaze materials. 
                    After many months of trial and error, I finally figured out a formula! 
                    This page shares everything I've learned and what you'll need to create your own enamel from home, whether you're a potter, metalsmith, or neither.
                </p>
                <p>If you want to skip my preamble, head to <a className="spotlight" href="#getting-started"><b>Getting Started</b></a>.</p>
                <div className="image-container">
                    <img src="images/resources/make-your-own-jewelry-enamel/earring.JPG"/>
                    <img src="images/resources/make-your-own-jewelry-enamel/ring.JPG"/>
                    <img src="images/resources/make-your-own-jewelry-enamel/mesh.JPG"/>
                </div>
            </div>
            <div className="content">
                <h2>What is Enamel?</h2>
                <div className="group">
                    <p>
                        Vitreous enamel (also called jewelry enamel or copper enamel) is a type of glass that can be melted on and fused to metal. 
                        It's most commonly used on copper, but can also be used on many other kinds of metals.
                        Enamels are generally sold in powder form, which the artist will sift onto their metal, apply heat with a torch or enameling kiln, and then repeat until they're happy with the results.
                        The result is a colored glass on the surface of the metal.
                    </p>
                    <p>
                        Enamel can be used for a wide array of projects, most commonly for jewelry like earrings or pendants as well as sculptural work.
                        In the U.S., most artists buy their enamel from <a href="https://thompsonenamel.com/" target="_blank" rel="noreferrer">Thompson Enamel</a>. 
                        They've got a great product, but because there's little to no competition they're priced quite high compared to equivalent products in the ceramics space, starting at $11.65 for a 2oz container.
                    </p>
                    <p>
                        Fundamentaly, an enamel is a frit with colorants and opacifiers mixed in. 
                        A frit just takes common ingredients used to create glass like silica, alumina, boron, and melts them to a point where they form a glass. 
                        That glass is then ground back down to a fine powder.
                        Frits will melt more readily than their original ingredients because it's already been melted once.
                        This is desirable for something like metals because minimal heat work is needed to get the enamel melted, just a minute or two with a torch or kiln at around 1450°F.
                    </p>
                </div>
                <h2>What is Glaze?</h2>
                <div className="group">
                    <p>
                        Glaze is a type of glass that can be melted on and fused to clay.
                        Most pottery you use on a day-to-day basis has glaze on the exterior.
                        Unlike with enameling, there's a thriving community of ceramic artists who formulate their own glazes and consider it its own art form as much as it is a science.
                        You can see this community in action on <a href="https://glazy.org/" target="_blank" rel="noreferrer">glazy.org</a> or one of hundreds of Facebook groups like <a href="https://www.facebook.com/groups/181582648646840" target="_blank" rel="noreferrer">Ceramic Recipes/Formulas</a>.
                    </p>
                    <p>
                        One of the ingredients commonly used in glazes are ceramic frits. 
                        Some of these ceramic frits are nearly chemically identical to enamel.
                        The difference is that ceramic frits are generally formulated to melt at higher temperatures over longer periods of time, because ceramics are generally fired for 6-12 hours in a kiln up to 2,100°F-2,300°F compared to enamel's 1-2 minutes at 1450°F-1500°F.
                    </p>
                </div>
                <h2>My Process</h2>
                <div className="group">
                    <p>
                        I did research to find all ceramic frits with melting temperatures around 1400°F-1700°F. 
                        The melting temperature of copper is 1,984°F, so I knew we needed to land below that number.
                        I bought a creme brulee torch, punched some discs out of a copper sheet, and started seeing what I could get to melt on them.
                        My initial trials were all flops frankly. 
                        This is what we were working with:
                    </p>
                    <img className="enamel" src={`images/enamels/i79-1.png`}/>
                    <img className="enamel" src={`images/enamels/i3110-1.png`}/>
                    <img className="enamel" src={`images/enamels/i3110-2.png`}/>
                    <img className="enamel" src={`images/enamels/i3124-1.png`}/>
                    <img className="enamel" src={`images/enamels/i3124-2.png`}/>
                    <img className="enamel" src={`images/enamels/i3134.png`}/>
                    <img className="enamel" src={`images/enamels/i3195.png`}/>
                    <img className="enamel" src={`images/enamels/i5301.png`}/>
                    <p>
                        Then I finally saw started getting more fluid melts when I tried Frit 79 and Frit 3269 and also perfected my technique with the torch.
                    </p>
                    <img className="enamel" src={`images/enamels/i79-2.png`}/>
                    <img className="enamel" src={`images/enamels/i3269-1.png`}/>
                    <img className="enamel" src={`images/enamels/i3269-2.png`}/>
                    <p>
                        Once I got a frit to melt on its own, I started experimenting with adding colorants and opacifiers. 
                        In ceramics, you can alter the color of glazes with either raw metals like cobalt caronate or copper oxide, or you can use something called a "stain".
                        A stain is similar to a frit in that it's a set of colorants that were pre-fired together and then ground back down to create a more uniform color.
                        I figured these stains were probably a good place to start for trying to add color to my DIY enamel.
                    </p>
                    <p>
                        Opacifiers are minerals that make your glass more opaque or more white. 
                        For glazes, the three we commonly use are tin oxide, zircopax (brand name for zirconium silicate), and titanium dioxide.
                        It was pretty easy to try all three, and zircopax unequivocally won. 
                    </p>
                    <p>
                        It took me some time to figure out the right ratio between the frit, stains, and zircopax, but eventually nailed down a formula.
                        I found that in general for every 13 parts of the frit, you can add up to 2 parts zircopax, 2 parts stains.
                        All of the recipes I've tried so far can be found in the <a className="spotlight" href="#mixing-the-enamel"><b>Mixing the Enamel</b></a> section.
                    </p>
                    <p>
                        Another challenge for me was figuring out the best way to heat the piece enough to get a fluid enamel melt without the color dulling or black speckles popping up in the surface of the enamel.
                    </p>
                    <img className="enamel" src={`images/enamels/5-1.png`}/>
                    <img className="enamel" src={`images/enamels/25.png`}/>
                    <p>
                        The longer the piece is heated, the more likely those two defects will arise.
                        I ultimately found that using an enameling kiln set to 1650°F for 3 minutes was more dependable than using the torch.
                        Torches are more accessible and absolutely still worth experimenting with if it's all you have, but you may notice some limitations like I did.
                        For example, that "gray" enamel photo above came out like this when I used my kiln instead:
                    </p>
                    <img className="enamel" src={`images/enamels/5-2.png`}/>
                    <p>
                        I plan to continue further perfecting my homemade enamels, but thought I had reached a point where it was worth sharing my research.
                        I'll admit Thompson's enamels definitely melt more readily and smooth out much easier than mine, but mine are 1/8th of the cost and you get to have control of the precise color and look of your final piece.
                    </p>
                </div>
                <h2 id="getting-started">Getting Started</h2>
                <div className="group">
                    <img src="images/resources/make-your-own-jewelry-enamel/materials.png"/>
                    <p>Here's what you'll need to start out:</p>
                    <ul>
                        <li><b>Frit 3269</b> (1lb-5lb)<span>- buy from any ceramics supply store: <a href="https://uspigment.com/product/frit-3269/" target="_blank" rel="noreferrer">US Pigment</a>, <a href="https://www.theceramicshop.com/product/1203/frit-3269/" target="_blank" rel="noreferrer">The Ceramic Shop</a>, <a href="https://www.baileypottery.com/c-030-026.html" target="_blank" rel="noreferrer">Bailey Pottery</a></span></li>
                        <li><b>Zircopax</b> (1/4lb-5lb)<span>- buy from any ceramics supply store: </span></li>
                        <li><b>Mason stains</b> or <b>inclusion stains</b> (1tsp-1/4lb each)<span>- buy sample packs or 1/4lb bags from a ceramics supply store or Etsy: <a href="https://uspigment.com/product/sample-pack/" target="_blank" rel="noreferrer">US Pigment (sample pack)</a>, <a href="https://www.theceramicshop.com/store/department/57/stains/" target="_blank" rel="noreferrer">The Ceramic Shop (1/4lb bags)</a></span></li>
                        <li><b>Jewelry scale</b><span>- I use <a href="https://www.amazon.com/gp/product/B07ZSC34WW/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noreferrer">this one</a> from Amazon</span></li>
                        <li><b>100 mesh sieve/sifter</b><span>- buy from <a href="https://www.theceramicshop.com/product/10571/sieve-test-size-100-mesh/" target="_blank" rel="noreferrer">The Ceramic Shop</a> or make your own from a <a href="https://www.amazon.com/dp/B09VP2KR2W?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank" rel="noreferrer">mesh sheet</a>, super glue, and some kind of cylinder</span></li>
                        <li><b>Torch</b><span>- any creme brulee torch will do: Amazon</span></li>
                        <li><b>Butane refills</b><span>- available lots of places: Amazon</span></li>
                        <li><b>Heat-proof mesh</b> <span>- any steel mesh sheet will do: Rio Grande</span></li>
                        <li><b>Heat-proof stand</b><span>- any steel structure to prop up the mesh should work: Rio Grande</span></li>
                        <li><b>Copper sheets or rounds (16-22 guage)</b><span>- buy from any metal/industrial supply store or Etsy: </span></li>
                    </ul>
                    <p>Optional add-ons / alternatives:</p>
                    <ul>
                        <li><b>Pack of jars</b><span> - ULINE</span></li>
                        <li><b>Respirator</b><span> - </span></li>
                        <li><b>Pickle</b><span> - </span></li>
                        <li><b>Enameling kiln</b><span> - not a necessity, but you'll get more consistent results than the torch: Prometheus</span></li>
                    </ul>
                </div>
                <h2>Preparing the Metal</h2>
                <div className="group">
                    <p>
                        Paragraph todo.
                    </p>
                </div>
                <h2 id="mixing-the-enamel">Mixing the Enamel</h2>
                <div className="group">
                    <p>
                        Paragraph todo.
                    </p>
                    {enamels.map(enamel => <img className="enamel" src={`images/enamels/${enamel.id}.png`}/> )}
                </div>
                <h2>Torch Firing</h2>
                <div className="group">
                    <p>
                        Paragraph todo.
                    </p>
                </div>
                <h2>Kiln Firing</h2>
                <div className="group">
                    <p>
                        Paragraph todo.
                    </p>
                </div>

                <h2>Enameling on Casted Metal</h2>
                <div className="group">
                    <p>
                        Paragraph todo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MakeYourOwnJewelryEnamel