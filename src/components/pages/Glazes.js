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
        updatePageTitle("Glazes")
        resetScroll()
        
        // handle query filters
        let queryColors = searchParams.getAll("color")
        let queryBases = searchParams.getAll("base")
        let queryIncludedIngredients= searchParams.getAll("includedIngredient")
        let queryExcludedIngredients = searchParams.getAll("excludedIngredient")

        setFilteredGlazes(glazes.filter(glaze => 
            (queryBases.length === 0 || queryBases.includes(glaze.base)) &&
            (queryColors.length === 0 || queryColors.includes(glaze.color)) &&
            (queryIncludedIngredients.length === 0 || glazeContainsIngredients(glaze, queryIncludedIngredients, (list, method) => searchParams.get("includeAll") ? list.every(method) : list.some(method))) &&
            (queryExcludedIngredients.length === 0 || !glazeContainsIngredients(glaze, queryExcludedIngredients, (list, method) => list.every(method)))))
    
        // handle query sidebar
        let querySidebar = searchParams.get("sidebar")
        if (querySidebar) {
            let sidebarGlaze = glazes.find(glaze => glaze.id === querySidebar)
            if (sidebarGlaze) {
                setSelectedGlaze({glaze: sidebarGlaze, base: bases.find(base => base.name === sidebarGlaze.base)})
                setShowSidebar(true)
            }
        }
        else if (showSidebar) {
            setShowSidebar(false)
        }
    }, [searchParams])

    useEffect(() => {
        return (() => setShowSidebar(false))
    }, [])

    // Methods
    const glazeContainsIngredients = (glaze, ingredients, qualifier) => {
        let currentBase = bases.find(base => (base.name === glaze.base))
        
        return qualifier(ingredients, (desiredIngredient) => 
            glaze.additives.some((glazeIngredient) => glazeIngredient.ingredient === desiredIngredient) || 
            currentBase.recipe.some((baseIngredient) => baseIngredient.ingredient === desiredIngredient))
    }

    const openSidebar = (glaze) => {
        setSelectedGlaze({glaze: glaze, base: bases.find(base => base.name === glaze.base)})
        searchParams.set("sidebar", glaze.id)
        setSearchParams(searchParams)
        if (!showSidebar) {
            setShowSidebar(true)
        }
    }

    const closeSidebar = () => {
        setShowSidebar(false)
        setTimeout(() => setSelectedGlaze(BLANK_GLAZE), 600)
        searchParams.delete("sidebar")
        setSearchParams(searchParams)
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
                {filteredGlazes.map((glaze, i) => 
                    glaze.status !== 'inactive' && glaze.id && 
                    <button key={glaze+i} onClick={() => openSidebar(glaze)}>
                        <img
                            id={(selectedGlaze.glaze.id === glaze.id ? "selected-glaze" : undefined)}
                            className={(selectedGlaze.glaze.id === glaze.id ? "selected" : undefined)}
                            src={`images/glazes/2x/${glaze.id}.png`} 
                            alt={`glaze with id: ${glaze.id}`}
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