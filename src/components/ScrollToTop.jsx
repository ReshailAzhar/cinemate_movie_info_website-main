import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// NOTE:-  useLocation() is causing the unnecessary rerenders of this components

const ScrollToTop = () => {
    const { pathname } = useLocation();

    console.log("ScrollToTop.js rendering");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return null
}

export default ScrollToTop
