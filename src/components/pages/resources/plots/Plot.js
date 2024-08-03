import 'styles/resources_plots.scss'
import Column from 'components/pages/resources/plots/Column'
import { useState, useEffect } from 'react'


function Plot({width, height, columnsData}) {
    const [highlighted, setHighlighted] = useState("")
    const [legendData, setLegendData] = useState([])

    useEffect(() => {
        const newLegendData = []
        columnsData.forEach(columnData => {
            columnData.data.forEach(dataPoint => {
                if (!newLegendData.includes(dataPoint.label)) {
                    newLegendData.push(dataPoint.label)
                }
            })
        })
        setLegendData(newLegendData)
    }, [])

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

    const onMouseOver = (e) => {
        setHighlighted(e.currentTarget.classList[0])
    }

    const onMouseOut = () => {
        setHighlighted("")
    }

    return (
        <div className="plot-container">
            <div className="plot" width={width} height={height}>
                {columnsData.map((columnData, i) => 
                    <Column
                        key={i + JSON.stringify(columnData)}
                        index={i}
                        name={columnData.name}
                        dataPoints={columnData.data}
                        height={height}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                        resolveClassName={resolveClassName}

                    />
                )}
            </div>
            <div className="legend">
                {legendData.map((label, i) => 
                    <div 
                        className={resolveClassName(label)}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        <div className={"color " + label.replace(" ", "-").replace("(", "").replace(")", "")}></div>
                        <div className="label">{label}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Plot