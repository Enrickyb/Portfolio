/** @jsxImportSource theme-ui */

export default function Menu(props) {

  return (
    <ul>
        
            <li><a href="#sobre-m" sx={{color:'textblue'}}> About Me </a></li>
            <li><a href="#projec" sx={{color:'textblue'}}> Projects </a></li>
            <li><a href="#foot" sx={{color:'textblue'}}> Contacts </a></li>
            {props.children}
    </ul>
  )
}
