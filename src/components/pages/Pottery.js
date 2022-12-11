import 'styles/pottery.scss'
import { useState, useEffect } from 'react'
import { resetScroll, updatePageTitle } from 'Constants'

function Pottery() {
    const PHOTO_PATH = "images/pottery/"
    const [numColumns, setNumColumns] = useState(3)
    const [photoColumns, setPhotoColumns] = useState([[], [], []])
    
    useEffect(() => {
        updatePageTitle("Pottery")

        const handleResize = () => {
            let newNumColumns = window.innerWidth <= 1000 ? 2 : 3
            setNumColumns(newNumColumns)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            resetScroll()
        }
    }, []);

    useEffect(() => {
        let newColumns = Array.from(Array(numColumns), () => [])
        for (var i = 1; i <= 34; i++) {
            newColumns[(i-1) % numColumns].push(<img 
                src={`${PHOTO_PATH}3x/${i}.jpg`} 
                srcSet={`${PHOTO_PATH}3x/${i}.jpg 3x,${PHOTO_PATH}2x/${i}.jpg 2x,${PHOTO_PATH}1x/${i}.jpg 1x`} 
                key={i} 
                alt={"pottery photo " + i}
            ></img>)
        
        }
        setPhotoColumns(newColumns)
    }, [numColumns])

    return (
        <section className="pottery">
            <div className="container">
                {photoColumns.map((photos, i) => <div key={photos + i} className="column">{photos}</div>)}
            </div>
        </section>
    )
}

export default Pottery