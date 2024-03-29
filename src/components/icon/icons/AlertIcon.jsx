import React from 'react'

export const AlertIcon = ({color = "#000", fill = "none"}) => {
	return (
		<svg 
		  width="100%" 
		  height="100%"
		  viewBox="0 0 24 24" 
		  fill={fill} 
		  stroke={color}
		  strokeWidth="2" 
		  strokeLinecap="round" 
		  strokeLinejoin="round" 
		  >
		 <circle 
		   cx="12" cy="12" r="10">
    	 </circle>
    	 <line 
    	   x1="12" y1="8" x2="12" y2="12">
    	 </line>
    	 <line 
    	   x1="12" y1="16" x2="12.01" y2="16">
    	 </line>
    	 </svg>
	)
}