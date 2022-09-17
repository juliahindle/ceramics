import 'styles/test.css';
import React from 'react';

function Sidebar({glaze, base}) {
    console.log("glaze: " + glaze)
    console.log("base: " + base)
    return (
        <div className={"sidebar " + (glaze.id? "enabled" : "disabled")}>
            <img src={`images/glazes/2x/${glaze.id}.png`} alt={`glaze with id: ${glaze.id}`}/> 

            <h2>Cone</h2>
            <p>Cone 6</p>

            <h2>Base Glaze</h2>
            <p>{glaze.base}</p>

            <h2>Clay</h2>
            <p>181 Stoneware</p>

            <h2>Recipe</h2>
            <table className="recipe">
                <tbody>
                    {base.recipe.map((part) =>
                        <tr>
                            <td>{part.ingredient}</td>
                            <td>{part.amount}</td>
                        </tr>
                    )}
                    <tr>
                        <td>F4 Feldspar</td>
                        <td>41</td>
                    </tr>
                        <tr className="add">
                        <td>Add:</td>
                    </tr>
                    {glaze.additives.map((part) =>
                        <tr>
                            <td>{part.ingredient}</td>
                            <td>{part.amount}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Sidebar
