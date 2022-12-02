import 'styles/glazes.scss'
import React, { useState, useEffect } from 'react'
import bases from 'data/bases.json'
import ingredients from 'data/ingredients.json'
import colors from 'data/colors.json'
import FilterCategory from 'components/pages/glazes/FilterCategory'
import {FilterCategoriesContext} from "Constants"

function AddFilter({searchParams, setSearchParams, showAddFilter, setShowAddFilter}) {
    const [filters, setFilters] = useState({
        color: [], 
        base: [], 
        includedIngredient: [],
        excludedIngredient: []
    })
    const [toggleStates, setToggleStates] = useState({
        color: false, 
        base: false, 
        includedIngredient: false,
        excludedIngredient: false
    })

    useEffect(() => {
        setFilters({
            color: searchParams.getAll("color"),
            base: searchParams.getAll("base"),
            includedIngredient: searchParams.getAll("includedIngredient"),
            excludedIngredient: searchParams.getAll("excludedIngredient")
        })
    }, [searchParams])

    const getCurrentFilters = () => {
        let filterMarkup = []

        Object.keys(filters).forEach((key) => { 
            filters[key].forEach((filterName) => {
                filterMarkup.push(
                    <button className={"filter-form " + filterName.toLowerCase().replaceAll("/", "").replaceAll(" ", "")} onClick={() => {
                        var newSearchQuery = new URLSearchParams();
                        Object.keys(filters).forEach((key) => {
                            filters[key].forEach((value) => {
                                if (value !== filterName) newSearchQuery.append(key, value)
                            })
                        })
                        setSearchParams(newSearchQuery)
                    }}>
                        <span className="filter-form">x</span> {key === "excludedIngredient" ? <s className="filter-form">{filterName}</s> : filterName}
                    </button>)
            })
        })

        return filterMarkup
    }

    const editFilter = async (filterName, category, action) => {
        await setFilters((prev) => {
            let newFilters = Object.assign({}, prev)
            if (action === "ADD") {
                newFilters[category].push(filterName)
            } else {
                let indexToRemove = newFilters[category].findIndex((filt) => filt === filterName)
                newFilters[category].splice(indexToRemove, 1)
            }
            return newFilters
        })
        submitFilters()
    }

    const submitFilters = () => {
        var newSearchQuery = new URLSearchParams();
        Object.keys(filters).forEach((key) => {
            filters[key].forEach((value) => {
                newSearchQuery.append(key, value)
            })
        })
        setSearchParams(newSearchQuery)
    }

    const toggleCategory = (category) => {
        setToggleStates((prev) => {
            let newToggleStates = Object.assign({}, prev)
            newToggleStates[category] = !newToggleStates[category]
            return newToggleStates
        })
    }

    return (<>
        {/* Add Filter button */}
        <button 
            className={showAddFilter ? "filters enabled" : "filters disabled"} 
            onClick={() => {
                if (!showAddFilter) {
                    setShowAddFilter(true)
                }
            }}
        >
            <span className="open-close">+</span>
            <span className="title">Add filter</span>
            <form className="filter-form">
                <FilterCategoriesContext.Provider value={{
                    toggleCategory: toggleCategory,
                    addFilter: (filterName, category) => editFilter(filterName, category, "ADD"),
                    removeFilter: (filterName, category) => editFilter(filterName, category, "REMOVE"),
                    tabbable: showAddFilter
                }}>
                    <FilterCategory
                        name="Color"
                        id="color"
                        options={colors}
                        checkedOptions={filters.color}
                        enabled={toggleStates.color}
                    />
                    <FilterCategory
                        name="Include Ingredient"
                        id="includedIngredient"
                        options={ingredients}
                        checkedOptions={filters.includedIngredient}
                        enabled={toggleStates.includedIngredient}
                    />
                    <FilterCategory
                        name="Exclude Ingredient"
                        id="excludedIngredient"
                        options={ingredients}
                        checkedOptions={filters.excludedIngredient}
                        enabled={toggleStates.excludedIngredient}
                    />
                    <FilterCategory
                        name="Base Glaze"
                        id="base"
                        options={bases.sort((a, b) => a.name.localeCompare(b.name)).map(base => base.name)}
                        checkedOptions={filters.base}
                        enabled={toggleStates.base}
                    />
                </FilterCategoriesContext.Provider>
            </form>
        </button>
        {/* Applied filters */}
        <div className="filters">{getCurrentFilters()}</div>
    </>)
}

export default AddFilter