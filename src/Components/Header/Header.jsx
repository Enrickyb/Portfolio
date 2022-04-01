/** @jsxImportSource theme-ui */
import Menu from "./Menu"


export default function Header(props){
    const moon = <img id="img-moon" src="./images/moon.png" alt="moon"></img>
    const sun = <img id="img-sun" src="./images/sunwhite.svg" alt="sun"></img>
    return(
        <div className="header" sx={{color:'textblue'}}>
            <h1>Enricky Biazatti</h1>
            <Menu hrefs={['.aboutMe', '.Contacts', '.Projects']} links={['About', 'Contacts', 'Projects',]}>
                <button onClick={()=>props.onSetColorMode()}>{props.colorMode === 'light' ? moon : sun}</button>
            </Menu>
            
        </div>
    )
}