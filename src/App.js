// Styles
import 'styles/base.scss'
// React
import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { browserName, browserVersion } from "react-device-detect"
// Components
import Base from 'components/Base'
import Home from 'components/pages/Home'
import About from 'components/pages/About'
import Resources from 'components/pages/Resources'
import Glazes from 'components/pages/Glazes'
import InProgress from 'components/pages/InProgress'
import PeriodicTableForPotters from 'components/pages/resources/PeriodicTableForPotters'
import GlazeResearchDocument from 'components/pages/resources/GlazeResearchDocument'

// Constants
import { BLANK_GLAZE, GlazesContext } from 'Constants'

function App() {
    // Glazes state
    const [showSidebar, setShowSidebar] = useState(false)
    const [selectedGlaze, setSelectedGlaze] = useState(BLANK_GLAZE)

    // User tracking
    const getData = async () => {
        const geoResponse = await axios.get('https://geolocation-db.com/json/')
        var geoData = geoResponse.data

        let city = geoData.city || ""
        let state = geoData.state || ""
        let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZ07yxNyO6q-KGF2Np2JxZwHfSpP_GLq3VhBKA8rtV99YBTA/formResponse?entry.1316452331=${window.location.host}&entry.963390676=${geoData.IPv4}&entry.852573067=${city}&entry.1495514100=${geoData.country_code}&entry.1375356915=${geoData.country_name}&entry.1116749267=${state}&entry.1578103802=${browserName}&entry.1601834397=${browserVersion}&entry.110367476=${window.innerHeight}&entry.1601881770=${window.innerWidth}`

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }

    useEffect(() => { getData() }, [])

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
                    <Route path="/about" element={<InProgress />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/resources/periodic-table-for-potters" element={<PeriodicTableForPotters />} />
                    <Route path="/resources/2019-2021-glaze-research-document" element={<GlazeResearchDocument />} />
                </Route>
            </Routes>
      </HashRouter>
    ) 
}

export default App
