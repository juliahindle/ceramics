import 'styles/glazes_filters.scss'
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
        excludedIngredient: [],
    })
    const [toggleStates, setToggleStates] = useState({
        color: false, 
        base: false, 
        includedIngredient: false,
        excludedIngredient: false
    })
    const [includeAll, setIncludeAll] = useState(false)
    const [caption, setCaption] = useState("None")
    const [sort, setSort] = useState("Default")

    useEffect(() => {
        setFilters({
            color: searchParams.getAll("color"),
            base: searchParams.getAll("base"),
            includedIngredient: searchParams.getAll("includedIngredient"),
            excludedIngredient: searchParams.getAll("excludedIngredient")
        })
        setIncludeAll(JSON.parse(searchParams.get("includeAll") || false))
        setSort(searchParams.get("sort"))
        setCaption(searchParams.get("caption"))
    }, [searchParams])

    useEffect(() => {
        refreshSearchQuery()
    }, [includeAll, sort, caption])

    const getCurrentFilters = () => {
        let filterMarkup = []

        Object.keys(filters).forEach((key) => { 
            if (["color", "base", "includedIngredient", "excludedIngredient"].includes(key)) {
                filters[key].forEach((filterName, i) => {
                    filterMarkup.push(
                        <button key={filterName+i} className={"filter-form " + filterName.toLowerCase().replaceAll("/", "").replaceAll(" ", "")} onClick={() => {
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
            }
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

        refreshSearchQuery()
    }

    const refreshSearchQuery = () => {
        var newSearchQuery = new URLSearchParams();
        Object.keys(filters).forEach((key) => {
            filters[key].forEach((value) => {
                newSearchQuery.append(key, value)
            })
        })
        if (includeAll) newSearchQuery.append("includeAll", true)
        if (sort && sort !== "Default") newSearchQuery.append("sort", sort)
        if (caption  && caption !== "None") newSearchQuery.append("caption", caption)
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
                <div className="filter-form selection-container">
                    <div className="filter-form selection">
                        <fieldset className="filter-form">
                            <legend className="filter-form">Caption</legend>
                            <select className="filter-form" onChange={ (e) => setCaption(e.currentTarget.selectedOptions[0].innerText)}>
                                <option className="filter-form" value={true}>None</option>
                                <option className="filter-form" value={false}>Name</option>
                                <option className="filter-form" value={false}>Date</option>
                                <option className="filter-form" value={false}>Cone</option>
                                <option className="filter-form" value={false}>Base Glaze</option>
                                <option className="filter-form" value={false}>Clay</option>
                            </select> 
                        </fieldset>
                    </div>
                    <div className="filter-form selection">
                        <fieldset className="filter-form">
                            <legend className="filter-form">Sort</legend>
                            <select className="filter-form" onChange={ (e) => setSort(e.currentTarget.selectedOptions[0].innerText)}>
                                <option className="filter-form" value={true}>Default</option>
                                <option className="filter-form" value={false}>Date (New to Old)</option>
                                <option className="filter-form" value={false}>Date (Old to New)</option>
                                <option className="filter-form" value={false}>Name (A to Z)</option>
                                <option className="filter-form" value={false}>Name (Z to A)</option>
                            </select> 
                        </fieldset>
                    </div>
                </div>
                <FilterCategoriesContext.Provider value={{
                    toggleCategory: toggleCategory,
                    addFilter: (filterName, category) => editFilter(filterName, category, "ADD"),
                    removeFilter: (filterName, category) => editFilter(filterName, category, "REMOVE"),
                    setIncludeAll: setIncludeAll,
                    includeAll: includeAll,
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
            <button className="done">Done</button>
        </button>
        {/* Applied filters */}
        <div className="filters">{getCurrentFilters()}</div>
    </>)
}

export default AddFilter