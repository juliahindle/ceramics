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
    if (selectedGlaze && !isInViewport(selectedGlaze)) {
        main.scrollTop = selectedGlaze.offsetTop - 45
    }
}

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

export const resetScroll = () => {
    document.getElementById("main").scrollTop = 0
}