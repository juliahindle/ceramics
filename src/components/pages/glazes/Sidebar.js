import 'styles/glazes_sidebar.scss'
import React, { useContext, useEffect } from 'react'
import { GlazesContext, setScroll } from 'Constants'

function Sidebar({closeSidebar}) {
    const {showSidebar, selectedGlaze} = useContext(GlazesContext)

    useEffect(() => {
        if (showSidebar) {
            setTimeout(() =>  setScroll(), 700)
        }
    }, [showSidebar])

    const createSources = () => {
        let markup = []
        const baseSource = selectedGlaze.base.source
        const glazeSource = selectedGlaze.glaze.source

        if (baseSource && (!baseSource.creator ||  baseSource.creator !== "Julia Hindle")) {
            if (glazeSource && glazeSource.creator) {
                markup.push(<p className="info"><u>Glaze Base</u></p>)
            }
            markup = markup.concat(createSource(baseSource))
        }

        if (glazeSource) {
            if (glazeSource.creator && baseSource.creator !== "Julia Hindle") {
                markup.push(<br></br>)
                markup.push(<p className="info"><u>Glaze Additives</u></p>)
            }
            markup = markup.concat(createSource(glazeSource))
            
        }
        
        return markup
    }

    const createSource = (sourceData) => {
        let markup = []
        
        if (sourceData.creator) markup.push(<p className="info">Creator: {sourceData.creator}</p>)
        if (sourceData.book) markup.push(<p className="info"><em>{sourceData.book.title}</em> by {sourceData.book.author}, p. {sourceData.book.page}</p>)
        if (sourceData.glazy) markup.push(<p className="info">See on <a href={"https://glazy.org/recipes/" + sourceData.glazy} target="_blank" rel="noreferrer">Glazy</a></p>)
        
        return markup
    }

    const getPhotoPath = (id, size) => {
        return `images/glazes/${size}/${id}.png`
    }

    return (
        <aside className="sidebar">
            <div className="container">
                <button
                    className="close-button" 
                    aria-label="Close sidebar" 
                    type="button" 
                    onClick={closeSidebar}>
                    x
                </button>
                <img 
                    src={getPhotoPath(selectedGlaze.glaze.id, "4x")}
                    srcSet={
                        `${getPhotoPath(selectedGlaze.glaze.id, "4x")} 4x,` + 
                        `${getPhotoPath(selectedGlaze.glaze.id, "3x")} 3x,` + 
                        `${getPhotoPath(selectedGlaze.glaze.id, "2x")} 2x`
                    }
                    alt={`glaze with id: ${selectedGlaze.glaze.id}`}
                /> 
                {selectedGlaze.glaze.name && <p className="name">{selectedGlaze.glaze.name}</p>}

                <h2>Recipe</h2>
                <table className="recipe">
                    <tbody>
                        {selectedGlaze.base.recipe.map((part) =>
                            <tr>
                                <td>{part.ingredient}</td>
                                <td>{part.amount}</td>
                            </tr>
                        )}
                        {selectedGlaze.glaze.additives.length > 0 && 
                            <tr className="add">
                                <td>Add:</td>
                            </tr>
                        }
                        {selectedGlaze.glaze.additives.map((part) =>
                            <tr>
                                <td>{part.ingredient}</td>
                                <td>{part.amount}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                <h2>Sources</h2>
                {createSources()}

                <h2>Cone</h2>
                <p className="info">Cone 6</p>

                <h2>Base Glaze</h2>
                <p className="info">{selectedGlaze.glaze.base}</p>

                <h2>Clay</h2>
                <p className="info">{selectedGlaze.glaze.clay} Stoneware</p>

                <h2>Date</h2>
                <p className="info">{selectedGlaze.glaze.date}</p>
            </div>
        </aside>
    )
}

export default Sidebar
