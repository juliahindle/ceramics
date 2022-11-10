import 'styles/glazes.scss'
import { updatePageTitle } from 'Constants'
import React, { useContext, useEffect } from 'react'
import glazes from 'data/glazes.json'
import bases from 'data/bases.json'
import { BLANK_GLAZE, GlazesContext, setScroll } from 'Constants'
import { wait } from '@testing-library/user-event/dist/utils'

function Glazes() {
    const {showSidebar, setShowSidebar, selectedGlaze, setSelectedGlaze} = useContext(GlazesContext)

    useEffect(() => {
        updatePageTitle("Glazes - Julia Hindle Ceramics")
    }, [])

    useEffect(() => {
        if (showSidebar) {
            setTimeout(() =>  setScroll(), 700)
        }
    }, [showSidebar])

    const closeSidebar = () => {
        setShowSidebar(false)
        setTimeout(() => setSelectedGlaze(BLANK_GLAZE), 600)
    }

    const handleGlazeContainerClick = (e) => {
        if (e.target.className === "glazes") {
            closeSidebar()
        }
    }

    return (<>
        {/* Glazes */}
        <section className="glazes" onClick={handleGlazeContainerClick}>
            <div className="container">
                {glazes.map(glaze => 
                    glaze.status !== 'inactive' && 
                    <button>
                        <img
                            id={(selectedGlaze.glaze.id === glaze.id ? "selected-glaze" : undefined)}
                            className={(selectedGlaze.glaze.id === glaze.id ? "selected" : undefined)}
                            src={`images/glazes/2x/${glaze.id}.png`} 
                            alt={`glaze with id: ${glaze.id}`}
                            onClick={() => {
                                setSelectedGlaze({glaze: glaze, base: bases.find(base => (base.name === glaze.base))})
                                if (!showSidebar) {
                                    setShowSidebar(true)
                                }
                            }}
                        />
                    </button>
                )}
            </div>
        </section>
        
        {/* Sidebar */}
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

                <h2>Cone</h2>
                <p>Cone 6</p>

                <h2>Base Glaze</h2>
                <p>{selectedGlaze.glaze.base}</p>

                <h2>Clay</h2>
                <p>{selectedGlaze.glaze.clay} Stoneware</p>

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
            </div>
        </aside>
    </>)
}

export default Glazes
