import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nav.css'

import { faBaseballBatBall, faSquarePollVertical, faCalendar, faCalendarTimes, faGear, faHome, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
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
            title: "Results",
            url: "#",
            icon: faSquarePollVertical
        },
        {
            title: "Settings",
            url: "",
            icon: faGear
        }
    ];

    return (
        <nav className='flex z-10 items-center justify-center w-[375px] first-line:  self-center  pl-4 pr-4 fixed bottom-0  bg-blue-500 md:left-0  md:w-[100vw]'>
            <ul className='flex transition-all flex-1  duration-300 ease-linear'>
                {navs.map((item) => {
                    const isSelected = item.title === nav;
                    return (
                        <li
                            className={
                                'm-1 p-1 flex-1 transition-all duration-300 ease-linear rounded-2xl cursor-pointer flex flex-row  justify-center items-center slide-in'

                            }
                            onClick={() => setNav(item.title)}
                        >
                            <div className='flex flex-col items-center justify-center self-center'>

                            <FontAwesomeIcon className='m-2 self-center text-white' size='sm' icon={item.icon} />
                            <p
                                className={
                                    'block text-white text-sm hover:text-white'
                                }
                                onClick={() => setNav(item.title)}

                            >
                                {item.title}
                            </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
