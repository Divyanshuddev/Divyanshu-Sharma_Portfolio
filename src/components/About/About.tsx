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
                <SplitText word={<Typography component={'p'} className="p" sx={styles.objective}>As a highly motivated Full Stack Developer with over 1.5 years of hands-on experience, I specialize in building robust, scalable web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. My technical proficiency spans across frontend technologies like React.js, Redux Toolkit, TypeScript, Tailwind CSS, and Material-UI, as well as backend development with Express.js, Django REST Framework, and secure API integrations using JWT and OAuth. At Career Margdarshan, I led full-stack development of a career guidance platform, significantly enhancing performance, accessibility (WCAG compliance), and user engagement. I’ve implemented reusable components, integrated RESTful APIs, and conducted unit testing using Jest and React Testing Library to ensure code reliability. My experience also includes working with Agile teams, Git-based version control, CI/CD pipelines, and cloud platforms like Vercel and Render. I prioritize clean, maintainable code, performance optimization, and cross-functional collaboration. Additionally, I maintain a portfolio of real-world projects ranging from HRMS systems to e-commerce platforms and blog apps, reflecting my adaptability and strong problem-solving abilities. I thrive in fast-paced environments, embrace continuous learning, and bring a proactive mindset to every project. I’m seeking impactful opportunities where I can contribute to product innovation and growth.</Typography>} />
            </Stack>
        </div>
    )
}

export default About
