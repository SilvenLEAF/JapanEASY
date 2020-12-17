import React from 'react'
import AllUserContextProvider from './subContexts/AllUserContext'
import URLContextProvider from './subContexts/URLContext'



interface propsInterface {
  children: React.ReactNode
}



function RootContext(props: propsInterface) {
  return (
    <>
      
      <AllUserContextProvider>
        <URLContextProvider>
          
          { props.children }

        </URLContextProvider>
      </AllUserContextProvider>
    
    </>
  )
}

export default RootContext
