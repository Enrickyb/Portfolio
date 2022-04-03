/** @jsxImportSource theme-ui */
import { useState } from "react"
import Menu from "./Menu"

// const hambOpen = 'open'
const moon = <img id="img-moon" src="./images/moon.png" alt="moon"></img>
const sun = <img id="img-sun" src="./images/sunwhite.svg" alt="sun"></img>
export default function Header(props){
    const [hambOpen, setHambOpen]=useState(false)
    function turnon(){
        if(hambOpen === false){
            setHambOpen(true)
        }else {
            setHambOpen(false)
        }
    }
    return(
        <div className="header" id="head" sx={{color:'textblue'}}>
            <h1>Enricky Biazatti</h1>
            <div id="menuham" className={hambOpen? "open" : ""}>
                <div className="barras"  onClick={turnon}>
                        <div className="barra b1" sx={{backgroundColor:'btnhamb'}}></div>
                        <div className="barra b2" sx={{backgroundColor:'btnhamb'}}></div>
                        <div className="barra b3" sx={{backgroundColor:'btnhamb'}}></div>
                </div>


                <Menu>
                    <button onClick={()=>props.onSetColorMode()}>{props.colorMode === 'light' ? moon : sun}</button>
                </Menu>
                
            </div>
            
        </div>
    )
}