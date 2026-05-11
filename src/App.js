// Styles
import 'styles/base.scss'
// React
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { browserName, browserVersion } from "react-device-detect"
// Components
import Base from 'components/Base'
import Home from 'components/pages/Home'
import About from 'components/pages/About'
import Resources from 'components/pages/Resources'
import Glazes from 'components/pages/Glazes'
import Pottery from 'components/pages/Pottery'
import MakeYourOwnJewelryEnamel from 'components/pages/resources/MakeYourOwnJewelryEnamel'
import ChemicalBreakdownsOfCommonMaterials from 'components/pages/resources/ChemicalBreakdownsOfCommonMaterials'
import GlazeAdditiveComboGenerator from 'components/pages/resources/GlazeAdditiveComboGenerator'
import DigitizingYourGlazeNotes from 'components/pages/resources/DigitizingYourGlazeNotes'
import PeriodicTableForPotters from 'components/pages/resources/PeriodicTableForPotters'
import GlazeResearchDocument from 'components/pages/resources/GlazeResearchDocument'
import InProgress from 'components/pages/InProgress'

// Constants
import { BLANK_GLAZE, GlazesContext } from 'Constants'

function App() {
    // Glazes state
    const [showSidebar, setShowSidebar] = useState(false)
    const [selectedGlaze, setSelectedGlaze] = useState(BLANK_GLAZE)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base showSidebar={showSidebar}/>} >
                    <Route path="/" element={<Home/>} />
                    <Route 
                        path="/glazes" 
                        element={
                            <GlazesContext.Provider value={{
                                showSidebar: showSidebar, 
                                setShowSidebar: setShowSidebar, 
                                selectedGlaze: selectedGlaze, 
                                setSelectedGlaze: setSelectedGlaze
                            }}>
                                <Glazes/>
                            </GlazesContext.Provider>
                        } 
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/pottery" element={<Pottery />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/make-your-own-jewelry-enamel" element={<MakeYourOwnJewelryEnamel />} />
                    <Route path="/chemical-breakdowns-of-common-materials" element={<ChemicalBreakdownsOfCommonMaterials />} />
                    <Route path="/glaze-additive-combo-generator" element={<GlazeAdditiveComboGenerator />} />
                    <Route path="/digitizing-your-glaze-notes" element={<DigitizingYourGlazeNotes />} />
                    <Route path="/periodic-table-for-potters" element={<PeriodicTableForPotters />} />
                    <Route path="/2019-2021-glaze-research-document" element={<GlazeResearchDocument />} />
                    <Route path="/in-progress" element={<InProgress />} />
                </Route>
            </Routes>
      </BrowserRouter>
    ) 
}

export default App
