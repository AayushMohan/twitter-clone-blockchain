import { Children, createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
   const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) {
    }
   }
   return( 
   <TwitterContext.Provider value={}>{children}</TwitterContext.Provider>
  )
}
