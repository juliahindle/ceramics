import 'styles/pottery.scss'
import { useState, useEffect } from 'react'
import { updatePageTitle } from 'Constants'

function Pottery() {
    const [numColumns, setNumColumns] = useState(3)
    const [photoColumns, setPhotoColumns] = useState([[], [], []])

    function importAll(r) {
        return r.keys().map(r);
      }      
    
    const photos = importAll(require.context('../../../public/images/pottery', false, /\.(HEIC|JPG)$/));
    
    useEffect(() => {
        updatePageTitle("Pottery - Julia Hindle Ceramics")

        const handleResize = () => {
            let newNumColumns = window.innerWidth <= 1000 ? 2 : 3
            setNumColumns(newNumColumns)
        }
        window.addEventListener("resize", handleResize);
        // window.addEventListener("onLoad", handleResize); TODO when have wifi get name for onLoad, same w header
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let newColumns = Array(numColumns).fill(0)  //TODO don't use fill and forEach like this
        newColumns.forEach((col, i) => {
            newColumns[i] = []
        })
        photos.forEach((photo, i) => {
            newColumns[i % numColumns].push(<img src={photo} key={photo + i} alt={"pottery photo " + (i + 1)}></img>)
        
        })
        setPhotoColumns(newColumns)
    }, [numColumns])

    return (
        <section className="pottery">
            <div className="container">
                {photoColumns.map((photos, i) => <column key={photos + i}>{photos}</column>)} {/* TODO rename column tag */}
            </div>
        </section>
    )
}

export default Pottery