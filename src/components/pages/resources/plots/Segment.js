import { useState } from "react"

function Column({label, value, scale, resolveClassName}) {
    const [localHighlight, setLocalHighlight] = useState(false)

    const onMouseOver = () => {
        setLocalHighlight(true)
    } 
    const onMouseOut = () => {
        setLocalHighlight(false)
    }

    const format = (value) => {
        if (!value) return value
        return parseFloat(value).toFixed(1)
    }

    return (
        <div
            className={"segment color " + resolveClassName(label, localHighlight)}
            style={{height: value*scale + "px"}}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <span>{
                value > 0 && 
                (localHighlight ? label.split(" ")[0] + ": " : "")
                + format(value) + "%"}
            </span>
        </div>
    )
}

export default Column