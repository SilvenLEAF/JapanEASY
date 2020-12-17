import React, { createContext, useState } from 'react'
import URLDataInterface from '../../interfaces/URLDataInterface';



interface propsInterface {
  children: React.ReactNode
}



interface urlContextInterface {
  allUrls: URLDataInterface[] | undefined,
  setAllUrls: Function
}




export const URLContext = createContext({} as urlContextInterface);


function URLContextProvider(props: propsInterface) {
  const [allUrls, setAllUrls] = useState([]);
  return (
    <URLContext.Provider value={{ allUrls, setAllUrls }} >
      { props.children }
    </URLContext.Provider>
  )
}

export default URLContextProvider











