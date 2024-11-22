import 'styles/resources_chemicalBreakdownsOfCommonMaterials.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useState, useEffect } from 'react'
import Plot from './plots/Plot'
import frits from 'data/chemicals/frits.json'
import feldspars from 'data/chemicals/feldspars.json'
import clays from 'data/chemicals/clays.json'
import others from 'data/chemicals/others.json'
import { Link } from 'react-router-dom'
//TODO: Bug - when you resize the screen on another tab and then go back to this one, the size of the charts are wrong
function ChemicalBreakdownsOfCommonMaterials() {
    const [scale, setScale] = useState(1)
    const [height, setHeight] = useState(400)

    const WIDTH = 1250

    useEffect(() => {
        updatePageTitle("Chemical Breakdowns of Common Materials")
        return resetScroll
    }, [])

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < WIDTH) {
                setScale(window.innerWidth/(WIDTH))
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        scale >= 0.75 ? setHeight(400) : setHeight(500)
    }, [scale])

    return (
        <section className="resource chemical-breakdowns-of-common-materials">
            <div className="description">
                <h1>Chemical Breakdowns of Common Materials</h1>
                <hr></hr>
                <p>
                    When you're choosing what ingredients to include in a glaze, it can be helpful to understand the chemistry of the ingredients. 
                    These interactive charts show the chemical percent breakdowns of common glaze ingredients organized by category.
                </p>
                <p>For any ingredients that don't add up to 100% on these charts, the remainder is material that burns out during the kiln firing, also known as LOI (loss on ignition).</p>
                <p>Check out <Link to={"/periodic-table-for-potters"}>Periodic Table for Potters</Link> as well for help understanding what each chemical does in a glaze.</p>
            </div>
            <div className="content" >
                <div className="scaler" style={{scale: scale.toString()}}>
                    <Plot 
                        width={800}
                        height={height}
                        title={"Clays"}
                        columnsData={clays}
                    />
                    <Plot 
                        width={800}
                        height={height}
                        title={"Frits"}
                        columnsData={frits}
                    />
                    <Plot 
                        width={800}
                        height={height}
                        title={"Feldspars"}
                        columnsData={feldspars}
                    />
                    <Plot 
                        width={800}
                        height={height}
                        title={"Other"}
                        columnsData={others}
                    />
                </div>
            </div>
        </section>
    )
}

export default ChemicalBreakdownsOfCommonMaterials