import React, { useState, useContext } from 'react'
import { MdBrightness3, MdSunny , MdNotifications ,   } from 'react-icons/md'
import {AiOutlineMenu}  from 'react-icons/ai'


function Header(props) {
    // const [theme, setTheme] = useContext(ThemeContext)
    // const handleThemeChange = () => {

    // };


    return (
        <div className='h-16 flex  lg:block   justify-between w-full p-5 bg-headerLightSliderColo dark:bg-headerSliderDarkColor   shadow-lg'>
            <div className=' lg:hidden '>
                <AiOutlineMenu/>
            </div>
            <div className='flex justify-end space-x-5  text-xl'>
                <button onClick={props.toggleDarkMode} className='dark:text-gray-400'> { localStorage.getItem('theme') !== 'dark' ? <MdSunny /> : <MdBrightness3 className='text-violet-700'/>} </button>
                <button> <MdNotifications  className='text-violet-700 dark:text-gray-400 '/> </button>
                <div className=' bg-white h-8 w-8 p-1  bg-slate-400 rounded-full '>
                    <img src='logo192.png'/> </div>
            </div>
        </div>
    )
}

export default Header