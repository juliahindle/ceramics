import 'styles/resources.scss'
import { useEffect } from 'react'
import resources from 'data/resources.json'
import { updatePageTitle, resetScroll } from 'Constants'
import { Link } from 'react-router-dom'

function Resources() {

    useEffect(() => {
        updatePageTitle("Resources")
        return resetScroll
    }, [])

    return (
        <section className="resources">
            <div className="container">
                {resources
                 .filter(resource => resource.status !== 'inactive')
                 .map((resource, index) => 
                    <div className='parent'>
                        <Link to={"/" + resource.url}>
                            <div className={"content index-" + index%6}>
                                <div className="text">
                                    <h2>{resource.title}</h2>
                                    <hr></hr>
                                    <p className="description">{resource.description}</p>
                                    <p className="date">{resource.dateAdded}</p>
                                </div>
                                <div className="image">
                                    <img src={`images/resources/previews/${resource.url}.jpg`} alt="resource"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Resources