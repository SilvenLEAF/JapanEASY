import React, { createContext, useState } from 'react'


export const URLContext = createContext();


function URLContextProvider({ children }) {
  const [allUrls, setAllUrls] = useState([]);
  return (
    <URLContext.Provider value={{ allUrls, setAllUrls }} >
      { children }
    </URLContext.Provider>
  )
}

export default URLContextProvider
