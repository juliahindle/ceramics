import 'styles/test.css'
import React, { useState } from 'react'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import glazes from 'data/glazes.json'
import bases from 'data/bases.json'

function App() {
    const BLANK_GLAZE = {glaze: {id: "", base: "", additives : []}, base: {id: "", name: "", recipe : []}};
    const [selectedGlaze, setSelectedGlaze] = useState(BLANK_GLAZE)
    const [showSidebar, setShowSidebar] = useState(false)

    return (<>
        <header>
            <a href="/">
                <img src='logo.svg' alt='Website logo'/>
            </a>
            <nav>
                <ul>
                <li>About</li>
                <li>Resources</li>
                <li className="selected">Glazes</li>
                </ul>
            </nav>
        </header>


        <main className={(showSidebar && "aside-enabled")}>
            <section className="glazes">
                <div className="container">
                    {glazes.map(glaze => 
                        <img 
                            className={(selectedGlaze.glaze.id === glaze.id && "selected")}
                            src={`images/glazes/2x/${glaze.id}.png`} 
                            alt={`glaze with id: ${glaze.id}`}
                            onClick={() => {
                                setSelectedGlaze({glaze: glaze, base: bases.find(base => (base.name === glaze.base))})
                                setShowSidebar(true)
                            }}
                        />
                    )}
                </div>
            </section>

            <aside className="sidebar">
                <div className="container">
                    <button 
                        class="close-button" 
                        aria-label="Close alert" 
                        type="button" 
                        onClick={() => {
                            setShowSidebar(false)
                            setTimeout(function() {
                                setSelectedGlaze(BLANK_GLAZE)
                            }.bind(this),600);
                        }}>
                        x
                    </button>
                    <img src={`images/glazes/2x/${selectedGlaze.glaze.id}.png`} alt={`glaze with id: ${selectedGlaze.glaze.id}`}/> 

                    <h2>Cone</h2>
                    <p>Cone 6</p>

                    <h2>Base Glaze</h2>
                    <p>{selectedGlaze.glaze.base}</p>

                    <h2>Clay</h2>
                    <p>181 Stoneware</p>

                    <h2>Recipe</h2>
                    <table className="recipe">
                        <tbody>
                            {selectedGlaze.base.recipe.map((part) =>
                                <tr>
                                    <td>{part.ingredient}</td>
                                    <td>{part.amount}</td>
                                </tr>
                            )}
                            <tr>
                                <td>F4 Feldspar</td>
                                <td>41</td>
                            </tr>
                                <tr className="add">
                                <td>Add:</td>
                            </tr>
                            {selectedGlaze.glaze.additives.map((part) =>
                                <tr>
                                    <td>{part.ingredient}</td>
                                    <td>{part.amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* <Sidebar glaze={selectedGlaze.glaze} base={selectedGlaze.base}/> */}
            </aside>
        </main>
    </>)
}

export default App
