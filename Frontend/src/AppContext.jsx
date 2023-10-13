import React, { createContext, useEffect, useState } from 'react'
import { db } from './Firebase'
import { onValue, ref } from "firebase/database";
export const MyContext = createContext()

export const AppContext = ({ children }) => {
  const [nav, setNav] = useState("Home")
  const [bannerData, setBannerData] = useState()


  useEffect(() => {
    const query = ref(db, "data");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        console.log(data);
        setBannerData(data)
      }
    });
  }, []);
  return (
    <MyContext.Provider value={{ nav, setNav, bannerData }}>
      {children}
    </MyContext.Provider>
  )
}
