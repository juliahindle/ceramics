import { useState } from "react"
import Segment from './Segment'

function Column({name, dataPoints, height, isHighlighted, resolveClassName}) {

    return (
        <div className="column">
            {dataPoints.map((dataPoint, i) => 
                <Segment
                    key={i + JSON.stringify(dataPoint)} 
                    label={dataPoint.label}
                    value={dataPoint.value}
                    height={height}
                    isHighlighted={isHighlighted}
                    resolveClassName={resolveClassName}
                />
            )}
            <p>{name}</p>
        </div>
    )
}

export default Column