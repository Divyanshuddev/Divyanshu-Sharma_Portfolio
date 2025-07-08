import { Button, Stack } from "@mui/material"
import { motion } from "motion/react"
const styles = {
    button: {
        textTransform: "capitalize",
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "whitesmoke",
        "&:hover": {
            color: "#64FFDA",
            backgroundColor: "#0A192F"
        }
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
}
const menuItems = [
    "About",
    "Experience",
    "Work",
    "Skills",
    "Contact"
];
const Menu = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={3} display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}>
            {
                menuItems.map((value, index) => {
                    return (
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

                                <Button variant="text" href={`#${value}`} key={index} sx={styles.button} disableTouchRipple>
                                    {value}
                                </Button>
                            </motion.button>
                        </motion.div>
                    )
                })
            }
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
                    <Button variant="contained" sx={styles.resumeButton} size="large" href="https://drive.google.com/file/d/1eg28aDIOrdImYW9AqftADqe8gBCan9zQ/view?usp=sharing" target="_blank">Resume</Button>
                </motion.button>
            </motion.div>
        </Stack>
    )
}

export default Menu
