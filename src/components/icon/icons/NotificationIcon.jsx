import React from 'react'

export const NotificationIcon = ({color = "none"}) => {
	return (
		<svg 
		  width="100%" 
		  height="100%" 
		  viewBox="0 0 24 24" 
		  >

        <path 
          fill={color} 
          d="M0 0h24v24H0z"/>
        <path 
        fill="#fff" 
          d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"/>

</svg>
	)
}