import 'styles/glazes.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import glazes from 'data/glazes.json'
import bases from 'data/bases.json'
import { BLANK_GLAZE, GlazesContext, updatePageTitle, resetScroll, setScroll, getGlazePhotoPath } from 'Constants'
import AddFilter from 'components/pages/glazes/AddFilter'
import Sidebar from 'components/pages/glazes/Sidebar'

function Glazes() {
    // Variables
    const {showSidebar, setShowSidebar, selectedGlaze, setSelectedGlaze} = useContext(GlazesContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filteredGlazes, setFilteredGlazes] = useState(glazes)
    const [showAddFilter, setShowAddFilter] = useState(false)
    const [caption, setCaption] = useState("None")

    // Use Effects
    useEffect(() => {
        console.log("Refreshing")
        updatePageTitle("Glazes")
        
        // handle query filters
        let queryColors = searchParams.getAll("color")
        let queryBases = searchParams.getAll("base")
        let queryIncludedIngredients= searchParams.getAll("includedIngredient")
        let queryExcludedIngredients = searchParams.getAll("excludedIngredient")

        let tempGlazes = glazes.filter(glaze => 
            (queryBases.length === 0 || queryBases.includes(glaze.base)) &&
            (queryColors.length === 0 || queryColors.includes(glaze.color)) &&
            (queryIncludedIngredients.length === 0 || glazeContainsIngredients(glaze, queryIncludedIngredients, (list, method) => searchParams.get("includeAll") ? list.every(method) : list.some(method))) &&
            (queryExcludedIngredients.length === 0 || !glazeContainsIngredients(glaze, queryExcludedIngredients, (list, method) => list.every(method))))


        let sort = searchParams.get("sort")
        const sorting = (a, b) => {
            if (sort === "Date (New to Old)") return b.date.localeCompare(a.date)
            else if (sort === "Date (Old to New)") return a.date.localeCompare(b.date)
            else if (sort === "Name (A to Z)") return a.name.localeCompare(b.name)
            else if (sort === "Name (Z to A)") return b.name.localeCompare(a.name)
            else {
                let nums =  a.id.split("-")
                let nums2 = b.id.split("-")
                if (nums[0] === nums2[0]) return nums[0] > nums2[0]
                else return nums[1] > nums2[1]
            }
        }
        setFilteredGlazes(tempGlazes.sort(sorting))

        setCaption(searchParams.get("caption"))
    
        // handle query sidebar
        let querySidebar = searchParams.get("sidebar")
        if (querySidebar) {
            let sidebarGlaze = glazes.find(glaze => glaze.id === querySidebar)
            if (sidebarGlaze) {
                setSelectedGlaze({glaze: sidebarGlaze, base: bases.find(base => base.name === sidebarGlaze.base)})
                setShowSidebar(true)
            }
        }
        else {
            setShowSidebar(false)
        }
    }, [searchParams])

    useEffect(() => {
        return (() => {
            setShowSidebar(false)
            setSelectedGlaze(BLANK_GLAZE)
            resetScroll()
        })
    }, [])

    useEffect(() => {
        setScroll()
    }, [selectedGlaze])

    // Methods
    const glazeContainsIngredients = (glaze, ingredients, qualifier) => {
        let currentBase = bases.find(base => base.id === glaze.id.split("-")[0])
        
        return qualifier(ingredients, (desiredIngredient) => 
            glaze.additives.some((glazeIngredient) => glazeIngredient.ingredient === desiredIngredient) || 
            currentBase.recipe.some((baseIngredient) => baseIngredient.ingredient === desiredIngredient))
    }

    const openSidebar = (glaze) => {
        setSelectedGlaze({glaze: glaze, base: bases.find(base => base.id === glaze.id.split("-")[0])})
        searchParams.set("sidebar", glaze.id)
        setSearchParams(searchParams)
        if (!showSidebar) {
            setShowSidebar(true)
        }
    }

    const closeSidebar = () => {
        setShowSidebar(false)
        searchParams.delete("sidebar")
        setSearchParams(searchParams)
    }

    const handleGlazeContainerClick = (e) => {
        if (showAddFilter && !e.target.className.startsWith("filter-form")) {
           setShowAddFilter(false)
        }
        if (showSidebar && 
                ((e.currentTarget.className === "glazes" && !["BUTTON", "IMG"].includes(e.target.tagName))
                  || e.target.className.startsWith("filters "))) {
            closeSidebar()
        }
    }

    const getCaption = (glaze) => {
        if (caption === "None") return
        
        let cap = ""
        if (caption === "Name") cap = glaze.name
        else if (caption === "Date") cap = glaze.date

        return <p style={{"margin-top": 0}}>{cap}</p>
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
                <p>{filteredGlazes.filter(glaze => glaze.status !== "inactive").length}{filteredGlazes.length === 1 ? " glaze" : " glazes"}</p>
            </div>
            <div className="glazes-container">
                {filteredGlazes
                    .map((glaze, i) => 
                        glaze.status !== "inactive" && glaze.id &&
                        <button key={glaze+i} onClick={() => openSidebar(glaze)} className={(selectedGlaze.glaze.id === glaze.id ? "selected" : undefined)}>
                            <img
                                id={(selectedGlaze.glaze.id === glaze.id ? "selected-glaze" : undefined)}
                                className={(selectedGlaze.glaze.id === glaze.id ? "selected" : undefined)}
                                src={getGlazePhotoPath(glaze.id, "4x")}
                                srcSet={
                                    `${getGlazePhotoPath(glaze.id, "4x")} 3x,` + 
                                    `${getGlazePhotoPath(glaze.id, "3x")} 2x,` + 
                                    `${getGlazePhotoPath(glaze.id, "2x")} 1x`
                                }
                                alt={`glaze with id: ${glaze.id}`}
                            />
                            {getCaption(glaze)}
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