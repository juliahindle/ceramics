import 'styles/pdfButton.scss'

function PDFButton({fileName}) {
    
    return (
        <a className="pdf-button" href={`pdfs/${fileName}`} download>
            <img src="cursors/download.svg"></img> Download PDF
        </a>
    )
}

export default PDFButton