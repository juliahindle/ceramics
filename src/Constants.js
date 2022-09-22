import { createContext } from 'react'

// General
export const BLANK_GLAZE = {glaze: {id: "", base: "", additives : []}, base: {id: "", name: "", recipe : []}};

// Contexts
export const GlazesContext = createContext("glazes");