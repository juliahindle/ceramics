import 'styles/about.scss'
import { updatePageTitle } from 'Constants'
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        updatePageTitle("About - Julia Hindle Ceramics")
    }, [])

    return null
}

export default About