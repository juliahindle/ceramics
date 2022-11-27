import 'styles/glazes.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import glazes from 'data/glazes.json'
import bases from 'data/bases.json'
import { BLANK_GLAZE, GlazesContext, updatePageTitle, setScroll, resetScroll } from 'Constants'

function Glazes() {
    const {showSidebar, setShowSidebar, selectedGlaze, setSelectedGlaze} = useContext(GlazesContext)
    const [searchParams] = useSearchParams()
    const [filters, setFilters] = useState({colors: "all", bases: "all"})
    const [filteredGlazes, setFilteredGlazes] = useState(glazes)

    useEffect(() => {
        updatePageTitle("Glazes - Julia Hindle Ceramics")
        resetScroll()
        
        let queryColors = searchParams.getAll("color")
        let queryBases = searchParams.getAll("base")
        setFilters({
            colors: queryColors ? queryColors : "all",
            bases: queryBases ? queryBases : "all"
        })
        setFilteredGlazes(glazes.filter(glaze => 
            (queryBases.length == 0 || queryBases.includes(glaze.base))))
        
        console.log(queryColors)
        console.log(queryColors)
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

    const getCurrentFilters = () => {
        let filterMarkup = []
        let colors = filters.colors
        let bases = filters.bases
        
        colors !== "all" && colors.map((filter) => {
            filterMarkup.push(<div className={filter}><span>x</span> {filter}</div>)
        })

        bases !== "all" && bases.map((filter) => {
            filterMarkup.push(<div className={filter}><span>x</span> {filter}</div>)
        })

        return filterMarkup
    }

    return (<>
        {/* Glazes */}
        <section className="glazes" onClick={handleGlazeContainerClick}>
            <div className="text-container">
                <div className="filters">
                    <button className="filters"><span>+</span> Add filter</button>
                    {getCurrentFilters()}
                </div>

                {filteredGlazes.length == 1 ? 
                 <p>{filteredGlazes.length} glaze</p> :
                 <p>{filteredGlazes.length} glazes</p>}
            </div>
            <div className="glazes-container">
                {filteredGlazes.map(glaze => 
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
                <p>Cone 6</p>

                <h2>Base Glaze</h2>
                <p>{selectedGlaze.glaze.base}</p>

                <h2>Clay</h2>
                <p>{selectedGlaze.glaze.clay} Stoneware</p>
            </div>
        </aside>
    </>)
}

export default Glazes
