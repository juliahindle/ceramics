import 'styles/resources_chemicalBreakdownsOfCommonMaterials.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useState, useEffect } from 'react'
import Plot from './plots/Plot'

function ChemicalBreakdownsOfCommonMaterials() {
    const [scale, setScale] = useState(1)
    
    const WIDTH = 1100

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
                    These interactive charts show the chemical breakdowns of common glaze ingredients organized by category.
                </p>
            </div>
            <div className="content" >
                <div className="scaler" style={{scale: scale.toString()}}>
                    <Plot 
                        width={470}
                        height={400}
                        title={"Frits"}
                        useTicks={true}
                        useLabels={true}
                        columnsData={[
                            {
                                name: "Ferro 3110",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "69.77"},
                                    {label: "Al2O3 (Aluminum)", value: "3.37"},
                                    {label: "CaO (Calcium)", value: "0.29"},
                                    {label: "K2O (Potassium)", value: "2.36"},
                                    {label: "Na2O (Sodium)", value: "15.24"},
                                    {label: "B2O3 (Boron)", value: "2.64"},
                                    {label: "ZnO (Zinc)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "SrO (Strontium)", value: ""}
                                ]
                            }, 
                            {
                                name: "Ferro 3124", 
                                data: [
                                    {label: "SiO2 (Silicon)", value: "54.94"},
                                    {label: "Al2O3 (Aluminum)", value: "10.01"},
                                    {label: "CaO (Calcium)", value: "14.28"},
                                    {label: "K2O (Potassium)", value: "0.68"},
                                    {label: "Na2O (Sodium)", value: "6.4"},
                                    {label: "B2O3 (Boron)", value: "13.74"},
                                    {label: "ZnO (Zinc)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "SrO (Strontium)", value: ""}
                                ]
                            }, 
                            {
                                name: "Ferro 3134", 
                                data: [
                                    {label: "SiO2 (Silicon)", value: "45.56"},
                                    {label: "Al2O3 (Aluminum)", value: "2"},
                                    {label: "CaO (Calcium)", value: "19.51"},
                                    {label: "Na2O (Sodium)", value: "10.14"},
                                    {label: "B2O3 (Boron)", value: "22.79"},
                                    {label: "ZnO (Zinc)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "SrO (Strontium)", value: ""}
                                ]
                            },
                            {
                                name: "Ferro 3195", 
                                data: [
                                    {label: "SiO2 (Silicon)", value: "48.35"},
                                    {label: "Al2O3 (Aluminum)", value: "11.98"},
                                    {label: "CaO (Calcium)", value: "11.36"},
                                    {label: "K2O (Potassium)", value: ""},
                                    {label: "Na2O (Sodium)", value: "5.69"},
                                    {label: "B2O3 (Boron)", value: "22.62"},
                                    {label: "ZnO (Zinc)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "SrO (Strontium)", value: ""}

                                ]
                            },
                            {
                                name: "Ferro 3269", 
                                data: [
                                    {label: "SiO2 (Silicon)", value: "51.23"},
                                    {label: "Al2O3 (Aluminum)", value: "12.4"},
                                    {label: "CaO (Calcium)", value: "0.41"},
                                    {label: "K2O (Potassium)", value: "7.42"},
                                    {label: "Na2O (Sodium)", value: "10.97"},
                                    {label: "B2O3 (Boron)", value: "15.06"},
                                    {label: "ZnO (Zinc)", value: "0.97"},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "SrO (Strontium)", value: ""}

                                ]
                            }, 
                            {
                                name: "Fusion 79", 
                                data: [
                                    {label: "SiO2 (Silicon)", value: "53"},
                                    {label: "Al2O3 (Aluminum)", value: "9"},
                                    {label: "CaO (Calcium)", value: "4.8"},
                                    {label: "K2O (Potassium)", value: "1.2"},
                                    {label: "Na2O (Sodium)", value: "4"},
                                    {label: "B2O3 (Boron)", value: "26.5"},
                                    {label: "ZnO (Zinc)", value: ""},
                                    {label: "Li2O (Lithium)", value: "0.5"},
                                    {label: "SrO (Strontium)", value: "1"}

                                ]
                            }, 
                        ]}
                    />
                    <Plot 
                        width={720}
                        height={400}
                        title={"Feldspars"}
                        useTicks={true}
                        useLabels={false}
                        columnsData={[
                            {
                                name: "Nepheline Syenite",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "60.7"},
                                    {label: "Al2O3 (Aluminum)", value: "23.3"},
                                    {label: "CaO (Calcium)", value: "0.7"},
                                    {label: "K2O (Potassium)", value: "4.6"},
                                    {label: "Na2O (Sodium)", value: "9.8"},
                                    {label: "Fe2O3 (Iron)", value: "0.1"},
                                    {label: "MgO (Magnesium)", value: "0.1"},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "TiO2 (Titanium)", value: ""}
                                ]
                            }, 
                            {
                                name: "F4",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "66.7"},
                                    {label: "Al2O3 (Aluminum)", value: "19.6"},
                                    {label: "CaO (Calcium)", value: "1.7"},
                                    {label: "K2O (Potassium)", value: "4.8"},
                                    {label: "Na2O (Sodium)", value: "6.9"},
                                    {label: "Fe2O3 (Iron)", value: ""},
                                    {label: "MgO (Magnesium)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "TiO2 (Titanium)", value: ""}
                                ]
                            }, 
                            {
                                name: "Minspar 200",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "68.8"},
                                    {label: "Al2O3 (Aluminum)", value: "18.2"},
                                    {label: "CaO (Calcium)", value: "1.5"},
                                    {label: "K2O (Potassium)", value: "4.1"},
                                    {label: "Na2O (Sodium)", value: "6.5"},
                                    {label: "Fe2O3 (Iron)", value: "0.07"},
                                    {label: "MgO (Magnesium)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "TiO2 (Titanium)", value: ""}
                                ]
                            }, 
                            {
                                name: "G-200",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "66.3"},
                                    {label: "Al2O3 (Aluminum)", value: "18.5"},
                                    {label: "CaO (Calcium)", value: "0.8"},
                                    {label: "K2O (Potassium)", value: "10.8"},
                                    {label: "Na2O (Sodium)", value: "3.1"},
                                    {label: "Fe2O3 (Iron)", value: "0.08"},
                                    {label: "MgO (Magnesium)", value: "0.05"},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "TiO2 (Titanium)", value: ""}
                                ]
                            }, 
                            {
                                name: "FFF",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "66.3"},
                                    {label: "Al2O3 (Aluminum)", value: "18.6"},
                                    {label: "CaO (Calcium)", value: ""},
                                    {label: "K2O (Potassium)", value: "6.2"},
                                    {label: "Na2O (Sodium)", value: "5.5"},
                                    {label: "Fe2O3 (Iron)", value: "0.1"},
                                    {label: "MgO (Magnesium)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "TiO2 (Titanium)", value: ""}
                                ]
                            }, 
                            {
                                name: "Custer",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "68.5"},
                                    {label: "Al2O3 (Aluminum)", value: "17"},
                                    {label: "CaO (Calcium)", value: "0.3"},
                                    {label: "K2O (Potassium)", value: "10"},
                                    {label: "Na2O (Sodium)", value: "3"},
                                    {label: "Fe2O3 (Iron)", value: "0.1"},
                                    {label: "MgO (Magnesium)", value: ""},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "TiO2 (Titanium)", value: ""}
                                ]
                            }, 
                            {
                                name: "Spodumene",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "64.59"},
                                    {label: "Al2O3 (Aluminum)", value: "27.41"},
                                    {label: "CaO (Calcium)", value: ""},
                                    {label: "K2O (Potassium)", value: ""},
                                    {label: "Na2O (Sodium)", value: ""},
                                    {label: "Fe2O3 (Iron)", value: ""},
                                    {label: "MgO (Magnesium)", value: ""},
                                    {label: "Li2O (Lithium)", value: "8.01"},
                                    {label: "TiO2 (Titanium)", value: ""}
                                ]
                            }, 
                            {
                                name: "Cornwall Stone",
                                data: [
                                    {label: "SiO2 (Silicon)", value: "72.76"},
                                    {label: "Al2O3 (Aluminum)", value: "16.33"},
                                    {label: "CaO (Calcium)", value: "1.81"},
                                    {label: "K2O (Potassium)", value: "4.3"},
                                    {label: "Na2O (Sodium)", value: "3.3"},
                                    {label: "Fe2O3 (Iron)", value: "0.2"},
                                    {label: "MgO (Magnesium)", value: "1.4"},
                                    {label: "Li2O (Lithium)", value: ""},
                                    {label: "TiO2 (Titanium)", value: "0.15"}
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

export default ChemicalBreakdownsOfCommonMaterials