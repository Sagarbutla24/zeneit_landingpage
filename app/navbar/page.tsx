import React from 'react'
import Logo from './logo'
import {NavigationMenuBar}from './navigation_bar'
import ActionButtons from './actionButtons'
const Navbar = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 flex justify-between text-lg sm:text-2xl  w-full container mx-auto max-w-full h-20">
      
      <Logo/>
      <NavigationMenuBar/> 
      <ActionButtons/>

    </div>
  )
}

export default Navbar
