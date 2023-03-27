import { useState }from 'react'
import { Link } from 'react-router-dom'
import glazes from 'data/glazes.json'
import { getPotteryPhotoPath } from 'Constants'

function PotteryImage({pot}) {
    const [descriptionToggle, setDescriptionToggle] = useState(false)

    return (
        <div>
            <img 
                src={getPotteryPhotoPath(pot.id, "4x")}
                srcSet={
                    `${getPotteryPhotoPath(pot.id, "4x")} 4x,` + 
                    `${getPotteryPhotoPath(pot.id, "3x")} 3x,` + 
                    `${getPotteryPhotoPath(pot.id, "2x")} 2x,` + 
                    `${getPotteryPhotoPath(pot.id, "1x")} 1x`
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