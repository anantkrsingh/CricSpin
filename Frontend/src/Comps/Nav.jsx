import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBaseballBatBall, faCalendar, faCalendarTimes, faGear, faHome, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../AppContext';

export const Nav = () => {
    const [selected, setSelected] = useState('Home');

    const {nav,setNav} = useContext(MyContext)

    const handleClick = (title) => {
        setSelected(title);
    };

    const navs = [
        {
            title: "Home",
            url: "#",
            icon: faHome
        },
        {
            title: "Series",
            url: "#",
            icon: faBaseballBatBall
        },
        {
            title: "Settings",
            url: "",
            icon: faGear
        }
    ];

    return (
        <nav className='flex z-10 items-center justify-center w-[375px]  bg-gradient-to-b from-[#0093E9] to-[#80D0C7]  self-center  pl-4 pr-4 m-0 fixed bottom-0 md:left-0  md:w-[100vw]  '>
            <ul className='flex transition-all duration-300 ease-linear'>
                {navs.map((item) => {
                    const isSelected = item.title === nav;
                    return (
                        <li
                            className={
                                isSelected
                                    ? 'm-5 p-2 transition-all duration-300 ease-linear  bg-gradient-to-b from-[#0093E9] to-[#80D0C7] rounded-2xl cursor-pointer flex items-center slide-in'
                                    : 'm-5 p-2 cursor-pointer  transition-all duration-300 ease-linear  flex items-center'
                            }
                            onClick={() => setNav(item.title)}
                        >
                            <FontAwesomeIcon className='m-2 text-white' icon={item.icon} />
                            <a
                                className={
                                    isSelected
                                        ? 'block text-white mr-2 hover:text-white'
                                        : 'hidden'
                                }
                                href=""
                            >
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
