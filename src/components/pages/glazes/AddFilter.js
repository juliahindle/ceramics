import 'styles/glazes.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import bases from 'data/bases.json'

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
                <input className="filter-form" type="checkbox" id="red" name="red" value="Red"/>
                <label className="filter-form" for="red">Red</label>
            </form>
        </button>
        {/* Applied filters */}
        <div className="filters">{getCurrentFilters()}</div>
    </>)
}

export default AddFilter
