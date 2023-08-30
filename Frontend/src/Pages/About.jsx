import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.png';


import { BsCaretRight } from 'react-icons/bs'
import { MyContext } from '../AppContext';

export const About = () => {
    const { bannerData } = useContext(MyContext)

    const [aboutShown, setAboutShown] = useState(false)
    const [privacyShown, setprivacyShown] = useState(false)
    return (
        <div className='w-full top-8 font-[Roboto] ov  relative'>
            <div className=' fixed overflow-hidden top-0 w-[350px] md:w-full margin-0 bg z-10 flex self-center text-white justify-center items-center'>
                <div className='p-4 euclidMedium' >Cricspin</div>
                <img src={Logo} className='w-[60px]  ' alt="" />
                <div className='p-4 euclidMedium'>
                    LiveLine
                </div>
            </div>
            <div className='ml-4 mt-10'>


                <div className='bg-white  rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer' >
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

                <div className='bg-white mt-4 rounded-xl p-2 transition-all duration-300 ease-in-out cursor-pointer' >
                    <div onClick={() => setprivacyShown(!privacyShown)} className='flex justify-between items-center transition-all duration-150 ease-in-out '>
                        <p>Privacy Policy</p>
                        <BsCaretRight />
                    </div>
                    <div className={privacyShown ? '' : "hidden"}>
                        Thank you for using CricSpin, the cricket live score app. We value your privacy and are committed to protecting your personal information. This privacy policy explains how we handle your information when you use our app.

                        <br />

                        1. Information we do not collect


                        <br />
                        We do not collect any personal information from you when you use our app, such as your name, email address, or location. We also do not collect any usage information, such as which features you use or how long you use the app.

                        <br /><br />

                        2. How we use your information



                        Since we do not collect any information from you, we do not use your information for any purposes.

                        <br /><br />

                        3. How we share your information



                        Since we do not collect any information from you, we do not share your information with anyone.

                        <br /><br />


                        4. Security



                        Even though we do not collect any information from you, we still take reasonable measures to protect your privacy and the security of our app.

                        <br /><br />


                        5. Children's privacy



                        Our app is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13.

                        <br /><br />


                        6. Changes to this policy



                        We may update this privacy policy from time to time. If we make significant changes, we will notify you by email or by posting a notice in our app.


                        <br /><br />

                        7. Contact us



                        If you have any questions or concerns about our privacy policy, please contact us at alien01plays@gmail.com
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
                <div className='mt-4 mb-4'>

                {
                    bannerData && <a target='_blank' className='mt-4' href={bannerData[1].url}>

                        <img src={bannerData[1].image} />
                    </a>
                }
                </div>
            </div>
        </div>
    )
}
