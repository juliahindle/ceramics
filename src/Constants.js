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

export const setScroll = (id) => {
    const selectedGlaze = document.getElementById(id)
    const main = document.getElementById("main")
    if (selectedGlaze && !isInViewport(selectedGlaze)) {
        selectedGlaze.scrollIntoView({ behavior: "smooth", block: "center" })
    }
}

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.bottom - 20 >= 0 &&
        rect.top + element.clientHeight <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

export const resetScroll = () => {
    document.getElementById("main").scrollTop = 0
}

export const getGlazePhotoPath = (id, size) => {
    return `images/glazes/${size}-new2/${id}.jpg`
}

export const getPotteryPhotoPath = (id, size) => {
    return `images/pottery/${size}/${id}.jpg`
}