import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LiveMatches } from './Comps/LiveMatches'
import App from './App'
import { Results } from './Pages/Results'
import { SeriesDetails } from './Pages/SeriesDetails'
import { Upcoming } from './Pages/Upcoming'
import { MatchResult } from './Pages/MatchResult'


export default function MyRoute() {
  return (
  
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/results" element={<Results />} />
        <Route path="/smatch" element={<SeriesDetails />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/matchresult" element={<MatchResult />} />
      </Routes>
  
  )
}
