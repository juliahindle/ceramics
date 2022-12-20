function LinkButton({path, text}) {
    return (    
        <a className="button" href={path} target="_blank" rel="noreferrer">
            <img src="svgs/link.svg" alt="link icon"></img> {text}
        </a>
    )
}

export default LinkButton