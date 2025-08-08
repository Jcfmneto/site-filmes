import React from 'react'
import Logo from '../header/Logo'

const AuthHeader = () => {
  return (
    <header className="bg-gray-950 shadow-lg flex items-center justify-between px-4 py-2 w-full flex-nowrap relative h-16">
      <Logo />
    </header>
  )
}

export default AuthHeader
