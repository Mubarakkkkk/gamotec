import React from 'react'

import { Links } from './Links'

export const Navbar = ( {darkTheme, setDarkTheme} ) => {
  return (
    <div 
        className ="p-5 pb-0 flex flex-wrap justify-center items-center 
        border-b dark:border-gray-700
        border-gray-700"
    >
        <div 
            className="flex justify-between items-center space-x-5 w-screen"
        >
            <div>
                <p 
                    className ="text-2xl bg-blue-500 font-bold 
                    text-white py-1 px-2 rounded dark:bg-gray-500
                    dark:text-gray-900"
                >
                    GamotecLTD
                </p>
            </div>
            <button 
                type = "button" 
                onClick={ () => setDarkTheme(!darkTheme) }
                className="text-xl dark:bg-gray-50 
                dark:text-gray-900 bg-white border 
                rounded-full px-2 py-1 hover:shadow-lg"
                >
                { darkTheme ? 'Light 💡' : 'Dark 🌙' }
            </button>
        </div>
        {/* <Links /> */}
    </div>
  )
}

