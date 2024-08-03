import 'styles/resources_digitizingYourGlazeNotes.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useEffect } from 'react'
import Plot from './plots/Plot'

function ChemicalBreakdownsOfCommonMaterials() {
    useEffect(() => {
        updatePageTitle("Chemical Breakdowns of Common Materials")
        return resetScroll
    }, [])

    return (
        <section className="resource">
            <div className="description">
                <h1>Chemical Breakdowns of Common Materials</h1>
                <hr></hr>
                <p>
                    Description todo.
                </p>
            </div>
            <div className="content">
                <Plot 
                    width={420}
                    height={400}
                    columnsData={[
                        {
                            name: "Frit 3110",
                            data: [
                                {label: "SiO2 (Silicon)", value: "0.6977"},
                                {label: "Al2O3 (Aluminum)", value: "0.0337"},
                                {label: "CaO (Calcium)", value: "0.0629"},
                                {label: "K2O (Potassium)", value: "0.0236"},
                                {label: "Na2O (Sodium)", value: "0.1524"},
                                {label: "B2O3 (Boron)", value: "0.0264"}
                            ]
                        }, 
                        {
                            name: "Frit 3124", 
                            data: [
                                {label: "SiO2 (Silicon)", value: "0.5494"},
                                {label: "Al2O3 (Aluminum)", value: "0.1001"},
                                {label: "CaO (Calcium)", value: "0.1428"},
                                {label: "K2O (Potassium)", value: "0.0068"},
                                {label: "Na2O (Sodium)", value: "0.064"},
                                {label: "B2O3 (Boron)", value: "0.1374"}
                            ]
                        }, 
                        {
                            name: "Frit 3134", 
                            data: [
                                {label: "SiO2 (Silicon)", value: "0.4556"},
                                {label: "Al2O3 (Aluminum)", value: "0.02"},
                                {label: "CaO (Calcium)", value: "0.1951"},
                                {label: "Na2O (Sodium)", value: "0.1014"},
                                {label: "B2O3 (Boron)", value: "0.2279"}
                            ]
                        }, 
                        {
                            name: "Frit 3195", 
                            data: [
                                {label: "SiO2 (Silicon)", value: "0.4835"},
                                {label: "Al2O3 (Aluminum)", value: "0.1198"},
                                {label: "CaO (Calcium)", value: "0.1136"},
                                {label: "Na2O (Sodium)", value: "0.0569"},
                                {label: "B2O3 (Boron)", value: "0.2262"}
                            ]
                        }
                    ]}
                />
            </div>
        </section>
    )
}

export default ChemicalBreakdownsOfCommonMaterials