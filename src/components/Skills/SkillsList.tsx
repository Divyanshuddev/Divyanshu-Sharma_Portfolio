import { Grid, Stack, Typography } from "@mui/material";
import { motion } from 'motion/react'
const SkillsData = [
    {
        title: "Programming Languages",
        skills: [
            "C++",
            "Python",
            "HTML5",
            "CSS3",
            "Javascript",
            "Typescript"
        ]
    },
    {
        title: "Frontend Technologies",
        skills: [
            "React JS",
            "React Hooks",
            "React Router",
            "Redux Toolkit",
            "React Hook Form",
            "Lazy Loading",
            "Code Splitting",
            "Responsive Grid Layout",
        ]
    },
    {
        title: "Styling Libraries",
        skills: [
            "Material-UI",
            "Tailwind CSS",
        ]
    },
    {
        title: "Backend Technologies",
        skills: [
            "Django",
            "Django REST Framework",
            "Middleware",
            "Authentication & Authorization",
            "PostgreSQL",
            "MySQL",
            "SQLite"
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            "Git",
            "GitHub",
            "Postman",
            "CI/CD Pipelines",
            "Vercel",
            "Render"
        ]
    },
    {
        title: "Soft Skills",
        skills: [
            "Problem Solving",
            "Agile Development",
            "Team Collaboration",
            "Communication",
            "Adaptability"
        ]
    }
];
const styles = {
    root: {
        backgroundColor: "#112240",
        borderRadius: 1,
        padding: 4,
    },
    title: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "whitesmoke",
        fontSize: 20
    },
    skillsText: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "#64FFDA"
    }
}
const SkillsList = () => {
    return (
        <Grid container spacing={3}>
            {
                SkillsData.map((value, index) => {
                    return (
                        <Grid key={index} size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                            <motion.div
                                whileHover={{ y: -10 }}
                            >
                                <Stack sx={styles.root} spacing={3} height={400}>
                                    <Typography sx={styles.title}>{value.title}</Typography>
                                    <Stack spacing={2}>
                                        {
                                            value.skills.map((value, index) => {
                                                return (
                                                    <Typography component={'li'} typeof="bullet" key={index} sx={styles.skillsText}>{value}</Typography>
                                                )
                                            })
                                        }
                                    </Stack>
                                </Stack>
                            </motion.div>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}

export default SkillsList
