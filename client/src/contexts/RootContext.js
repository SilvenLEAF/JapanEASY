import React from 'react'
import AllUserContextProvider from './subContexts/AllUserContext'
import URLContextProvider from './subContexts/URLContext'

function RootContext({ children }) {
  return (
    <>
      <AllUserContextProvider>
        <URLContextProvider>
          
          
          
          { children }


          
        </URLContextProvider>
      </AllUserContextProvider>
    
    </>
  )
}

export default RootContext
