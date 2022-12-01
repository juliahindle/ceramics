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
                        <input className="filter-form" type="checkbox" value={color}/>
                        <span>{color}</span>
                    </label>
                )}
                <h3>Ingredient</h3>
                {ingredients.map((ingredient) =>
                    <label className="filter-form">
                        <input className="filter-form" type="checkbox" value={ingredient}/>
                        <span>{ingredient}</span>
                    </label>
                )}
                <h3>Base Glaze</h3>
                {bases.sort((a, b) => a.name.localeCompare(b.name)).map((base) =>
                    <label className="filter-form">
                        <input className="filter-form" type="checkbox" value={base.name}/>
                        <span>{base.name}</span>
                    </label>
                )}
            </form>
            <button className="submit">Apply Changes</button>
        </button>
        {/* Applied filters */}
        <div className="filters">{getCurrentFilters()}</div>
    </>)
}

export default AddFilter
