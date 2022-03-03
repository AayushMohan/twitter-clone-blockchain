import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')

  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })

      if (addressArray.length > 0) {
        // Connected
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')

    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      setAppStatus('error')
    }
  }
  /**
   * Creates an account in Sanity DB if the user does not already have one
   * @param {String} userAddress Wallet address of the currently logged in user
   */

  const createUserAccount = async (userWalletAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {}
      // create userDoc
      // upload
    } catch (error) {
      router.push('/')
      setAppStatus('error')
    }
  }

  return (
    <TwitterContext.Provider
      value={{ appStatus, currentAccount, connectToWallet }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
