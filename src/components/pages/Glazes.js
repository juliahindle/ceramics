import 'styles/glazes.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import glazes from 'data/glazes.json'
import bases from 'data/bases.json'
import { BLANK_GLAZE, GlazesContext, updatePageTitle, setScroll, resetScroll } from 'Constants'
import AddFilter from 'components/pages/glazes/AddFilter'

function Glazes() {
    // Variables
    const {showSidebar, setShowSidebar, selectedGlaze, setSelectedGlaze} = useContext(GlazesContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filters, setFilters] = useState({
        color: [], 
        base: [], 
        includedIngredient: [],
        excludedIngredient: []
    })
    const [filteredGlazes, setFilteredGlazes] = useState(glazes)
    const [showAddFilter, setShowAddFilter] = useState(false)

    // Use Effects
    useEffect(() => {
        updatePageTitle("Glazes - Julia Hindle Ceramics")
        resetScroll()
        
        let queryColors = searchParams.getAll("color")
        let queryBases = searchParams.getAll("base")
        let queryIncludedIngredients= searchParams.getAll("includedIngredient")
        let queryExcludedIngredients = searchParams.getAll("excludedIngredient")

        setFilters({
            color: queryColors,
            base: queryBases,
            includedIngredient: queryIncludedIngredients,
            excludedIngredient: queryExcludedIngredients
        })

        setFilteredGlazes(glazes.filter(glaze => 
            (queryBases.length === 0 || queryBases.includes(glaze.base)) &&
            (queryColors.length === 0 || queryColors.includes(glaze.color)) &&
            (queryIncludedIngredients.length === 0 || glazeContainsIngredients(glaze, queryIncludedIngredients)) &&
            (queryExcludedIngredients.length === 0 || !glazeContainsIngredients(glaze, queryExcludedIngredients))))
    }, [searchParams])

    useEffect(() => {
        if (showSidebar) {
            setTimeout(() =>  setScroll(), 700)
        }
    }, [showSidebar])

    // Methods
    const glazeContainsIngredients = (glaze, ingredients) => {
        let currentBase = bases.find(base => (base.name === glaze.base))
        return ingredients.every((desiredIngredient) => glaze.additives.some((glazeIngredient) => glazeIngredient.ingredient === desiredIngredient) || 
                                                        currentBase.recipe.some((baseIngredient) => baseIngredient.ingredient === desiredIngredient))
    }

    const closeSidebar = () => {
        setShowSidebar(false)
        setTimeout(() => setSelectedGlaze(BLANK_GLAZE), 600)
    }

    const handleGlazeContainerClick = (e) => {
        if (showAddFilter && !e.target.className.startsWith("filter-form")) {
           setShowAddFilter(false)
        }
        if (e.currentTarget.className === "glazes" && !["BUTTON", "IMG"].includes(e.target.tagName)
            || e.target.className.startsWith("filters ")) {
            closeSidebar()
        }
    }

    const getCurrentFilters = () => {
        let filterMarkup = []

        Object.keys(filters).forEach((key) => { 
            filters[key].forEach((filterName) => {
                filterMarkup.push(
                    <button className={filterName.toLowerCase().replace("/", "")} onClick={() => {
                        var newSearchQuery = new URLSearchParams();
                        Object.keys(filters).forEach((key) => {
                            filters[key].forEach((value) => {
                               if (value !== filterName) newSearchQuery.append(key, value)
                            })
                        })
                        setSearchParams(newSearchQuery)
                    }}>
                    <span>x</span> {key === "excludedIngredient" ? <s>{filterName}</s> : filterName}
                </button>)
            })
        })

        return filterMarkup
    }

    return (<>
        {/* Glazes */}
        <section className="glazes" onClick={handleGlazeContainerClick}>
            <div className="text-container">
                <AddFilter
                    showAddFilter={showAddFilter}
                    setShowAddFilter={setShowAddFilter}
                />

                <div className="filters">{getCurrentFilters()}</div>

                {filteredGlazes.length === 1 ? 
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
