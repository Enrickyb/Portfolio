/** @jsxImportSource theme-ui */
import Header from './Components/Header/Header';
import './styles/style.css';
import { useColorMode } from 'theme-ui';
import Main from './Components/MainSection/Main';
import AboutMe from './Components/AboutMeSection/AboutMe';
import Projects from './Components/ProjectsSection/Projects';
import Footer from './Components/Footer/Footer';


function Portfolio() {
  const [colorMode, setColorMode]= useColorMode();

  return (

    <div className="Portfolio" sx={{backgroundColor: 'bg'}}>
      
    <Header></Header>
    <button onClick={()=>setColorMode(colorMode === 'light' ? 'dark': 'light')}>darkmode</button>
    <Main></Main>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Footer></Footer>
    
    </div>
  );
}

export default Portfolio;
