import React, { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className = { darkTheme ? 'dark' : '' }>
      <div className = "bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
        <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme}  />
        <Home />
      </div>
    </div>
  )
}
 
export default App