import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './Comps/Nav'
import { Dash } from './Pages/Dash'
import { Helmet } from 'react-helmet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow"></meta>
        <meta charset="utf-8"></meta>
        <meta name='description' content="Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings" />
        <meta name='keywords' content='Indian Premier Leage, ipl 2022, ipl auction 2022, ipl 2021 schedule, Virat kohli, sreesanth, world cup, cricket, fast live update, cricket live score' />
        <meta property="og:url" content="https://cricspin.live"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content="./assets/logo.png"></meta>
        <meta property="og:site_name" content="CricSpin"></meta>
        <title>CricSpin</title>
        <meta property='og:description' content="Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings" />
        <meta name="twitter:title" content="https://cricspin.live" />
        <meta name="twitter:description" content="Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings" />
        <meta name="twitter:image" content="./assets/logo.png" />
        <meta property="og:title" content="CricSpin"></meta>
      </Helmet>

      <div className='max-w-[375px] flex left-[50%]  m-auto overflow-hidden '>
        <Dash />
        <Nav />
      </div>
    </>
  )
}

export default App
