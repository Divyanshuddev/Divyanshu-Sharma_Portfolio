import { Stack, Typography } from "@mui/material"
import SplitText from "../Animation/SplitText"

const styles = {
    myName: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "#64FFDA",
    },
    name: {
        fontFamily: "Segoe UI Black",
        fontWeight: "800",
        color: "white",
        fontSize: {
            lg: 70,
            md: 70,
            sm: 30,
            xs: 30
        }

    },
    web: {
        fontFamily: "Segoe UI Black",
        fontWeight: "800",
        color: "white",
        fontSize: {
            lg: 70,
            md: 70,
            sm: 30,
            xs: 30
        },
        opacity: 0.7
    },
    objective: {
        width: {
            lg: "80%",
            md: "80%",
            sm: "100%",
            xs: "100%"
        },
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "#8892B0",
    }
}
const About = () => {
    return (
        <div id="About">
            <Stack >
                <SplitText word={<Typography component={'p'} className="p" sx={styles.myName}>Hi, my name is</Typography>} />
                <SplitText word={<Typography component={'p'} className="p" sx={styles.name}>Divyanshu Sharma</Typography>} />
                <SplitText word={<Typography component={'p'} className="p" sx={styles.web}>I build things for the web.</Typography>} />
                <SplitText word={<Typography component={'p'} className="p" sx={styles.objective}> Motivated and detail-oriented Frontend Developer with 2+ years of hands-on experience in building scalable,responsive web applications using React.js, TypeScript, Redux Toolkit, and Django REST Framework. Adept at integrating RESTful APIs, optimizing UI performance, and crafting reusable components for high-impact user experiences. Seeking a challenging opportunity to contribute to a fast-paced development team where I can apply my technical expertise, problem-solving abilities, and passion for clean, maintainable code</Typography>} />
            </Stack>
        </div>
    )
}

export default About
