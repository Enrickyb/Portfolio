/** @jsxImportSource theme-ui */
import Menu from "./Menu"
import { Hidden } from "@mui/material"
import { IconButton } from "@mui/material"
import { MenuIcon } from "theme-ui"

export default function Header(props){
    const moon = <img id="img-moon" src="./images/moon.png" alt="moon"></img>
    const sun = <img id="img-sun" src="./images/sunwhite.svg" alt="sun"></img>
    return(
        <div className="header" sx={{color:'textblue'}}>
            <h1>Enricky Biazatti</h1>
            
                <Menu hrefs={['.aboutMe', '.Contacts', '.Projects']} links={['About Me', 'Contacts', 'Projects',]}>
                    <button onClick={()=>props.onSetColorMode()}>{props.colorMode === 'light' ? moon : sun}</button>
                </Menu>
                
                
            </div>
            
        
    )
}