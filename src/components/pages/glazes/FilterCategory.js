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
    const {toggleCategory, addFilter, removeFilter, includeAll, setIncludeAll, tabbable} = useContext(FilterCategoriesContext)

    return (<>
        {/* Title */}
        <div className="filter-form title" onClick={() => {toggleCategory(id)}}>
            <h3 
                className="filter-form" 
            >
                {(enabled ? "\u25BE " : "\u25B8 ") + name}
            </h3>
            <div className={"filter-form count " + (checkedOptions.length ? "enabled" : "disabled")}>{checkedOptions.length}</div>
        </div>
        
        <div
            ref={ref} 
            className={"category  " + (enabled ? "enabled" : "disabled")} 
            style={{maxHeight: enabled ? ref.current.scrollHeight : 0}}
        >
            {id === "includedIngredient" &&
                // <label><input type="checkbox" checked={includeAll} onChange={toggleIncludeAll}></input>test</label>
                <div className="filter-form match-scheme">
                    Each glaze should have 
                    <select className="filter-form" value={includeAll} onChange={(e) => {
                        setIncludeAll(JSON.parse(e.target.value))
                    }}>
                        <option className="filter-form"value={false}>some</option>
                        <option className="filter-form"value={true}>all</option>
                    </select> 
                    checked ingredients
                </div>
            }
            {options.map((option, i) => {
                let checkedIndex = checkedOptions.findIndex(checkedOption => checkedOption === option)
                return (
                    <label key={option+i} className="filter-form">
                        <input 
                            className="filter-form" 
                            type="checkbox" 
                            checked={checkedIndex !== -1 && checkedOptions[checkedIndex]} // this fixed console warning: A component is changing a controlled input to be uncontrolled
                            tabIndex={tabbable ? undefined : -1}
                            onChange={(e) => {
                                e.currentTarget.checked ? addFilter(option, id) : removeFilter(option, id)
                            }}    
                        />
                        <span>{option}</span>
                    </label>
                )
            })}
        </div>
    </>)
}

export default FilterCategory