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
// Constants
import { BLANK_GLAZE, GlazesContext } from 'Constants'

function App() {
    // Glazes state
    const [showSidebar, setShowSidebar] = useState(false)
    const [selectedGlaze, setSelectedGlaze] = useState(BLANK_GLAZE)

    // User tracking
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        var resData = res.data

        var auth = "ya29.a0Aa4xrXO_thddrv18_oCXBEkvXGzMmiSS67_XwW6ftSwOcizA4q1Zl31Za0Ch6aLYpYbQMzo3GdjtyRFIowXkRyBReijKhKmFXIomM8zGU9HzzHLpzo2ZcPcWgsDyq6jSyR8KHNEe3_M6I8mm_NkHgVOnN5i3aCgYKATASARISFQEjDvL9xsS24VzrWQyZy63T0LTetA0163"
        
        var test = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1JdWa8Ug7KOUkhVlFoI6IoSWPGz3Sk1htqCqA69BTYAo/values/Sheet1!A%3AJ:append?insertDataOption=INSERT_ROWS&valueInputOption=RAW`,{
            method: 'POST',
            headers:{
                "Authorization": `Bearer ${auth}`,
                'content-type':'application/json'
            },
            body: JSON.stringify({"range": "Sheet1!A:J","values": [[window.location.host, resData.IPv4, resData.city,resData.country_code,resData.country_name,resData.state,browserName,browserVersion,window.innerHeight,window.innerWidth]]})
        })
        var response = await test.json()
        console.log(response)
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
                    <Route path="/about" element={<About />} />
                    <Route path="/resources" element={<Resources />} />
                </Route>
            </Routes>
      </HashRouter>
    ) 
}

export default App
