// Styles
import 'styles/base.scss'
// React
import React, { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
// Components
import Base from 'components/Base';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Resources from 'components/pages/Resources';
import Glazes from 'components/pages/Glazes'
// Constants
import { BLANK_GLAZE, GlazesContext } from 'Constants';

function App() {
    // Glazes state
    const [showSidebar, setShowSidebar] = useState(false)
    const [selectedGlaze, setSelectedGlaze] = useState(BLANK_GLAZE)

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Base showSidebar={showSidebar}/>} >
                    <Route path="/" element={<Home/>} />
                    <Route 
                        path="/glazes" 
                        element={
                            <GlazesContext.Provider value={{
                                setShowSidebar: setShowSidebar, 
                                selectedGlaze: selectedGlaze, 
                                setSelectedGlaze: setSelectedGlaze
                            }}>
                                <Glazes/>
                            </GlazesContext.Provider>
                        } 
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/resources" element={<Resources />} />
                </Route>
            </Routes>
      </HashRouter>
    ) 
}

export default App
