import 'styles/resources_chemicalBreakdownsOfCommonMaterials.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useState, useEffect } from 'react'
import Plot from './plots/Plot'
import frits from 'data/chemicals/frits.json'
import feldspars from 'data/chemicals/feldspars.json'
import clays from 'data/chemicals/clays.json'
import others from 'data/chemicals/others.json'

function ChemicalBreakdownsOfCommonMaterials() {
    const [scale, setScale] = useState(1)

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

    return (
        <section className="resource chemical-breakdowns-of-common-materials">
            <div className="description">
                <h1>Chemical Breakdowns of Common Materials</h1>
                <hr></hr>
                <p>
                    When you're choosing what ingredients to include in a glaze, it can be helpful to understand the chemistry of the ingredients. 
                    These interactive charts show the chemical percent breakdowns of common glaze ingredients organized by category.
                    <br/><br/>
                    For any ingredients that don't add up to 100% on these charts, the remainder is material that burns out during the kiln firing, also known as LOI (loss on ignition).
                </p>
            </div>
            <div className="content" >
                <div className="scaler" style={{scale: scale.toString()}}>
                    <Plot 
                        width={600}
                        height={400}
                        title={"Clays"}
                        useTicks={true}
                        useLabels={false}
                        columnsData={clays}
                    />
                    <Plot 
                        width={500}
                        height={400}
                        title={"Frits"}
                        useTicks={true}
                        useLabels={true}
                        columnsData={frits}
                    />
                    <Plot 
                        width={720}
                        height={400}
                        title={"Feldspars"}
                        useTicks={true}
                        useLabels={false}
                        columnsData={feldspars}
                    />
                    <Plot 
                        width={800}
                        height={400}
                        title={"Other"}
                        useTicks={true}
                        useLabels={false}
                        columnsData={others}
                    />
                </div>
            </div>
        </section>
    )
}

export default ChemicalBreakdownsOfCommonMaterials