import 'styles/pdfButton.scss'

function PDFButton({fileName}) {
    
    return (
        <a className="pdf-button" href={`pdfs/${fileName}`} download>
            <img src="cursors/download.svg" alt="down arrow"></img> Download PDF
        </a>
    )
}

export default PDFButton