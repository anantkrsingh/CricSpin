import React, { useContext } from 'react'
import { MyContext } from '../AppContext'
import Home from './Home'
import { Series } from './Series'
import { About } from './About'
import { MatchResults } from './MatchResults'
import { UpcominMatch } from '../Comps/UpcominMatch'
import { Upcoming } from './Upcoming'

export const Dash = () => {
    const {nav} = useContext(MyContext)
    const MyDiv = () =>{
        switch(nav){
            case "Home" : return( <Home/> )
            case "Results" :return( <MatchResults/>)
            case "Upcoming" :return(
                <div>

                    <Upcoming/>
                </div>
                )
            default: return( <About/> )
        }
    }
    return (
        <div className="flex z-0 h-screen  justify-center w-[375px] bg  pr-4 m-0 fixed md:left-0  md:w-[100vw] transition-all duration-300 ease-in-out overflow-y-auto">
            <MyDiv/>
        </div>
    )
}
