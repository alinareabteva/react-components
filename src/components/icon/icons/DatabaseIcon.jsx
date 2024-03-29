import React from 'react'

export const DatabaseIcon = ({color = "#000"}) => {
	return (
        <svg width="100%" height="100%" viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
               <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
               <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
               <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
	)
}