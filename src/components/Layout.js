import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
function Layout() {
    const [darkMode, setDarkMode] = useState(true)
    const [theme, setTheme] = useState('dark')

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
        if (localStorage.getItem('theme') === "light") {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light')
        }
    }, [])

    useEffect(() => {
        const html = document.querySelector('html');
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark')
            setTheme('dark')
        } else {
            html.classList.remove('dark')
            setTheme('light')
        }
    }, [theme])

    // const darkTeme  = "" ; 
    return (
        <div className='flex h-screen overflow-hidden '>
            <Sidebar />
            <div className='w-full  '>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div className='h-full bg-lightColor dark:bg-DarkColor dark:text-gray-200 overflow-scroll'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout