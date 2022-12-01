import 'styles/glazes.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import bases from 'data/bases.json'
import ingredients from 'data/ingredients.json'
import colors from 'data/colors.json'

function AddFilter({searchParams, setSearchParams, showAddFilter, setShowAddFilter}) {

    const [filters, setFilters] = useState({
        color: [], 
        base: [], 
        includedIngredient: [],
        excludedIngredient: []
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

    const addFilter = async (filterName, category) => {
        await setFilters((prev) => {
            let newFilters = Object.assign({}, prev)
            newFilters[category].push(filterName)
            return newFilters
        })
        submitFilters()
    }

    const removeFilter = async (filterName, category) => {
        await setFilters((prev) => {
            let newFilters = Object.assign({}, prev)
            let indexToRemove = newFilters[category].findIndex((filt) => filt === filterName)
            newFilters[category].splice(indexToRemove, 1)
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
                <h3>Color</h3>
                {colors.map((color) =>
                    <label className="filter-form">
                        <input 
                            className="filter-form" 
                            type="checkbox" 
                            checked={filters.color.find(filterColor => filterColor === color)} 
                            value={color}
                            tabIndex={showAddFilter ? undefined : -1}
                            onClick={(e) => {
                                e.currentTarget.checked ? addFilter(color, "color") : removeFilter(color, "color")
                            }}
                        />
                        <span>{color}</span>
                    </label>
                )}
                <h3>Ingredient</h3>
                {ingredients.map((ingredient) =>
                    <label className="filter-form">
                        <input 
                            className="filter-form" 
                            type="checkbox" 
                            checked={filters.includedIngredient.find(filterIngredient => filterIngredient === ingredient)} 
                            value={ingredient}
                            tabIndex={showAddFilter ? undefined : -1}
                            onClick={(e) => {
                                e.currentTarget.checked ? addFilter(ingredient, "includedIngredient") : removeFilter(ingredient, "includedIngredient")
                            }}/>
                        <span>{ingredient}</span>
                    </label>
                )}
                <h3>Base Glaze</h3>
                {bases.sort((a, b) => a.name.localeCompare(b.name)).map((base) =>
                    <label className="filter-form">
                        <input 
                            className="filter-form" 
                            type="checkbox" 
                            checked={filters.base.find(filterBase => filterBase.name === base.name)} 
                            value={base.name}
                            tabIndex={showAddFilter ? undefined : -1}
                            onClick={(e) => {
                                e.currentTarget.checked ? addFilter(base.name, "base") : removeFilter(base.name, "base")
                            }}    
                        />
                        <span>{base.name}</span>
                    </label>
                )}
            </form>
        </button>
        {/* Applied filters */}
        <div className="filters">{getCurrentFilters()}</div>
    </>)
}

export default AddFilter
