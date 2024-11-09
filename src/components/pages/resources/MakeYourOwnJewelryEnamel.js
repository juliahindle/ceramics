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
                    As a long-time potter and new metalsmith, this kickstarted my interest in seeing if I could recreate enamel meant for metal with ceramic glaze materials. 
                    After many months of trial and error, I finally figured out a formula! 
                    This page shares everything I've learned and what you'll need to create your own enamel from home, whether you're a potter, metalsmith, or new to both.
                </p>
                <p>If you want to skip my preamble, head to <a className="spotlight" href="#getting-started"><b>Getting Started</b></a>.</p>
            </div>
            <div className="content">
                <h2>What is Enamel?</h2>
                <div className="group">
                    <p>
                        <b>Vitreous enamel</b> (also called jewelry enamel or copper enamel) is a type of glass that can be melted and fused to <b>metal</b>. 
                        It's most commonly used on sheets of copper, but can also be used on many other kinds of metals.
                        Enamels are generally sold as a fine powder, which the artist will sift onto their metal, apply heat with a torch or enameling kiln to make it glassy, and then repeat until they're happy with the results.
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
                        They've got a great product, but because there's little to no competition they're priced quite high compared to equivalent products in the ceramics space, starting at $11.65 for a small 2oz bag of one color.
                    </p>
                    {/* <img src="images/resources/make-your-own-jewelry-enamel/thompson.jpg"/> */}
                    <p>
                        Fundamentaly, an enamel is a <b>frit</b> with some pigments added for color and opacity. 
                        A <b>frit</b> takes common ingredients used to create glass like silica, alumina, and boron, and melts them to a point where they form a glass. 
                        That glass is then ground back down to a fine powder using something called a ball mill.
                        Frits will melt more readily than their original ingredients because it's already been melted once before.
                        This is desirable for use on metals because not much heat work is needed to get the enamel melted, just a minute or two with a torch or kiln at around 1450°F.
                    </p>
                </div>
                <h2>What is Glaze?</h2>
                <div className="group">
                    <p>
                        <b>Glaze</b> is a type of glass that can be melted and fused to <b>clay</b>.
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
                        Whereas enamel is usually applied in as a powder to metal, glazes start as powder but are then generally mixed with water so it can be applied to clay with a paint brush, spray gun, or be dipped into.
                        One of the ingredients commonly used in glazes are <b>ceramic frits</b>. 
                        They're manufactured the same way enamel frits are, with the difference being that ceramic frits are formulated to melt at higher temperatures over longer periods of time.
                        This is because ceramics are generally fired for 6-12 hours in a kiln up to 2,100°F-2,300°F compared to enamel's 1-2 minutes at 1450°F-1500°F.
                    </p>
                </div>
                <h2>My Process</h2>
                <div className="group">
                    <p>
                        The similarities between ceramic frits and enamel frits got my gears turning. 
                        I wanted to see how similar the ingredients of the two were, but while that information is readily available for ceramic frits, enamel information was severely lacking online and in literature.
                        I ended up looking at old patents like <a href="https://patents.google.com/patent/RU92004142A/en?q=(jewelry+enamel)&oq=jewelry+enamel" target="_blank" rel="noreferrer">this one</a> from 1997 and <a href="https://patents.google.com/patent/SU1491823A1/en?q=(jewelry+enamel)&oq=jewelry+enamel" target="_blank" rel="noreferrer">this one</a> from 1989 to get the info I was after.
                        I did research to find all ceramic frits with melting temperatures around 1400°F-1700°F and similar chemical makeups to what little I could find about enamel frits. 
                        The melting temperature of copper is 1984°F, so I knew we needed to land below that number.
                    </p>
                    {/* <img src="images/resources/make-your-own-jewelry-enamel/research.png"/> */}
                    <p>
                        I bought a creme brulee torch, punched some 5/8in discs out of a thin copper sheet, and started seeing what I could get to melt on them.
                        My initial trials were all flops frankly. 
                        If I got the frit to melt, it would generally glob up into a ball.
                        Other times it would crystallize but never melt.
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
                        The number you see under each photo is the name of the frit, which is usually just a 2-4 digit number that its known by. 
                        I finally started getting more fluid melts when I re-tried <a href="https://digitalfire.com/material/553" target="_blank" rel="noreferrer">Frit 79</a> and <a href="https://digitalfire.com/material/371" target="_blank" rel="noreferrer">Frit 3269</a> and perfected my technique with the torch (more on that later).
                    </p>
                    <div className="enamel"><img src={`images/enamels/i79-2.png`}/>79</div>
                    <div className="enamel"><img src={`images/enamels/i3269-2.png`}/>3269</div>
                    <p>
                        Once I got these frits to melt on their own, I started experimenting with adding <b>colorants</b> and <b>opacifiers</b>. 
                    </p>
                    <p>
                        For ceramic glazes, <b>colorants</b> are either raw metals like cobalt carbonate or copper oxide ground down into powders, or something called a "stain".
                        A <b>stain</b> is similar to a frit in that it's a set of colorants that were pre-fired together and then ground back down to create a more uniform color.
                        I figured these stains were probably a good place to start for trying to add color to my enamel since they're known for giving a reliable solid color.
                    </p>
                    <p>
                        <b>Opacifiers</b> are minerals that make your glass more opaque or more white. 
                        For glazes, the three we commonly use are tin oxide, Zircopax (brand name for zirconium silicate), and titanium dioxide.
                        It was pretty easy to try all three, and Zircopax performed the best. 
                    </p>
                    <p>
                        It took me some time to figure out the right ratio between the frit, stains, and zircopax, but eventually nailed down a formula.
                        I found that in general for every 6 parts of the frit, you can add up to 1 part zircopax, 1 part stains.
                        All of the recipes I've tried so far can be found in the <a className="spotlight" href="#choosing-the-enamel-recipe"><b>Choosing the Enamel Recipe</b></a> section.
                    </p>
                    <p>
                        Another challenge for me was figuring out the best way to heat the piece enough to get a fluid enamel melt without the color dulling or black specks popping up in the surface of the enamel.
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
                        I plan to continue iterating on my homemade enamels, but I reached a point where I thought it was worth sharing my research!
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
                        <li><b>Copper sheets or rounds (16-22 guage)</b><span>Buy from any metal/industrial supply store or Etsy: <a href="https://www.etsy.com/listing/214164796/22-gauge-x-58-inch-copper-disc-50-pieces" target="_blank" rel="noreferrer">Etsy (22Ga rounds)</a>, <a href="https://www.riogrande.com/product/copper-6-x-12-sheet-18-ga.-dead-soft/132118GP" target="_blank" rel="noreferrer">Rio Grande (18Ga sheets)</a>, <a href="https://www.mcmaster.com/8963K504/" target="_blank" rel="noreferrer">McMaster-Carr (19Ga sheets)</a>, <a href="https://www.amazon.com/Tynulox-Copper-Jewelry-Repairs-Electrical/dp/B0B9N9J3B3" target="_blank" rel="noreferrer">Amazon (18Ga sheets)</a></span></li>
                        <li><b>Jewelry scale</b><span>I use <a href="https://www.amazon.com/gp/product/B07ZSC34WW/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noreferrer">this one</a> from Amazon</span></li>
                        <li><b>100 mesh sieve/sifter</b><span>Buy from <a href="https://www.theceramicshop.com/product/10571/sieve-test-size-100-mesh/" target="_blank" rel="noreferrer">The Ceramic Shop</a> or make your own from a <a href="https://www.amazon.com/dp/B09VP2KR2W?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank" rel="noreferrer">mesh sheet</a>, super glue, and some kind of cylinder</span></li>
                        <li><b>Torch</b><span>Any creme brulee torch will do: <a href="https://www.amazon.com/gp/product/B01G3MZWBU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noreferrer">Amazon</a></span></li>
                        <li><b>Butane refills</b><span>Available lots of places: <a href="https://www.amazon.com/Zippo-Butane-Fuel-5-82-oz/dp/B0062YBCNW" target="_blank" rel="noreferrer">Amazon</a>, <a href="https://www.acehardware.com/departments/heating-and-cooling/fireplaces/butane-lighters/48123" target="_blank" rel="noreferrer">Ace Hardware</a></span></li>
                        <li><b>Heat-proof mesh + stand</b> <span>Buy from <a href="https://www.firemountaingems.com/3477TL.html" target="_blank" rel="noreferrer">Fire Mountain Gems</a> or use any steel mesh / steel stand</span></li>
                    </ul>
                    <p>Optional add-ons:</p>
                    <ul>
                        <li><b>Pack of jars</b><span>Helpful for storing enamel - <a href="https://www.uline.com/Product/Detail/S-14505/Jars/White-Round-Wide-Mouth-Plastic-Jars-2-oz-White-Cap" target="_blank" rel="noreferrer">ULINE (24 pack)</a></span></li>
                        <li><b>Respirator</b><span>Protect yourself from harmful silica dust - <a href="https://www.theceramicshop.com/product/12131/respirator-3m-6300/" target="_blank" rel="noreferrer">The Ceramics Shop</a>, <a href="https://www.amazon.com/3M-Facepiece-Respirator-Respiratory-Protection/dp/B001NDN29O" target="_blank" rel="noreferrer">Amazon</a></span></li>
                        <li><b>Jeweler's saw</b><span>For cutting copper sheets - <a href="https://www.riogrande.com/product/german-adjustable-jewelers-saw-frame/110007GP/?code=110042" target="_blank" rel="noreferrer">Rio Grande (frame)</a>, <a href="https://www.amazon.com/Pike-Jewelers-Saw-Blades-Pack/dp/B006LDWM2O/" target="_blank" rel="noreferrer">Amazon (blades)</a></span></li>
                        <li><b>Disc cutter</b><span>For cutting copper sheets - <a href="https://www.firemountaingems.com/5115TL.html" target="_blank" rel="noreferrer">Fire Mountain Gems</a></span></li>
                    </ul>
                    <p>If you want to use a kiln instead of a torch, here's what I'd look at:</p>
                    <ul>
                        <li><b>Enameling kiln</b><span><a href="https://www.prometheushobby.com/Enamelling/Enameling-Kilns/Prometheus-Kilns-PRO-1-p119c71c106.html" target="_blank" rel="noreferrer">Prometheus Pro-1</a></span></li>
                        <li><b>Long spatula</b><span><a href="https://www.riogrande.com/product/steel-firing-spatula/350002GP/?recommendationId=4461668261761&code=350002" target="_blank" rel="noreferrer">Rio Grande</a></span></li>
                        <li><b>Kiln gloves</b><span><a href="https://www.theceramicshop.com/product/31280/heatblok-safety-cuff-glove/" target="_blank" rel="noreferrer">The Ceramic Shop</a></span></li>
                        <li><b>Kiln glasses</b><span><a href="https://www.theceramicshop.com/product/1758/kiln-safety-glasses/" target="_blank" rel="noreferrer">The Ceramic Shop</a></span></li>
                        <li><b>Mesh stand</b><span><a href="https://www.riogrande.com/product/stainless-steel-mesh-firing-racks/350007GP/?code=350008" target="_blank" rel="noreferrer">Rio Grande</a></span></li>
                    </ul>
                    <p>In this article, I'm going to focus on where my enamel process differs from norm. If you're not familiar with basic enamel techniques already, you can read up on it in <a href="https://www.cooksongold.com/blog/learn/basic-guide-on-how-to-enamel/" target="_blank" rel="noreferrer">this article</a> or watch <a href="https://www.youtube.com/watch?v=HRya8Wq6yBs" target="_blank" rel="noreferrer">this video</a></p>
                </div>
                <h2 id="choosing-the-enamel-recipe">Choosing the Enamel Recipe</h2>
                <p>
                    I found the best ratios of ingredients to be 60%-100% Frit 3269, 0%-10% Zircopax, and 0-15% stains/colorants. 
                    I'm including some of my recipes here, but you can also feel free to experiment and try your own ingredient combos.
                </p>
                <p>
                    MS stands for mason stain, which can be purchased from any ceramic supply store like <a href="https://www.theceramicshop.com/store/department/57/stains/" target="_blank" rel="noreferrer">The Ceramic Shop</a>. 
                    USP stands for US Pigment, which is a company that makes and sells their own stains.
                    See their online storefront <a href="https://uspigment.com/product-category/inclusion-stains/" target="_blank" rel="noreferrer">here</a>.
                </p>
                <div className="group">
                    <div className="enamel-container">
                        <div class="enamel"><img src="images/enamels/1.png"/>100% Frit 3269</div>
                        <div class="enamel"><img src="images/enamels/4.png"/>90% Frit 3269<br/>10% Zircopax</div>
                        <div class="enamel"><img src="images/enamels/20.png"/>80% Frit 3269<br/>9% Zircopax<br/>11% USP<br/>Strawberry Red</div>
                        <div class="enamel"><img src="images/enamels/21.png"/>87% Frit 3269<br/>13% USP<br/>Strawberry Red</div>
                        <div class="enamel"><img src="images/enamels/22.png"/>87% Frit 3269<br/>13% USP Orange</div>
                        <div class="enamel"><img src="images/enamels/23.png"/>80% Frit 3269<br/>9% Zircopax<br/>11% USP Orange</div>
                        <div class="enamel"><img src="images/enamels/7-4.png"/>76% Frit 3269<br/>12% Zircopax<br/>12% MS 6410</div>
                        <div class="enamel"><img src="images/enamels/6.png"/>82% Frit 3269<br/>12% Zircopax<br/>6% MS 6410</div>
                        <div class="enamel"><img src="images/enamels/26.png"/>76% Frit 3269<br/>12% Zircopax<br/>USP Lime</div>
                        <div class="enamel"><img src="images/enamels/25.png"/>87% Frit 3269<br/>13% USP Lime</div>
                        <div class="enamel"><img src="images/enamels/8.png"/>82% Frit 3269<br/>12% Zircopax<br/>6% MS 6376</div>
                        <div class="enamel"><img src="images/enamels/9-2.png"/>76% Frit 3269<br/>12% Zircopax<br/>12% MS 6376</div>
                        <div class="enamel"><img src="images/enamels/5-2.png"/>88% Frit 3269<br/>6% Zircopax<br/>6% MS 6368</div>
                        <div class="enamel"><img src="images/enamels/24.png"/>87% Frit 3269<br/>13% MS 6368</div>
                        <div class="enamel"><img src="images/enamels/11-2.png"/>76% Frit 3269<br/>12% Zircopax<br/>12% MS 6304</div>
                        <div class="enamel"><img src="images/enamels/27.png"/>91% Frit 3269<br/>9% Erbium Oxide</div>
                        <div class="enamel"><img src="images/enamels/28.png"/>91% Frit 3269<br/>14% Erbium Oxide</div>
                        {/* {enamels.filter(enamel => enamel.status !== 'inactive').map(enamel => <div className="enamel"><img src={`images/enamels/${enamel.id}.png`}/></div>)} */}
                    </div>
                </div>
                <h2 id="mixing-the-enamel">Mixing the Enamel</h2>
                <div className="group">
                    <p>
                        To mix the enamel, you first need to decide how many grams you want to mix up. 
                        I usually do 8-10 grams, which is about a tablespoon.
                        The recipes are just ratios, so you can do the math to figure out how much frit, colorant, and opacifier you need to reach your target amount.
                    </p>
                    <p class="smaller">
                        Example:
                        My recipe is 80% Frit 3269, 14% Zircopax, 6% Mason Stain 6304 and I want to mix 8 grams. I'd do 8g x 0.8, 8g x 0.14, 8g x 0.06 to get the final amounts: 6.4g, 1.12g and 0.48g respectively.
                        If you want an easier option, just make 10g instead of 8g, so all you have to do is divide each percentage number by 10.
                    </p>
                    <p>Once you know how much you need of each ingredient, here's the steps for mixing it:</p>
                    <ol className="steps smaller">
                        <li>Put on your respirator or mask to avoid breathing in harmful dust.</li>
                        <li>Place a small empty jar on your jewelry scale.</li>
                        <li>Turn on the scale and make sure it's tared to 0g. (You can use another unit of measure, but I use grams)</li>
                        <li>Use a spoon to scoop Frit 3269 into the jar until you reach your target weight.</li>
                        <li>Once you have the right amount, tare the scale again and start scooping in your next ingredient.</li>
                        <li>Repeat until all ingredients are in the jar.</li>
                        <li>Close the lid tightly and then shake it aggressively for about a minute.</li>
                        <li>Wait another minute aferwards for the dust to settle before opening the jar.</li>
                    </ol>
                    <p>That's it! Now you can move onto application.</p></div>
                <h2 id="mixing-the-enamel">Applying the Enamel</h2>
                <div className="group">
                    <p>
                        This enamel is much finer than Thompson's enamel, so you'll want to use a finer mesh size than traditional enamel sieves. 
                        I use 80 or 100 mesh. Otherwise these steps are the exact same as usual.
                    </p>
                </div>
                <h2>Torch Firing</h2>
                <div className="group">
                    <p>
                        Torch firing will take longer than usual. 
                        You'll want to apply direct heat from the torch for a couple minutes or until you see the powder start to become fluid.
                        Aim the torch underneath your piece.
                    </p>
                    <p>
                        You may notice the enamel isn't leveling out smoothly on the first coat. 
                        It'll level out more with each coat of enamel you apply.
                        I generally do three coats of enamel. 
                    </p>
                    <div className="image-container">
                        <div><img src="images/resources/make-your-own-jewelry-enamel/layer1.jpg"/>layer 1</div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/layer2.jpg"/>layer 2</div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/layer3.jpg"/>layer 3</div>
                    </div>
                    <p>
                        You can also try briefly aiming the torch at the top of the enamel.
                    </p>
                    <p>
                        The more that high heat is applied, the more likely you are to see the color fade or black specks to appear. 
                        If you're struggling to get past this, try a different enamel recipe or consider using a kiln instead, which is what I've had even more success with.
                    </p>
                    <div className="enamel"><img src={`images/enamels/5-1.png`}/></div>
                    <div className="enamel"><img src={`images/enamels/25.png`}/></div>
                </div>

                <h2>Kiln Firing</h2>
                <div className="group">
                    <img src="images/resources/make-your-own-jewelry-enamel/kiln.gif"/>
                    <p>
                        The biggest difference with my enamels is you'll need to use a higher temperature and let the pieces sit in the kiln even longer than usual.
                        I've found 3 minutes at 1650°F to be most successful versus the traditional 1-2 minutes at 1450°F-1500°F.
                        You could also try a lower temperature with a longer duration.
                    </p>
                </div>

                <h2>Enameling on Casted Metal</h2>
                <div className="group">
                    <div className="image-container two">
                        <div><img src="images/resources/make-your-own-jewelry-enamel/gallery3.jpg"/></div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/ring2.JPG"/></div>
                    </div>
                    <p>
                        I've had success using my enamel on metal rings I casted.
                    </p>
                    <p>
                        <b>Casting</b> is the process of pouring molten metal into a mold that's made out of plaster, sand, or some other material that can handle high heat.
                        I take metal casting classes at a local art center, which is where I made these rings and then applied the enamel at home.
                    </p>
                    <p>
                        The biggest difference between enameling on sheets of metal versus casted metal is that it'll take more heat work to get the enamel melted since the thick metal will take longer to heat up.
                        I tried and failed at using a torch for this (melted my entire ring), so I'd reccommend only trying this in a kiln unless you're feeling brave.
                    </p>
                    <p>
                        For casted silver, I set the kiln to 1580°F and let the piece sit in the kiln for 10-12 minutes with each coat of enamel.
                    </p>
                    <p>
                        For casted bronze (<a href="https://www.mcmaster.com/5389K12/" target="_blank" rel="noreferrer">this kind</a>), I set the kiln to 1680°F and let the piece sit in the kiln for 10-12 minutes.
                        Some people say you can't enamel on bronze, but I had great success with it.
                        I'd guess it's either because of the type of bronze I used, which is actually a bronze-silicon alloy, or because my enamel is formulated differently than Thompson's.
                    </p>
                </div>
                <br/>
                <p>That's all for now! You can e-mail any questions to me <a className="email" href="mailto: julia.hindle+ceramics@gmail.com">here</a>.</p>

                <h2>Gallery</h2>
                <div className="group">
                    <div className="image-container two">
                        <div><img src="images/resources/make-your-own-jewelry-enamel/gallery1.jpg"/></div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/gallery2.jpg"/></div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/gallery3.jpg"/></div>
                        <div><img src="images/resources/make-your-own-jewelry-enamel/ring2.JPG"/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeYourOwnJewelryEnamel