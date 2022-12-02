import 'styles/glazes.scss'
import React, { useRef, useContext } from 'react'
import { FilterCategoriesContext } from 'Constants'

function FilterCategory({
    name, 
    id, 
    options,
    checkedOptions,
    enabled, 
}){
    const ref = useRef(null)
    const {toggleCategory, addFilter, removeFilter, tabbable} = useContext(FilterCategoriesContext)

    const getFilterOption = (value, categoryName) => {
        return (
            <label className="filter-form">
                <input 
                    className="filter-form" 
                    type="checkbox" 
                    checked={checkedOptions.find(optionName => optionName === value)} 
                    value={value}
                    tabIndex={tabbable ? undefined : -1}
                    onClick={(e) => {
                        e.currentTarget.checked ? addFilter(value, categoryName) : removeFilter(value, categoryName)
                    }}    
                />
                <span>{value}</span>
            </label>
        )
    }

    return (<>
        <h3 className="filter-form" onClick={() => toggleCategory(id)}>{(enabled ? "\u25BE " : "\u25B8 ") + name}</h3>
        <div ref={ref} className={"category  " + (enabled ? "enabled" : "disabled")} style={{maxHeight: enabled ? ref.current.scrollHeight : 0}}>
            {options.map(option =>
                getFilterOption(option, id)
            )}
        </div>
    </>)
}

export default FilterCategory
