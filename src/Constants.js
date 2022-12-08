import { createContext } from 'react'

// General
export const BLANK_GLAZE = {glaze: {id: "", base: "", additives : []}, base: {id: "", name: "", recipe : []}}

// Contexts
export const GlazesContext = createContext("glazes")
export const FilterCategoriesContext = createContext("filters")

// Methods
export const updatePageTitle = (title) => {
    document.title = title + " - Julia Hindle Ceramics"
}

export const setScroll = () => {
    const selectedGlaze = document.getElementById("selected-glaze")
    const main = document.getElementById("main")
    if (selectedGlaze.offsetTop > window.screen.height - 170 && window.screen.width > 700) {
        main.scrollTop = selectedGlaze.offsetTop - 45
    }
}

export const resetScroll = () => {
    document.getElementById("main").scrollTop = 0
}