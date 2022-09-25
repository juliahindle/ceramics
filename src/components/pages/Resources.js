import 'styles/resources.scss'
import React, { useState } from 'react'
import resources from 'data/resources.json'

function Resources() {
    return (
        <section className="resources">
            <div className="container">
                {resources.map((resource, index) => 
                    <div className={resource.image ? "index-" + index%6 : ""}>
                        <h2>{resource.title}</h2>
                        {resource.image && <img src={resource.image}/>}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Resources