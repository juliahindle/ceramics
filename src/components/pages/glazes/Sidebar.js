import 'styles/glazes_sidebar.scss'
import React, { useContext, useEffect } from 'react'
import { GlazesContext, setScroll } from 'Constants'

function Sidebar({closeSidebar}) {
    // Variables
    const {showSidebar, selectedGlaze} = useContext(GlazesContext)

    // Use Effects
    useEffect(() => {
        setTimeout(() =>  setScroll(), 700)
    }, [showSidebar])

    return (
        <aside className="sidebar">
            <div className="container">
                <button
                    className="close-button" 
                    aria-label="Close sidebar" 
                    type="button" 
                    onClick={closeSidebar}>
                    x
                </button>
                <img src={`images/glazes/2x/${selectedGlaze.glaze.id}.png`} alt={`glaze with id: ${selectedGlaze.glaze.id}`}/> 
                {selectedGlaze.glaze.name && <p className="name">{selectedGlaze.glaze.name}</p>}

                <h2>Recipe</h2>
                <table className="recipe">
                    <tbody>
                        {selectedGlaze.base.recipe.map((part) =>
                            <tr>
                                <td>{part.ingredient}</td>
                                <td>{part.amount}</td>
                            </tr>
                        )}
                        {selectedGlaze.glaze.additives.length > 0 && 
                            <tr className="add">
                                <td>Add:</td>
                            </tr>
                        }
                        {selectedGlaze.glaze.additives.map((part) =>
                            <tr>
                                <td>{part.ingredient}</td>
                                <td>{part.amount}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                <h2>Cone</h2>
                <p className="info">Cone 6</p>

                <h2>Base Glaze</h2>
                <p className="info">{selectedGlaze.glaze.base}</p>

                <h2>Clay</h2>
                <p className="info">{selectedGlaze.glaze.clay} Stoneware</p>
            </div>
        </aside>
    )
}

export default Sidebar
