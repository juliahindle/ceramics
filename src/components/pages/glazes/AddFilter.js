import 'styles/glazes.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import bases from 'data/bases.json'

function AddFilter({showAddFilter, setShowAddFilter}) {

    return (
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
    )
}

export default AddFilter
