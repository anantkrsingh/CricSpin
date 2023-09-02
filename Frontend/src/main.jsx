import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContext } from './AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import MyRoute from './MyRoute.jsx'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <title >CricSpin</title>
        <meta name='description' content='content="Get Live Cricket Scores, Scorecard, Commentary, Match Info and Schedules of All International and Domestic Matches, Serieswise Stats, Records, Analysis and Facts, Trending News and Tweets, Recent ICC Player and Team Rankings' />
        <meta name='keywords' content='Indian Premier Leage, ipl 2022, ipl auction 2022, ipl 2021 schedule, Virat kohli, sreesanth, world cup, cricket, fast live update, cricket live score'/>
      </Helmet>
      <AppContext>
        {/* <App /> */}
        <MyRoute />
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>,
)
