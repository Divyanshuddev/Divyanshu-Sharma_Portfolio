import { Box, Button, Stack } from "@mui/material"
import Logo from "./Logo"
import Menu from "./Menu"
import { motion } from "motion/react"
import about from '../../assets/NavIcons/About.svg'
import experience from '../../assets/NavIcons/Experience.svg';
import work from '../../assets/NavIcons/Work.svg';
import skills from '../../assets/NavIcons/Skills.svg';
import contact from '../../assets/NavIcons/Contact.svg';
const styles = {
  root: {
    padding: 3,
  },
  bottomMenu: {
    height: 70,
    backgroundColor: "#040b15",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  resumeButton: {
    border: "2px solid #64FFDA",
    backgroundColor: "#0A192F",
    borderRadius: 3,
    fontFamily: "Fira Code,Fira Mono,Roboto Mono",
    textTransform: "capitalize",
    fontWeight: "bolder",
    color: "#64FFDA",
  }
};

const bottomNav = [
  {
    icon: about,
    title: "About"
  },
  {
    icon: experience,
    title: "Experience"
  },
  {
    icon: work,
    title: "Work"
  },
  {
    icon: skills,
    title: "Skills"
  },
  {
    icon: contact,
    title: "Contact"
  },
]
const Navbar = () => {
  return (
    <Stack>
      <Stack sx={styles.root} direction={'row'} alignItems={'center'} justifyContent={'space-between'} position={'static'}>
        <Stack direction={'row'} alignItems={'center'} >
          <Logo />
          <Stack display={{ lg: "none", md: "none", sm: "flex", xs: "flex" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ scale: 1.1 }}
                style={{ backgroundColor: "#0A192F", border: "none" }}
              >
                <Button variant="contained" sx={styles.resumeButton} size="large" href="https://drive.google.com/file/d/1Y9FtKSnZXjE2LCXqssW-vjGmXbXw92A1/view?usp=sharing" target="_blank">Resume</Button>
              </motion.button>
            </motion.div>
          </Stack>
        </Stack>
        <Menu />
      </Stack>
      <Stack position={'fixed'} sx={styles.bottomMenu} display={{ lg: "none", md: "none", sm: "flex", xs: "flex" }} zIndex={100} bottom={-1} width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
        {
          bottomNav.map((value, index) => {
            return (
              <Stack key={index} component={'a'} href={`#${value.title}`}>
                <Box component={'img'} src={value.icon} sx={{ width: 35, height: 35, objectFit: "cover" }} />
              </Stack>
            )
          })
        }
      </Stack>
    </Stack>
  )
}

export default Navbar
