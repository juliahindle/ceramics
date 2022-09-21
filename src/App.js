import 'styles/base.scss'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from 'components/about/About';
import Resources from 'components/resources/Resources';
import Glazes from 'components/glazes/Glazes'
import Base from 'Base';

function App() {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base showSidebar={showSidebar}/>} >
                    <Route path="/" element={<p>TBD landing page</p>} />
                    <Route path="/glazes" element={<Glazes setShowSidebar={setShowSidebar}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resources" element={<Resources />} />
                </Route>
            </Routes>
      </BrowserRouter>
    )
}

export default App
