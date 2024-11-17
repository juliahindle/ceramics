import 'styles/resources_plots.scss'
import Column from 'components/pages/resources/plots/Column'
import { useState, useEffect } from 'react'


function Plot({width, height, title, columnsData, useTicks = true}) {
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

    const resolveLabelName = (label) => {
        return label.replace(" ", "-").replace("(", "").replace(")", "")
    }

    const resolveClassName = (label, localHighlight = false) => {
        let cleanedLabel = resolveLabelName(label)
        let hoverClass = ""
        if (highlighted) {
            hoverClass = "deselected"
        }
        if (highlighted === cleanedLabel || localHighlight) {
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
            <h3 style={{width: width+25}}>{title}</h3>
            <div className="data-container">
                {useTicks && <>
                    <div class="labels" style={{height: height-6}}>
                        <p>100%</p>
                        <p>90%</p>
                        <p>80%</p>
                        <p>70%</p>
                        <p>60%</p>
                        <p>50%</p>
                        <p>40%</p>
                        <p>30%</p>
                        <p>20%</p>
                        <p>10%</p>
                    </div>
                    <div class="ticks"></div>
                </>}
                <div className="plot" style={{width: width, height: height}}>
                    {columnsData.map((columnData, i) => 
                        <Column
                            key={i + JSON.stringify(columnData)}
                            index={i}
                            name={columnData.name}
                            dataPoints={columnData.data}
                            height={height}
                            scale={height/100}
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
        </div>
    )
}

export default Plot