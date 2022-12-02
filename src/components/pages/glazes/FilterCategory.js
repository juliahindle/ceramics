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

    return (<>
        {/* Title */}
        <h3 
            className="filter-form" 
            onClick={() => {toggleCategory(id)}}
        >
            {(enabled ? "\u25BE " : "\u25B8 ") + name}
        </h3>
        
        <div
            ref={ref} 
            className={"category  " + (enabled ? "enabled" : "disabled")} 
            style={{maxHeight: enabled ? ref.current.scrollHeight : 0}}
        >
            {options.map(option => 
                <label className="filter-form">
                    <input 
                        className="filter-form" 
                        type="checkbox" 
                        checked={checkedOptions.find(checkedOption => checkedOption === option)} 
                        value={option}
                        tabIndex={tabbable ? undefined : -1}
                        onClick={(e) => {
                            e.currentTarget.checked ? addFilter(option, id) : removeFilter(option, id)
                        }}    
                    />
                    <span>{option}</span>
                </label>
            )}
        </div>
    </>)
}

export default FilterCategory