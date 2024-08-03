import { useState } from "react"

function Column({name, dataPoints, height, highlighted, setHighlighted}) {

    const resolveClassName = (label) => {
        let cleanedLabel = label.replace(" ", "-").replace("(", "").replace(")", "")
        let hoverClass = ""
        if (highlighted) {
            hoverClass = "deselected"
        }
        if (highlighted === cleanedLabel) {
            hoverClass = "selected"
        }
        return cleanedLabel + " " + hoverClass
    }

    const decimalToPercent = (decimal) => {
        return parseFloat((decimal*100).toFixed(2)) + "%"
    }

    const onMouseOver = (e) => {
        setHighlighted(e.currentTarget.classList[0])
    }

    const onMouseOut = () => {
        setHighlighted("")
    }

    return (
        <div className="column">
            {dataPoints.map((dataPoint, i) => 
                <div 
                    key={i + JSON.stringify(dataPoint)} 
                    className={resolveClassName(dataPoint.label)}
                    title={dataPoint.label + ": " + decimalToPercent(dataPoint.value)}
                    style={{'height': dataPoint.value*height + "px"}}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                >
                </div>
            )}
            <p>{name}</p>
        </div>
    )
}

export default Column