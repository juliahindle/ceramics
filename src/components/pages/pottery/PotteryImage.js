import { useState, useEffect }from 'react'
// import parse from "html-react-parser"
import { Link } from 'react-router-dom'
import glazes from 'data/glazes.json'

function PotteryImage({pot}) {
    const [descriptionToggle, setDescriptionToggle] = useState(false)

    const getPhotoPath = (id, size) => {
        return `images/pottery/${size}/${id}.jpg`
    }

    return (
        <div>
            <img 
                src={getPhotoPath(pot.id, "3x")}
                srcSet={
                    `${getPhotoPath(pot.id, "3x")} 3x,` + 
                    `${getPhotoPath(pot.id, "2x")} 2x,` + 
                    `${getPhotoPath(pot.id, "1x")} 1x`
                }
                alt={"pottery photo " + pot.id}
                onClick={() => setDescriptionToggle(prev => !prev)}
            ></img>
            <p className={descriptionToggle ? "enabled" : "disabled"}>
                Glazes used:
                <br/>
                {pot.glazes && pot.glazes.map((glazeId, i) => <>
                    <Link to={`/glazes?sidebar=${glazeId}`}>
                        {glazes.find(glaze => glaze.id === glazeId).name}
                    </Link>
                    <br/>
                </>)}
                <br/>
                {pot.description}
            </p>
        </div>
    )
}

export default PotteryImage