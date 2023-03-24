import 'styles/pottery.scss'
import { useState, useEffect } from 'react'
import { resetScroll, updatePageTitle } from 'Constants'
import PotteryImage from 'components/pages/pottery/PotteryImage'
import pottery from 'data/pottery.json'

function Pottery() {
    const [numColumns, setNumColumns] = useState(3)
    const [photoColumns, setPhotoColumns] = useState([[], [], []])

    useEffect(() => {
        updatePageTitle("Pottery")

        const handleResize = () => {
            let newNumColumns
            if (window.innerWidth <= 450) newNumColumns = 1
            else if (window.innerWidth <= 1000) newNumColumns = 2
            else  newNumColumns = 3
            setNumColumns(newNumColumns)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            resetScroll()
        }
    }, [])

    useEffect(() => {
        let newColumns = Array.from(Array(numColumns), () => [])
        pottery.forEach((pot, i) => newColumns[i % numColumns].push(
            <PotteryImage key={pot.id+i} pot={pot}/>
        ))
        setPhotoColumns(newColumns)
    }, [numColumns])

    return (
        <section className="pottery">
            <div className="container">
                {photoColumns.map((photos, i) => <div key={photos+i} className="column">{photos}</div>)}
            </div>
        </section>
    )
}

export default Pottery