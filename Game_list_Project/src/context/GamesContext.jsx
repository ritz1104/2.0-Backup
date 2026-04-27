import React, { createContext } from 'react'

export const GamesDataContext =  createContext()
const GamesContext = ({children}) => {

   

  return (
    <div>{children}</div>
  )
}

export default GamesContext