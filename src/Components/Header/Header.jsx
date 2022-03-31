/** @jsxImportSource theme-ui */
import Menu from "./Menu"


export default function Header(props){
    return(
        <div className="header" sx={{color:'textblue'}}>
            <h1>Enricky Biazatti</h1>
            <Menu hrefs={['.aboutMe', '.Contacts', '.Projects']} links={['About', 'Contacts', 'Projects']}></Menu>
            
        </div>
    )
}