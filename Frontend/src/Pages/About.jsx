import React, { useState } from 'react'

import { BsCaretRight } from 'react-icons/bs'

export const About = () => {
    const [aboutShown, setAboutShown] = useState(false)
    return (
        <div className='w-full top-16 m-2 font-[Roboto] transition-all duration-150 ease-in-out   relative'>
            <div className='bg-white rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer' >
                <div onClick={() => setAboutShown(!aboutShown)} className='flex justify-between items-center transition-all duration-150 ease-in-out '>
                    <p>About</p>
                    <BsCaretRight />
                </div>
                <div className={aboutShown ? '' : "hidden"}>
                    Cricspin stands as one of the world's foremost cricket technology solution provider.
                    Throughout its journey, cricket has always been a game heavily reliant on statistical data, and Cricspin fully embraces this aspect, leveraging the power of numbers to enhance smoothness, conduct comprehensive business studies, and contribute to the overall economics of cricket through robust analytics.

                    Established in 2023 Cricspin offers a dynamic display of live ball-by-ball statistics for all Test, ODI, T20I, and club matches. The platform excels in delivering multiple live coverages of cricket matches, ensuring users have access to Live Scorecards, Fixtures, Player rankings, Team rankings, News, and more. Moreover, it provides in-depth statistical insights for every Cricket match and the cricketers who have graced the game.

                    With a bold vision, Cricspin aims to be the world's most popular digital sports platform. Striving to pave the way for greater competitiveness, entertainment, and constructive engagement with cricket, the platform caters to the needs of players, enthusiasts, and stakeholders alike.
                </div>
            </div>

            <div onClick={() => window.open("https://rishabhcricket.wixsite.com/my-site-1/privacy-policy", "_blank")} className='bg-white mt-4 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer'>
                <div className='flex justify-between items-center transition-all duration-150 ease-in-out '>
                    <a target='_blank' href="https://rishabhcricket.wixsite.com/my-site-1/privacy-policy">Privacy Policy</a>
                    <BsCaretRight />
                </div>
            </div>

            <div onClick={() => window.open("mailto:alien01plays@gmail.com")} className='bg-white mt-4 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer'>
                <div className='flex justify-between items-center transition-all duration-150 ease-in-out '>
                    <a href="mailto:alien01plays@gmail.com">Advertise With US</a>
                    <BsCaretRight />
                </div>
            </div>
            <div onClick={() => window.open("https://t.me/CricSpin")} className='bg-white mt-4 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer'>
                <div className='flex justify-between items-center transition-all duration-150 ease-in-out '>
                    <a href="https://t.me/CricSpin">Telegram</a>
                    <BsCaretRight />
                </div>
            </div>

            <div onClick={() => window.open("https://play.google.com/store/apps/developer?id=CricSpin+Technologies")} className='bg-white mt-4 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer'>
                <div className='flex justify-between items-center transition-all duration-150 ease-in-out '>
                    <a href="https://play.google.com/store/apps/developer?id=CricSpin+Technologies">Apps</a>
                    <BsCaretRight />
                </div>
            </div>

            <div onClick={() => window.open("mailto:alwaysrank01@gmail.com")} className='bg-white mb-42 mt-4 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer'>
                <div className='flex justify-between items-center transition-all duration-150 ease-in-out '>
                    <a href="mailto:alwaysrank01@gmail.com">Contact us</a>
                    <BsCaretRight />
                </div>
            </div>
        </div>
    )
}
