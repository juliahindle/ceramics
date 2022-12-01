import 'styles/glazes.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import glazes from 'data/glazes.json'
import bases from 'data/bases.json'
import { BLANK_GLAZE, GlazesContext, updatePageTitle, resetScroll } from 'Constants'
import AddFilter from 'components/pages/glazes/AddFilter'
import Sidebar from 'components/pages/glazes/Sidebar'

function Glazes() {
    // Variables
    const {showSidebar, setShowSidebar, selectedGlaze, setSelectedGlaze} = useContext(GlazesContext)
    const [searchParams, setSearchParams] = useSearchParams()
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

        setFilteredGlazes(glazes.filter(glaze => 
            (queryBases.length === 0 || queryBases.includes(glaze.base)) &&
            (queryColors.length === 0 || queryColors.includes(glaze.color)) &&
            (queryIncludedIngredients.length === 0 || glazeContainsIngredients(glaze, queryIncludedIngredients)) &&
            (queryExcludedIngredients.length === 0 || !glazeContainsIngredients(glaze, queryExcludedIngredients))))
    }, [searchParams])

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
        if ((e.currentTarget.className === "glazes" && !["BUTTON", "IMG"].includes(e.target.tagName))
            || e.target.className.startsWith("filters ")) {
            closeSidebar()
        }
    }

    return (<>
        {/* Glazes */}
        <section className="glazes" onClick={handleGlazeContainerClick}>
            <div className="text-container">
                <AddFilter
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    showAddFilter={showAddFilter}
                    setShowAddFilter={setShowAddFilter}
                />

                {filteredGlazes.length === 1 ? 
                 <p>{filteredGlazes.length} glaze</p> :
                 <p>{filteredGlazes.length} glazes</p>}
            </div>
            <div className="glazes-container">
                {filteredGlazes.map(glaze => 
                    glaze.status !== 'inactive' && 
                    <button onClick={() => {
                        setSelectedGlaze({glaze: glaze, base: bases.find(base => (base.name === glaze.base))})
                        if (!showSidebar) {
                            setShowSidebar(true)
                        }
                    }}>
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
        
        <Sidebar
            closeSidebar={closeSidebar}
        />
    </>)
}

export default Glazes