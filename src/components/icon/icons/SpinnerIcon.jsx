import React from 'react'

export const SpinnerIcon = ({color = "#000"}) => {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="25" cy="10" r="2"/>
			<circle opacity=".3" cx="25" cy="40" r="2"/>
			<circle opacity=".3" cx="32.5" cy="12" r="2"/>
			<circle opacity=".3" cx="17.5" cy="38" r="2"/>
			<circle opacity=".93" cx="17.5" cy="12" r="2"/>
			<circle opacity=".3" cx="32.5" cy="38" r="2"/>
			<circle opacity=".65" cx="10" cy="25" r="2"/>
			<circle opacity=".3" cx="40" cy="25" r="2"/>
			<circle opacity=".86" cx="12" cy="17.5" r="2"/>
			<circle opacity=".3" cx="38" cy="32.5" r="2"/>
			<circle opacity=".44" cx="12" cy="32.5" r="2"/>
			<circle opacity=".3" cx="38" cy="17.5" r="2"/>
		</svg>
	)
}