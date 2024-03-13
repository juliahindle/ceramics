import 'styles/resources_digitizingYourGlazeNotes.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useEffect } from 'react'
import DownloadButton from 'components/general/DownloadButton'
import LinkButton from 'components/general/LinkButton'

function MakeYourOwnJewelryEnamel() {
    useEffect(() => {
        updatePageTitle("Make Your Own Jewelry Enamel")
        return resetScroll
    }, [])

    return (
        <section className="resource digitizing-your-glaze-notes">
            <div className="description">
                <h1>Make Your Own Jewelry Enamel</h1>
                <hr></hr>
                <p>
                    Description todo.
                </p>
            </div>
            <div className="content">
                <h2>Subheader</h2>
                <div className="group">
                    <p>
                        Paragraph todo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MakeYourOwnJewelryEnamel