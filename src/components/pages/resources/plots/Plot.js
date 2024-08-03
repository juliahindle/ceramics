import 'styles/resources_plots.scss'
import Column from 'components/pages/resources/plots/Column'
import { useState } from 'react'


function Plot({width, height, columnsData}) {
    const [highlighted, setHighlighted] = useState("")

    return (
        <div className="plot" width={width} height={height}>
            {columnsData.map((columnData, i) => 
                <Column
                    key={i + JSON.stringify(columnData)}
                    index={i}
                    name={columnData.name}
                    dataPoints={columnData.data}
                    height={height}
                    highlighted={highlighted}
                    setHighlighted={setHighlighted}
                />
            )}
        </div>
    )
}

export default Plot