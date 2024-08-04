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
                    One of the teachers there mentioned off-hand to me that jewelry enamel (also called copper enamel or vitreous enamel) has a lot of similarities to low-fire ceramic glazes. 
                    As a long-time potter and new metalsmith, this kickstarted my interest in seeing if I could recreate enamels meant for metal with ceramic glaze materials. 
                    After many months of trial and error, I finally figured out a formula! 
                    This page shares everything I've learned and what you'll need to create your own enamel from home, whether you're a potter, metalsmith, or new to both.
                </p>
                <p>If you want to skip my preamble, head to <a className="spotlight" href="#getting-started"><b>Getting Started</b></a>.</p>
            </div>
            <div className="content">
                <h2>What is Enamel?</h2>
                <div className="group">
                    <p>
                        <u>Vitreous enamel</u> (also called jewelry enamel or copper enamel) is a type of glass that can be melted on and fused to <u>metal</u>. 
                        It's most commonly used on copper, but can also be used on many other kinds of metals.
                        Enamels are generally sold in powder form, which the artist will sift onto their metal, apply heat with a torch or enameling kiln to make it glassy, and then repeat until they're happy with the results.
                        The result is a colored glass on the surface of the metal.
                    </p>
                    <div className="image-container">
                        <div><img src="images/resources/make-your-own-jewelry-enamel/enamel_example2.jpeg"/><a href="https://www.brackendesigns.com/product/part-2-enamel-recipe-tutorial-crackle-clear" target="_blank" rel="noreferrer">Laura Braken</a></div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/enamel_example.jpeg"/><a href="https://www.etsy.com/listing/1477171952/cobalt-bluelime-yellow-reversible" target="_blank" rel="noreferrer">MootPointJewelry</a></div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/enamel_example3.jpeg"/><a href="https://www.instagram.com/p/B_27zwEp2Kx/" target="_blank" rel="noreferrer">nash.quinn</a></div>
                    </div>
                    <p>
                        Enamel can be used for a wide array of projects, most commonly for jewelry like earrings or pendants as well as sculptural work.
                        In the U.S., most artists buy their enamel from <a href="https://thompsonenamel.com/" target="_blank" rel="noreferrer">Thompson Enamel</a>. 
                        They've got a great product, but because there's little to no competition they're priced quite high compared to equivalent products in the ceramics space, starting at $11.65 for a 2oz bag of one color.
                    </p>
                    {/* <img src="images/resources/make-your-own-jewelry-enamel/thompson.jpg"/> */}
                    <p>
                        Fundamentaly, an enamel is a <u>frit</u> with some pigments added for color and opacity. 
                        A <u>frit</u> takes common ingredients used to create glass like silica, alumina, and boron, and melts them to a point where they form a glass. 
                        That glass is then ground back down to a fine powder using something called a ball mill.
                        Frits will melt more readily than their original ingredients because it's already been melted once before.
                        This is desirable for use on metals because not much heat work is needed to get the enamel melted, just a minute or two with a torch or kiln at around 1450°F.
                    </p>
                </div>
                <h2>What is Glaze?</h2>
                <div className="group">
                    <p>
                        <u>Glaze</u> is a type of glass that can be melted on and fused to <u>clay</u>.
                        Most pottery you use on a daily basis has glaze on the exterior.
                        Unlike with enameling, there's a thriving community of ceramic artists who formulate their own glazes and consider it its own art form as much as it is a science.
                        You can see this community in action on <a href="https://glazy.org/" target="_blank" rel="noreferrer">glazy.org</a> or one of hundreds of Facebook groups like <a href="https://www.facebook.com/groups/181582648646840" target="_blank" rel="noreferrer">Ceramic Recipes/Formulas</a>.
                    </p>
                    <div className="image-container">
                        <div><img src="images/resources/make-your-own-jewelry-enamel/pottery_example.jpg"/>Julia Hindle</div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/pottery_example3.jpeg"/><a href="https://www.etsy.com/listing/1198698970/black-white-fern-mug?show_sold_out_detail=1&ref=nla_listing_details" target="_blank" rel="noreferrer">torimakespots</a></div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/pottery_example2.jpeg"/><a href="https://www.instagram.com/p/BzYmJ2kHzFC/" target="_blank" rel="noreferrer">floriangadsby</a></div>
                    </div>
                    <p>
                        One of the ingredients commonly used in glazes are ceramic frits. 
                        Some of these ceramic frits are nearly chemically identical to enamel.
                        The difference is that ceramic frits are formulated to melt at higher temperatures over longer periods of time, because ceramics are generally fired for 6-12 hours in a kiln up to 2,100°F-2,300°F compared to enamel's 1-2 minutes at 1450°F-1500°F.
                    </p>
                </div>
                <h2>My Process</h2>
                <div className="group">
                    <p>
                        I did research to find all ceramic frits with melting temperatures around 1400°F-1700°F and similar chemical makeups to what little I could find online about enamel frits. 
                        The melting temperature of copper is 1984°F, so I knew we needed to land below that number.
                    </p>
                    <img src="images/resources/make-your-own-jewelry-enamel/research.png"/>
                    <p>
                        I bought a creme brulee torch, punched some discs out of a thin copper sheet, and started seeing what I could get to melt on them.
                        My initial trials were all flops frankly. 
                        If I got the frit to melt, it would generally glob up into a ball.
                        Other times it would crystalize but never melt.
                    </p>
                    <div className="enamel"><img src={`images/enamels/i79-1.png`}/>79</div>
                    <div className="enamel"><img src={`images/enamels/i3110-1.png`}/>3110</div>
                    <div className="enamel"><img src={`images/enamels/i3110-2.png`}/>3110</div>
                    <div className="enamel"><img src={`images/enamels/i3124-1.png`}/>3124</div>
                    <div className="enamel"><img src={`images/enamels/i3124-2.png`}/>3124</div>
                    <div className="enamel"><img src={`images/enamels/i3134.png`}/>3134</div>
                    <div className="enamel"><img src={`images/enamels/i3195.png`}/>3195</div>
                    <div className="enamel"><img src={`images/enamels/i3269-1.png`}/>3269</div>
                    <div className="enamel"><img src={`images/enamels/i5301.png`}/>5301</div>
                    <p>
                        The number you see under each photo is the "name" of the frit, which is usually just a 2-4 digit number that its known by. 
                        I finally saw started getting more fluid melts when I re-tried <a href="https://digitalfire.com/material/553" target="_blank" rel="noreferrer">Frit 79</a> and <a href="https://digitalfire.com/material/371" target="_blank" rel="noreferrer">Frit 3269</a> and perfected my technique with the torch (more on that later).
                    </p>
                    <div className="enamel"><img src={`images/enamels/i79-2.png`}/>79</div>
                    <div className="enamel"><img src={`images/enamels/i3269-2.png`}/>3269</div>
                    <p>
                        Once I got these frits to melt on their own, I started experimenting with adding <u>colorants</u> and <u>opacifiers</u>. 
                    </p>
                    <p>
                        For ceramic glazes, <u>colorants</u> are either raw metals like cobalt caronate or copper oxide in powder forms, or something called a "stain".
                        A <u>stain</u> is similar to a frit in that it's a set of colorants that were pre-fired together and then ground back down to create a more uniform color.
                        I figured these stains were probably a good place to start for trying to add color to my enamel.
                    </p>
                    <p>
                        <u>Opacifiers</u> are minerals that make your glass more opaque or more white. 
                        For glazes, the three we commonly use are tin oxide, zircopax (brand name for zirconium silicate), and titanium dioxide.
                        It was pretty easy to try all three, and zircopax unequivocally won. 
                    </p>
                    <p>
                        It took me some time to figure out the right ratio between the frit, stains, and zircopax, but eventually nailed down a formula.
                        I found that in general for every 6 parts of the frit, you can add up to 1 part zircopax, 1 part stains.
                        All of the recipes I've tried so far can be found in the <a className="spotlight" href="#mixing-the-enamel"><b>Mixing the Enamel</b></a> section.
                    </p>
                    <p>
                        Another challenge for me was figuring out the best way to heat the piece enough to get a fluid enamel melt without the color dulling or black speckles popping up in the surface of the enamel.
                    </p>
                    <div className="enamel"><img src={`images/enamels/5-1.png`}/></div>
                    <div className="enamel"><img src={`images/enamels/25.png`}/></div>
                    <p>
                        The longer the piece is heated, the more likely those two defects will arise.
                        I ultimately found that using an enameling kiln set to 1650°F for 3 minutes was more dependable than using the torch.
                        Torches are more accessible and absolutely still worth experimenting with if it's all you have, but you may notice some limitations like I did.
                        For example, that "gray" enamel photo above came out like this when I used my kiln instead:
                    </p>
                    <div className="enamel"><img src={`images/enamels/5-2.png`}/></div>
                    <p>
                        I plan to continue further perfecting my homemade enamels, but thought I had reached a point where it was worth sharing my research.
                        I'll admit Thompson's enamels definitely melt faster and smooth out better than mine, but mine are 1/8th of the cost and you get to have control of the precise color and look of your final piece.
                        Plus it's just fun!
                    </p>
                </div>
                <h2 id="getting-started">Getting Started</h2>
                <div className="group">
                    <img src="images/resources/make-your-own-jewelry-enamel/materials.png"/>
                    <p>Here's what you'll need to start out with my enamel:</p>
                    <ul>
                        <li><b>Frit 3269</b> (1lb-5lb)<span>Buy from any ceramics supply store: <a href="https://uspigment.com/product/frit-3269/" target="_blank" rel="noreferrer">US Pigment</a>, <a href="https://www.theceramicshop.com/product/1203/frit-3269/" target="_blank" rel="noreferrer">The Ceramic Shop</a>, <a href="https://www.baileypottery.com/c-030-026.html" target="_blank" rel="noreferrer">Bailey Pottery</a></span></li>
                        <li><b>Zircopax</b> (1/4lb-5lb)<span>Buy from any ceramics supply store: <a href="https://uspigment.com/product/zircopax/" target="_blank" rel="noreferrer">US Pigment</a>, <a href="https://www.theceramicshop.com/product/387/zircopax-ultrox-s/" target="_blank" rel="noreferrer">The Ceramic Shop</a>, <a href="https://www.baileypottery.com/c-030-051.html" target="_blank" rel="noreferrer">Bailey Pottery</a></span></li>
                        <li><b>Mason stains</b> or <b>inclusion stains</b> (1tsp-1/4lb each)<span>Buy sample packs or 1/4lb bags from a ceramics supply store or Etsy: <a href="https://uspigment.com/product/sample-pack/" target="_blank" rel="noreferrer">US Pigment (sample pack)</a>, <a href="https://www.theceramicshop.com/store/department/57/stains/" target="_blank" rel="noreferrer">The Ceramic Shop (1/4lb bags)</a>, <a href="https://www.etsy.com/listing/860029664/mason-stains-sample-set-1-ten-color?gpla=1&gao=1&" target="_blank" rel="noreferrer">Etsy (sample pack of 10)</a>, <a href="https://www.etsy.com/listing/1394801851/mason-stain-variety-pack-6-beautiful" target="_blank" rel="noreferrer">Etsy (sample pack of 6)</a></span></li>
                        <li><b>Jewelry scale</b><span>I use <a href="https://www.amazon.com/gp/product/B07ZSC34WW/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noreferrer">this one</a> from Amazon</span></li>
                        <li><b>100 mesh sieve/sifter</b><span>Buy from <a href="https://www.theceramicshop.com/product/10571/sieve-test-size-100-mesh/" target="_blank" rel="noreferrer">The Ceramic Shop</a> or make your own from a <a href="https://www.amazon.com/dp/B09VP2KR2W?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank" rel="noreferrer">mesh sheet</a>, super glue, and some kind of cylinder</span></li>
                        <li><b>Torch</b><span>Any creme brulee torch will do: <a href="https://www.amazon.com/gp/product/B01G3MZWBU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noreferrer">Amazon</a></span></li>
                        <li><b>Butane refills</b><span>Available lots of places: <a href="https://www.amazon.com/Zippo-Butane-Fuel-5-82-oz/dp/B0062YBCNW" target="_blank" rel="noreferrer">Amazon</a>, <a href="https://www.acehardware.com/departments/heating-and-cooling/fireplaces/butane-lighters/48123" target="_blank" rel="noreferrer">Ace Hardware</a></span></li>
                        <li><b>Heat-proof mesh + stand</b> <span>Buy from <a href="https://www.firemountaingems.com/3477TL.html" target="_blank" rel="noreferrer">Fire Mountain Gems</a> or use any steel mesh / steel stand</span></li>
                        <li><b>Copper sheets or rounds (16-22 guage)</b><span>Buy from any metal/industrial supply store or Etsy: <a href="https://www.etsy.com/listing/214164796/22-gauge-x-58-inch-copper-disc-50-pieces" target="_blank" rel="noreferrer">Etsy (22Ga rounds)</a>, <a href="https://www.riogrande.com/product/copper-6-x-12-sheet-18-ga.-dead-soft/132118GP" target="_blank" rel="noreferrer">Rio Grande (18Ga sheets)</a>, <a href="https://www.mcmaster.com/8963K504/" target="_blank" rel="noreferrer">McMaster-Carr (19Ga sheets)</a>, <a href="https://www.amazon.com/Tynulox-Copper-Jewelry-Repairs-Electrical/dp/B0B9N9J3B3" target="_blank" rel="noreferrer">Amazon (18Ga sheets)</a></span></li>
                    </ul>
                    <p>Optional add-ons / alternatives:</p>
                    <ul>
                        <li><b>Pack of jars</b><span> ULINE</span></li>
                        <li><b>Respirator</b><span> </span></li>
                        <li><b>Pickle</b><span> </span></li>
                        <li><b>Jeweler's saw</b><span> </span></li>
                        <li><b>Enameling kiln</b><span> Not a necessity, but you'll get more consistent results than the torch: Prometheus Pro-1</span></li>
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
                    {enamels.map(enamel => <div className="enamel"><img src={`images/enamels/${enamel.id}.png`}/></div>)}
                </div>
                <h2>Torch Firing</h2>
                <div className="group">
                    <p>
                        Paragraph todo.
                    </p>
                </div>
                <h2>Kiln Firing</h2>
                <div className="group">
                    <img src="images/resources/make-your-own-jewelry-enamel/kiln.gif"/>
                    <p>
                        Paragraph todo.
                    </p>
                </div>

                <h2>Enameling on Casted Metal</h2>
                <div className="group">
                    <img src="images/resources/make-your-own-jewelry-enamel/ring.JPG"/>
                    <p>
                        Paragraph todo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MakeYourOwnJewelryEnamel