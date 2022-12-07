import 'styles/pdfButton.scss'

function PDFButton({fileName}) {
    
    return (
        <a className="pdf-button" href={`pdfs/${fileName}`} download>
            {"\u2B07 Download PDF"}
        </a>
    )
}

export default PDFButton