import 'styles/resources_glazeResearchDocument.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useEffect } from 'react'
import PDFButton from 'components/general/PDFButton'

function GlazeResearchDocument() {
    useEffect(() => {
        updatePageTitle("2019-2021 Glaze Research Document - Julia Hindle Ceramics")
        resetScroll()
    }, [])

    return (
        <section className="glaze-research-document">
            <div className="description">
                <h1>2019-2021 Glaze Research Document</h1>
                <hr></hr>
                <p>During my last two years of college, I spent time developing my own cone 6 oxidation glazes in a student-run ceramics studio that I managed.  This is a final write up of my favorite glazes I made or used.  There are 37 recipes in this document with photo examples of each. You can also find all of these glazes and more on the Glazes tab of my website.</p>
                <PDFButton fileName="Julia Hindle Glaze Experiments 2019-2021.pdf"/>
            </div>
            <div className="document">
                {generateDocument()}
            </div>
        </section>
    )
}

const generateDocument = () => {
    var images = []
    for (var i=0; i<=17; i++) {
        images.push(<img src={`images/resources/2019-2021-glaze-research-document/${i}.jpg`} alt={`Glaze Research Document page ${i+1}`}></img>)
    }
    return images
}

export default GlazeResearchDocument