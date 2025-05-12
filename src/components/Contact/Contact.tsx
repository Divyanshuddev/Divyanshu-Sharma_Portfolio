import { IconButton, Stack, Tooltip, Typography } from "@mui/material"
import Header from "../Common/Header"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import { motion } from 'motion/react'
const styles = {
    text: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        fontSize: {
            lg: 24,
            md: 24,
            sm: 18,
            xs: 18
        },
        color: "whitesmoke"
    },
    icon: {
        color: "#64FFDA",
        width: 70,
        height: 70
    }
}
const Contact = () => {
    return (
        <div id="Contact">
            <Stack justifyContent={'center'} spacing={5}>
                <Header title="Get in Touch" />
                <Stack width={'100%'} alignSelf={'center'} alignItems={'center'}>
                    <Typography sx={styles.text}>Although <b style={{ color: "#64FFDA", }}>I’m  currently looking for any new opportunities</b>, my inbox is always open.</Typography>
                    <Typography sx={styles.text}>Whether you have a question or just want to say hi,</Typography>
                    <Typography sx={styles.text}>I’ll try my best to get back to you!</Typography>
                </Stack>
                <Stack direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} alignItems={'center'} alignSelf={'center'} spacing={8}>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Tooltip title="https://www.linkedin.com/in/divyanshu-sharma-a977011b4/" slotProps={{
                            tooltip: {
                                sx: {
                                    backgroundColor: "#112240",
                                    color: '#64FFDA',
                                    border: "1px solid #64FFDA",
                                    fontSize: 11,
                                    padding: 2
                                },
                            },
                        }} >
                            <IconButton href="https://www.linkedin.com/in/divyanshu-sharma-a977011b4/" target="_blank">
                                <LinkedInIcon sx={styles.icon} />
                            </IconButton>
                        </Tooltip>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Tooltip title="https://github.com/Divyanshuddev" slotProps={{
                            tooltip: {
                                sx: {
                                    backgroundColor: "#112240",
                                    color: '#64FFDA',
                                    border: "1px solid #64FFDA",
                                    fontSize: 11,
                                    padding: 2
                                },
                            },
                        }} >
                            <IconButton href="https://github.com/Divyanshuddev" target="_blank">
                                <GitHubIcon sx={styles.icon} />
                            </IconButton>
                        </Tooltip>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Tooltip title="divyanshu311098@gmail.com" slotProps={{
                            tooltip: {
                                sx: {
                                    backgroundColor: "#112240",
                                    color: '#64FFDA',
                                    border: "1px solid #64FFDA",
                                    fontSize: 11,
                                    padding: 2
                                },
                            },
                        }} >
                            <IconButton href="mailto:divyanshu311098@gmail.com" target="_blank">
                                <MailOutlineIcon sx={styles.icon} />
                            </IconButton>
                        </Tooltip>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Tooltip title="8303006600" slotProps={{
                            tooltip: {
                                sx: {
                                    backgroundColor: "#112240",
                                    color: '#64FFDA',
                                    border: "1px solid #64FFDA",
                                    fontSize: 11,
                                    padding: 2
                                },
                            },
                        }} >
                            <IconButton href="https://wa.me/8303006600" target="_blank">
                                <WhatsAppIcon sx={styles.icon} />
                            </IconButton>
                        </Tooltip>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Tooltip title="+91 8303006600" slotProps={{
                            tooltip: {
                                sx: {
                                    backgroundColor: "#112240",
                                    color: '#64FFDA',
                                    border: "1px solid #64FFDA",
                                    fontSize: 11,
                                    padding: 2
                                },
                            },
                        }} >
                            <IconButton>
                                <CallIcon sx={styles.icon} />
                            </IconButton>
                        </Tooltip>
                    </motion.div>
                </Stack>
            </Stack>
        </div>
    )
}

export default Contact
