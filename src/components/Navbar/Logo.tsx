import { Box, Stack } from "@mui/material"
import logo from '../../assets/Logo/logo.png';
import * as motion from "motion/react-client"

const styles = {
  root: {
  },
  text: {
    fontFamily: "Fira Code,Fira Mono,Roboto Mono",
    color: "#64FFDA",
    fontWeight: "bolder",
    fontSize: 30
  }
}
const Logo = () => {
  return (
    <Stack sx={styles.root}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <Box component={'img'} src={logo} sx={{ width: 200, height: 100, objectFit: "cover" }} />
        </motion.div>
      </motion.div>
    </Stack>
  )
}

export default Logo
