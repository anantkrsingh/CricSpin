import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LiveMatches } from './Comps/LiveMatches'
import App from './App'
import { Results } from './Pages/Results'
import { SeriesDetails } from './Pages/SeriesDetails'


export default function MyRoute() {
  return (
  
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/results" element={<Results />} />
        <Route path="/smatch" element={<SeriesDetails />} />
      </Routes>
  
  )
}
