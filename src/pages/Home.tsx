import { Stack } from "@mui/material"
import Navbar from "../components/Navbar/Navbar"
import About from "../components/About/About"
import AboutMe from "../components/About/AboutMe"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
const styles={
  root:{
    paddingTop:10,
    paddingRight:{
      lg:20,
      md:20,
      sm:5,
      xs:5
    },
    paddingLeft:{
      lg:20,
      md:20,
      sm:5,
      xs:5
    },
    paddingBottom:20,
    boxSizing:"border-box"
  }
}
const Home = () => {
  return (
    <div  style={{height:"100vh",maxHeight:"auto"}}>
      <Navbar />
      <Stack justifyContent={'flex-start'}  alignItems={'flex-start'} width={'100%'} sx={styles.root}  spacing={25}>
        <About  />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Stack>
      
    </div>
  )
}

export default Home
