import 'styles/pottery.scss'
import { useState, useEffect } from 'react'
import { updatePageTitle } from 'Constants'

function Pottery() {
    const [numColumns, setNumColumns] = useState(3)
    const [photoColumns, setPhotoColumns] = useState([[], [], []])

    function importAll(r) {
        return r.keys().map(r);
      }      
    
    const photos = importAll(require.context('../../../public/images/pottery', false, /\.(HEIC|JPG|png)$/));
    
    useEffect(() => {
        updatePageTitle("Pottery - Julia Hindle Ceramics")

        const handleResize = () => {
            let newNumColumns = window.innerWidth <= 1000 ? 2 : 3
            setNumColumns(newNumColumns)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    useEffect(() => {
        let newColumns = Array.from(Array(numColumns), () => [])
        photos.forEach((photo, i) => {
            newColumns[i % numColumns].push(<img src={photo} key={photo + i} alt={"pottery photo " + (i + 1)}></img>)
        
        })
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