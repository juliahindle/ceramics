import { useState } from "react"
import Segment from './Segment'

function Column({name, dataPoints, scale, resolveClassName}) {
    return (
        <div className="column">
            {dataPoints.map((dataPoint, i) => 
                <Segment
                    key={i + JSON.stringify(dataPoint)} 
                    label={dataPoint.label}
                    value={dataPoint.value}
                    scale={scale}
                    resolveClassName={resolveClassName}
                />
            )}
            <p>{name}</p>
        </div>
    )
}

export default Column