import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nav.css'

import { faBaseballBatBall, faCalendar, faCalendarTimes, faGear, faHome, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../AppContext';

export const Nav = () => {
    const [selected, setSelected] = useState('Home');

    const { nav, setNav } = useContext(MyContext)

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
        <nav className='flex z-10 items-center justify-center w-[375px] first-line:  self-center  pl-4 pr-4 fixed bottom-0  bg-[#513BB2] bg-opacity-60 md:left-0  md:w-[100vw]  '>
            <ul className='flex transition-all  duration-300 ease-linear'>
                {navs.map((item) => {
                    const isSelected = item.title === nav;
                    return (
                        <li
                            className={
                                'm-5 p-2 transition-all duration-300 ease-linear bg-blue-800 rounded-2xl cursor-pointer flex items-center slide-in'

                            }
                            onClick={() => {setNav(item.title); setSelected(item.title)}}
                        >
                            <FontAwesomeIcon className='m-2 text-white' size='sm' icon={item.icon} />
                            <a
                                className={
                                    'block text-white mr-2 text-sm hover:text-white'
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
