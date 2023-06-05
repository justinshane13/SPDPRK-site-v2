import { useState, useEffect } from 'react'

const getWindowWidth = () => {
    const width = window.innerWidth
    return width
}

const getWindowHeight = () => {
    const height = window.innerHeight
    return height
}

export const useWindowDimensions = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth())
    const [windowHeight, setWindowHeight] = useState(getWindowHeight())

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth())
            setWindowHeight(getWindowHeight())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [windowWidth, windowHeight])

    return { windowWidth, windowHeight }
}