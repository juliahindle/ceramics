import 'styles/pottery.scss'
import { useState, useEffect } from 'react'
import { updatePageTitle } from 'Constants'

function Pottery() {
    const [numColumns, setNumColumns] = useState(3)
    const [photoColumns, setPhotoColumns] = useState([[], [], []])

    function importAll(r) {
        return r.keys().map(r);
      }      
    
    const photos = {
        "1x": importAll(require.context('../../../public/images/pottery/1x', false, /\.(HEIC|JPG|png)$/)),
        "2x": importAll(require.context('../../../public/images/pottery/2x', false, /\.(HEIC|JPG|png)$/)),
        "3x": importAll(require.context('../../../public/images/pottery/3x', false, /\.(HEIC|JPG|png)$/))
    }
    
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
        for (var i = 0; i < photos["1x"].length; i++) {
            newColumns[i % numColumns].push(<img 
                src={photos["3x"][i]} 
                srcSet={`${photos["3x"][i]} 3x,${photos["2x"][i]} 2x,${photos["1x"][i]} 1x`} 
                key={photos["3x"][i] + i} 
                alt={"pottery photo " + (i + 1)}
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