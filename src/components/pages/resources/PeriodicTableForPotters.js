import 'styles/periodicTableForPotters.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useEffect } from 'react'

function PeriodicTableForPotters() {
    
    useEffect(() => {
        updatePageTitle("Periodic Table for Potters - Julia Hindle Ceramics")
        resetScroll()
    }, [])

    return (
        <section className="periodic-table-for-potters">
            <div className="container">
                <div className="description">
                    <h1>Periodic Table for Potters</h1>
                    <hr></hr>
                    <p>This is a simplified periodic table with only the information I felt would be helpful for potters who make their own glazes. I was inspired by Linda Bloomfield who has her own version of a potter's periodic table in her book <em>Science for Potters</em>. There are additional elements that could be included, especially in the transition metals, but I only included the ones I find myself interacting with frequently.</p>
                </div>
                <img src='images/resources/periodic-table-for-potters.svg' alt='Periodic Table for Potters'/>
            </div>
        </section>
    )
}

export default PeriodicTableForPotters