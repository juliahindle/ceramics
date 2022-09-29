import 'styles/resources.scss'
import React from 'react'
import resources from 'data/resources.json'

function Resources() {
    return (
        <section className="resources">
            <div className="container">
                {resources.map((resource, index) => 
                    <div className={resource.image ? "parent index-" + index%5 : "parent"}>
                        <div className="text">
                            <h2>{resource.title}</h2>
                            <hr></hr>
                            <p className="description">{resource.description}</p>
                            <p className="date">{resource.dateAdded}</p>
                        </div>
                        <div className="image">
                            {resource.image && <img src={`images/resources/${resource.image}`} alt="resource"/>}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Resources