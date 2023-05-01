import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
function Layout() {
    const [darkMode, setDarkMode] = useState(true);
    const [theme, setTheme] = useState('dark');
    // change theme in local storage 
    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
        if (localStorage.getItem('theme') === "light") {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }
    //  verify if we have item  for the theme in localstorage 
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        }
    }, [])
    //  change theme according to  localstorage theme 
    useEffect(() => {
        const html = document.querySelector('html');
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme]);

    // trying transition of page 
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionClass, setTransitionClass] = useState("fadeIn");
    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionClass("fadeOut");
        }
    }, [location, displayLocation]);

    return (
        <div className='flex h-screen overflow-hidden '>
            <Sidebar />
            <div className='w-full  '>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div className={`h-full bg-lightColor dark:bg-DarkColor dark:text-gray-200 overflow-scroll ${transitionClass}`} onAnimationEnd={() => {
                    if (transitionClass === "fadeOut") {
                        setTransitionClass("fadeIn");
                        setDisplayLocation(location);
                    }
                }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout