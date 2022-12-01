import 'styles/glazes.scss'
import React, { useState, useEffect } from 'react'
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

    const getFilterOption = (value, categoryName) => {
        return (
            <label className="filter-form">
                <input 
                    className="filter-form" 
                    type="checkbox" 
                    checked={filters[categoryName].find(filterName => filterName === value)} 
                    value={value}
                    tabIndex={showAddFilter ? undefined : -1}
                    onClick={(e) => {
                        e.currentTarget.checked ? addFilter(value, categoryName) : removeFilter(value, categoryName)
                    }}    
                />
                <span>{value}</span>
            </label>
        )
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
                    getFilterOption(color, "color")
                )}
                <h3>Include Ingredient</h3>
                {ingredients.map((ingredient) =>
                    getFilterOption(ingredient, "includedIngredient")
                )}
                <h3>Exclude Ingredient</h3>
                {ingredients.map((ingredient) =>
                    getFilterOption(ingredient, "excludedIngredient")
                )}
                <h3>Base Glaze</h3>
                {bases.sort((a, b) => a.name.localeCompare(b.name)).map((base) =>
                    getFilterOption(base.name, "base")
                )}
            </form>
        </button>
        {/* Applied filters */}
        <div className="filters">{getCurrentFilters()}</div>
    </>)
}

export default AddFilter
