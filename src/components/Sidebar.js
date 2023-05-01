import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiSettings, FiLogOut } from 'react-icons/fi'
import { MdElectricBolt, MdCompare } from 'react-icons/md'
function Sidebar() {
    const linkIconClass = " mx-4 text-xl"

    const activeStyle = {
        borderLeft: "solid #7C3AED 5 px ",
        borderRdius: "20px",
        padding: "10px",
        // color: "#fff",
        color: localStorage.getItem('theme') === 'dark' ? "#ffffff" : "#000000",
        transitionDuration: " 1s"
    }


    const Link = [
        {
            Title: "Dashboard",
            icon: <FiHome className={linkIconClass} />,
            route: ""
        },
        {
            Title: "Comparison",
            icon: <MdCompare className={linkIconClass} />,
            route: "/comparatif"
        },
        {
            Title: " Source",
            icon: <MdElectricBolt className={linkIconClass} />,
            route: "/source"
        },
        {
            Title: "Setting",
            icon: <FiSettings className={linkIconClass} />,
            route: "/setting"
        }


    ]

    const link = Link.map((items, index) => {

        return (
            <li key={index} className='py-3 px-0 flex h-15'>
                <NavLink to={items.route} end
                    style={({ isActive }) => isActive ? activeStyle : null}>
                    <span className='flex'> {items.icon}<span>{items.Title}</span></span>
                </NavLink>
            </li>
        )
    })
    return (
        <div className=' w-64  bg-headerLightSliderColor dark:bg-headerSliderDarkColor h-screen font-semibold  '>
            <div >
                <h1 className='text-center  font-bold dark:text-white text-black text-xl m-4'> Techapp </h1>
            </div>
            <div className='text-center mt-6'>
                <ul className='space-y-2  text-gray-500 '>
                    {link}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar