import "styles/resources_glazeAdditiveComboGenerator_material.scss"

function Material({material, setMaterialName, setMaterialMaximum, removeSelf}) {
    return (
        <tr>
            <td>
                <button className="minus" onClick={() => removeSelf()}>-</button>
            </td>
            <td className="material">
                <div className="input-container">
                    <input value={material.name} 
                        onChange={e => setMaterialName(e.target.value)}
                    />
                </div>
            </td>
            <td className={isNaN(material.max) ? "maximum invalid" : "maximum"}>
                <div className="input-container">
                    <input 
                        value={material.max}
                        onChange={e => setMaterialMaximum(e.target.value)}
                    />
                </div>
                <p>* must be a number</p>
            </td>
        </tr>
    )
}

export default Material