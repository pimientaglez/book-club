import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div>{children}</div>
    </div>
  )
}
