import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-blue-500 px-2 md:px-10 py-2 flex flex-wrap gap-2 justify-between">
       <div>
            <p 
                className ="text-2xl bg-blue-500 font-bold 
                text-white rounded dark:bg-gray-500
                dark:text-gray-900"
            >
                GamotecLTD
            </p>
        </div>
        <div className="pb-2 text-white">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <p>
                Address: 27, Sabiu Ajose, Off Bode Thomas Str, surulere lagos
            </p>
            <p>Tel: 08033031711, 07055522744 </p>
            <p>Email: zubairomolayo@gmail.com</p>
        </div>
    </div>
  )
}
