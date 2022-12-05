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
        // window.addEventListener("onLoad", handleResize); TODO when have wifi, same w header
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let newColumns = Array(numColumns).fill(0)  //TODO
        newColumns.forEach((col, i) => {
            newColumns[i] = []
        })
        photos.map((photo, i) => {
            newColumns[i % numColumns].push(<img src={photo}></img>)
        
        })
        setPhotoColumns(newColumns)
    }, [numColumns])

    return (
        <section className="pottery">
            <div className="container">
                {photoColumns.map(photos => <column>{photos}</column>)} {/* TODO rename column tag */}
            </div>
        </section>
    )
}

export default Pottery