import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import { MyContext } from '../AppContext'
import Home from './Home'
import { Series } from './Series'
import { About } from './About'

export const Dash = () => {
    const {nav} = useContext(MyContext)
    const MyDiv = () =>{
        switch(nav){
            case "Home" : return( <Home/> )
            case "Series" :return( <Series/>)
            default: return( <About/> )
        }
    }
    return (
        <div className="flex z-0 h-screen  justify-center w-[375px]  bg-main pl-4 pr-4 m-0 fixed md:left-0  md:w-[100vw] transition-all duration-300 ease-in-out overflow-y-auto">
            <MyDiv/>
            <img src={Logo} className='fixed top-0 w-[60px] ' alt="" />
        </div>
    )
}
