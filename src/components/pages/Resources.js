import 'styles/resources.scss'
import { useEffect } from 'react'
import resources from 'data/resources.json'
import { updatePageTitle } from 'Constants'
import { NavLink } from 'react-router-dom'

function Resources() {

    useEffect(() => {
        updatePageTitle("Resources - Julia Hindle Ceramics")
    }, [])

    return (
        <section className="resources">
            <div className="container">
                {resources.map((resource, index) => 
                    resource.status !== "inactive" &&
                    <div className={"parent index-" + index%5}>
                        <NavLink to={resource.url}>
                            <div className="text">
                                <h2>{resource.title}</h2>
                                <hr></hr>
                                <p className="description">{resource.description}</p>
                                <p className="date">{resource.dateAdded}</p>
                            </div>
                            <div className="image">
                                <img src={`images/resources/${resource.url}.png`} alt="resource"/>
                            </div>
                        </NavLink>
                    </div>
                )}
                <p className="more">More coming soon!</p>
            </div>
        </section>
    )
}

export default Resources