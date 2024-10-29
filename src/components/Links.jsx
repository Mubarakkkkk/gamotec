import React from 'react'

import { NavLink } from 'react-router-dom'

const linkName = [
    { url: 'home', text: 'Home'},
    { url: '/home', text: 'Services'},
    { url: '/home', text: 'Work'},
    { url: '/home', text: 'Client'},
    
]

export const Links = () => {

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        { 
            linkName.map( ( {url, text} ) => (
                <NavLink 
                    to = {url} 
                    className="m-2"
                    // ClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
                    key = {text} 
                >
                {text}
                </NavLink>
            ))
        }
    </div>
  )
}
