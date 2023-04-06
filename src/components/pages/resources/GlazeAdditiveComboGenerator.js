import "styles/resources_glazeAdditiveComboGenerator.scss"
import { updatePageTitle, resetScroll } from "Constants"
import { useState, useEffect } from "react"

function GlazeAdditiveComboGenerator() {
    const NUM_TO_GENERATE = 10;
    const MAX_NUM_MATERIALS = 5;
    const WEIGHTS = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5]
    
    const [materials, setMaterials] = useState([
        {name: "Cobalt Carbonate", max: "5"}, 
        {name: "Copper Carbonate", max: "8.5"}
    ])
    const [results, setResults] = useState([])

    useEffect(() => {
        updatePageTitle("Glaze Additive Combo Generator")
        return resetScroll
    }, [])

    const addMaterial = () => {
        setMaterials((old) => old.concat([{name: "", max: ""}]))
    }

    const removeMaterial = (index) => {
        setMaterials((prev) => {
            let newMaterials = Object.assign([], prev)
            newMaterials.splice(index, 1)
            return newMaterials
        })
    }

    const calculateCombos = () => {
        if (inputsAreInvalid()) { 
            alert("Please fix invalid input data. See the red input boxes.")
            return
        }

        let recipes = []
        let inputMaterials = getNonEmptyMaterials()

        for (let i = 0; i < NUM_TO_GENERATE; i++) {
            let numMaterials = MAX_NUM_MATERIALS <= inputMaterials.length ? 
                WEIGHTS[Math.floor(Math.random() * WEIGHTS.length)] :
                Math.ceil(Math.random()*inputMaterials.length)
            let recipe = []
            
            for (let j = 0; j < numMaterials; j++) {
                let material
                do {
                    material = inputMaterials[Math.floor(Math.random()*inputMaterials.length)]
                } while (materialIsUsed(recipe, material.name))

                let amount = +(Math.random()*(material.max)).toFixed(2)
                recipe.push({name: material.name, amount: amount})
            }
            recipes.push(recipe)
        }
        setResults(recipes)
    }

    const materialIsUsed = (recipe, name) => {
        return recipe.some(material => material.name === name)
    }

    const setMaterialName = (e, index) => {
        setMaterials((prev) => {
            let newMaterials = Object.assign([], prev)
            newMaterials[index].name = e.target.value
            return newMaterials
        })
    }

    const setMaterialMaximum = (e, index) => {
        setMaterials((prev) => {
            let newMaterials = Object.assign([], prev)
            newMaterials[index].max = e.target.value
            return newMaterials
        })
    }

    const inputsAreInvalid = () => {
        return materials.some(material => isNaN(material.max))
    }

    const getNonEmptyMaterials = () => {
        return materials.filter(material => material.name && material.max)
    }

    return (
        <section className="resource glaze-additive-combo-generator">
            <div className="description">
                <h1>Glaze Additive Combo Generator</h1>
                <hr></hr>
                <p>
                    Enter the names and maximum amount you’d want to add of each glaze additive. 
                    Then press calculate to have the generator come up with new and unique colorant/opacifier combos to try adding to a glaze base.
                </p>
            </div>
            <div className="content">
                <div className="column entry">
                    <h2>1. Enter your materials here:</h2>
                    <div className="container">
                        <table>
                            <thead>
                                <th className="minus"></th>
                                <th className="material">Material Name</th>
                                <th className="maximum">Maximum</th>
                            </thead>
                            <tbody>
                                {
                                    materials.map((material, index) => {
                                        return(
                                        <tr>
                                            <td>
                                                <button className="minus" onClick={() => removeMaterial(index)}>-</button>
                                            </td>
                                            <td className="material">
                                                <div className="input-container">
                                                    <input value={material.name} 
                                                        onChange={e => setMaterialName(e, index)}
                                                    />
                                                </div>
                                            </td>
                                            <td className={isNaN(material.max) ? "maximum invalid" : "maximum"}>
                                                <div className="input-container">
                                                    <input 
                                                        value={material.max} 
                                                        onChange={e => setMaterialMaximum(e, index)}
                                                    />
                                                </div>
                                                <p>* must be a number</p>
                                            </td>
                                        </tr>)
                                    })
                                }
                                <tr>
                                    <td>
                                        <button className="plus" onClick={addMaterial}>+</button>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="calculate button" onClick={calculateCombos}>
                            Calculate
                        </button>
                    </div>
                </div>
                <div className="column result">
                    <h2>2. See your results:</h2>
                    <div className="container">
                            {results.map((recipe, rIndex) => <>
                                <fieldset>
                                    <legend>Combo #{rIndex+1}</legend>
                                    <table>
                                        <thead>
                                            <th className="material">Material Name</th>
                                            <th className="maximum">Amount</th>
                                        </thead>
                                        <tbody>
                                            {
                                                recipe.map((material, mIndex) => {
                                                    return(
                                                    <tr key={mIndex+material}>
                                                        <td className="material"><span title={material.name}>{material.name}</span></td>
                                                        <td className="maximum">{material.amount}</td>
                                                    </tr>)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </fieldset>
                            </>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlazeAdditiveComboGenerator