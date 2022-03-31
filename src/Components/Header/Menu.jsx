/** @jsxImportSource theme-ui */
import React from 'react'

export default function Menu(props) {
  return (
    <ul>
        {props.links.map((link, hrefs) =>
            <li key={link}><a href={hrefs} sx={{color:'textblue'}}>{link}</a></li>)}       
    </ul>
  )
}
