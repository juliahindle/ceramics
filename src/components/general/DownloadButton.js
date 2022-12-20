function DownloadButton({fileName, text}) {
    return (
        <a className="button" href={`files/${fileName}`} download>
            <img src="svgs/download.svg" alt="down arrow"></img> {text}
        </a>
    )
}

export default DownloadButton