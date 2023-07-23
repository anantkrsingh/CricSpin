import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const AppContext = ({children}) => {
  const [ nav, setNav] = useState("Home")
  return (
    <MyContext.Provider value={{ nav,setNav }}>
        {children}
    </MyContext.Provider>
  )
}
