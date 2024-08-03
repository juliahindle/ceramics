import { useState } from "react"

function Column({name, dataPoints, height, onMouseOver, onMouseOut, resolveClassName}) {

    
    const decimalToPercent = (decimal) => {
        return parseFloat((decimal*100).toFixed(2)) + "%"
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