import { useEffect } from 'react'
import { updatePageTitle } from 'Constants'

function InProgress() {
    useEffect(() => {
        updatePageTitle("Page Not Made Yet")
    }, [])

    return (
        <div className='in-progress'>
            Page not made yet! Currently working on it.
        </div>
    )
}

export default InProgress