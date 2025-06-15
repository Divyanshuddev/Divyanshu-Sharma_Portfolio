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
                <SplitText word={<Typography component={'p'} className="p" sx={styles.objective}> Motivated and detail-oriented Full Stack Developer with 1.5+ years of professional experience in building performant, scalable, and responsive web applications. Proficient in React.js, TypeScript, Redux Toolkit, and Django REST Framework, with a strong focus on frontend architecture and seamless backend integration. Skilled in developing reusable components, integrating RESTful APIs, and optimizing UI performance with accessibility (WCAG) and responsive design in mind. Adept at collaborating in Agile environments, writing unit tests with React Testing Library and Jest, and delivering clean, maintainable code. Actively seeking a challenging opportunity to contribute to a dynamic development team and build impactful digital experiences.</Typography>} />
            </Stack>
        </div>
    )
}

export default About
