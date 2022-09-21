import 'styles/glazes.scss'
import React, { useState } from 'react'
import glazes from 'data/glazes.json'
import bases from 'data/bases.json'

function Glazes({setShowSidebar}) {
    const BLANK_GLAZE = {glaze: {id: "", base: "", additives : []}, base: {id: "", name: "", recipe : []}};
    const [selectedGlaze, setSelectedGlaze] = useState(BLANK_GLAZE)

    return (<>
        {/* Glazes */}
        <section className="glazes">
            <div className="container">
                {glazes.map(glaze => 
                    <img 
                        className={(selectedGlaze.glaze.id === glaze.id ? "selected" : undefined)}
                        src={`images/glazes/2x/${glaze.id}.png`} 
                        alt={`glaze with id: ${glaze.id}`}
                        onClick={() => {
                            setSelectedGlaze({glaze: glaze, base: bases.find(base => (base.name === glaze.base))})
                            setShowSidebar(true)
                        }}
                    />
                )}
            </div>
        </section>
        
        {/* Sidebar */}
        <aside className="sidebar">
            <div className="container">
                <button 
                    className="close-button" 
                    aria-label="Close alert" 
                    type="button" 
                    onClick={() => {
                        setShowSidebar(false)
                        setTimeout(() => setSelectedGlaze(BLANK_GLAZE), 600);
                    }}>
                    x
                </button>
                <img src={`images/glazes/2x/${selectedGlaze.glaze.id}.png`} alt={`glaze with id: ${selectedGlaze.glaze.id}`}/> 

                <h2>Cone</h2>
                <p>Cone 6</p>

                <h2>Base Glaze</h2>
                <p>{selectedGlaze.glaze.base}</p>

                <h2>Clay</h2>
                <p>181 Stoneware</p>

                <h2>Recipe</h2>
                <table className="recipe">
                    <tbody>
                        {selectedGlaze.base.recipe.map((part) =>
                            <tr>
                                <td>{part.ingredient}</td>
                                <td>{part.amount}</td>
                            </tr>
                        )}
                        <tr className="add">
                            <td>Add:</td>
                        </tr>
                        {selectedGlaze.glaze.additives.map((part) =>
                            <tr>
                                <td>{part.ingredient}</td>
                                <td>{part.amount}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </aside>
    </>)
}

export default Glazes
