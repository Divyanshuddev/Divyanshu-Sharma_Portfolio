import { Box, Chip, IconButton, Stack, Typography } from "@mui/material"
import Project1 from '../../assets/Project/Project1.png';
import Project2 from '../../assets/Project/Project2.png';
import Project3 from '../../assets/Project/Project3.png';
import Project4 from '../../assets/Project/Project4.png';
import Project5 from '../../assets/Project/Project5.png';
import Project6 from '../../assets/Project/Project6.png';
import Project7 from '../../assets/Project/Project7.png';
import Project8 from '../../assets/Project/Project8.png';
import Project9 from '../../assets/Project/Project9.png';
import Project10 from '../../assets/Project/Project10.png';
import { motion } from 'motion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
const ProjectData = [
    {
        project_id: 1,
        projectImage: Project1,
        projectName: "E-commerce Website",
        projectDetails: "A full-stack e-commerce web application with seamless product browsing, cart functionality, and a responsive Material UI design. Built using React.js, Redux Toolkit, and Django REST Framework for smooth frontend-backend integration.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Redux Toolkit",
            "Responsive UI",
            "Material UI",
            "Python",
            "Django",
            "REST Framework"
        ],
        liveDemoLink: "https://e-commerce-app-beta-nine.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/e-commerce-app"
    },
    {
        project_id: 2,
        projectImage: Project2,
        projectName: "Airbnb Frontend Clone",
        projectDetails: "A modern, fully responsive Airbnb frontend clone built using React.js and Material-UI for a sleek and polished user interface. It features functional components, hooks, and adaptive design inspired by the original Airbnb layout.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://airbnb-frontend-clone-3fw1.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/airbnb-frontend-clone"
    },
    {
        project_id: 3,
        projectImage: Project3,
        projectName: "Hangman Game App",
        projectDetails: "A fun and interactive Hangman Game app built with React.js, featuring multiple word categories, real-time guessing, and smooth animations. Designed with a modern, mobile-responsive UI and deployed on Vercel for seamless access across devices.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://hangman-game-app-lac.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/hangman-game-app"
    },
    {
        project_id: 4,
        projectImage: Project4,
        projectName: "Quiz App",
        projectDetails: "A dynamic Quiz App built with React.js and TypeScript that fetches questions from the Open Trivia Database API for an interactive quiz experience. It features multiple-choice questions, real-time feedback, score tracking, and a clean, responsive UI styled with Material UI.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://quiz-app-odsu.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/quiz--app"
    },
    {
        project_id: 5,
        projectImage: Project5,
        projectName: "Personal Blog App",
        projectDetails: "A sleek and responsive Personal Blog Website built with React, TypeScript, Vite, and Material UI to share articles, insights, and resources. Designed for speed and readability, it offers a smooth user experience across all devices.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://personal-blog-cljv.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/Personal_Blog"
    },
    {
        project_id: 6,
        projectImage: Project6,
        projectName: "Agency Landing Page ",
        projectDetails: "A modern and elegant Agency Landing Page built with React.js and Material-UI, designed to showcase services, portfolio, and testimonials with smooth animations. Fully responsive and mobile-friendly, it offers a sleek UI and seamless user experience.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://agency-landing-page-ten.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/agency-landing-page/tree/main"
    },
    {
        project_id: 7,
        projectImage: Project7,
        projectName: "Personal Finance App",
        projectDetails: "A responsive Personal Finance Blog built with React.js, TypeScript, and Material UI, focused on sharing practical tips for budgeting, saving, and investing. Designed with clean UI, smooth navigation using React Router, and optimized for performance across devices.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://personal-finance-app-ht9t.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/personal-finance-app"
    },
    {
        project_id: 8,
        projectImage: Project8,
        projectName: "Dictionary App",
        projectDetails: "A sleek and responsive Dictionary App built with React.js and Material UI, enabling real-time word searches through a public API. Features include light/dark mode, error handling, and full mobile and desktop optimization for a smooth user experience.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://dictionary-app-six-nu.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/dictionary-app"
    },
    {
        project_id: 9,
        projectImage: Project9,
        projectName: "Gravity",
        projectDetails: "Gravity is a sleek and responsive task management app built with React.js, TypeScript, and Material UI to help users efficiently manage tasks in real-time. ",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://gravity-app-psi.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/gravity-app"
    },
    {
        project_id: 10,
        projectImage: Project10,
        projectName: "Post Pilot",
        projectDetails: "Post Pilot is a sleek and responsive post management web application built with React.js, TypeScript, and Material UI. Designed to simplify the process of creating, editing, deleting, and scheduling social media posts, it offers a clean and intuitive interface that adapts seamlessly across devices. With support for theme customization, real-time updates, and a modular code structure, Post Pilot delivers a smooth and efficient user experience for content creators and marketers alike.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Responsive UI",
        ],
        liveDemoLink: "https://post-pilot-app.vercel.app/",
        GithubLink: "https://github.com/Divyanshuddev/post_pilot_app"
    }
]
const styles = {
    projectImage: {
        width: {
            lg: 700,
            md: 700,
            sm: 300,
            xs: 300
        },
        height: {
            lg: 400,
            md: 400,
            sm: 200,
            xs: 200
        },
        objectFit: "contain",

    },
    projectImageCover: {
        width: 702,
        height: 402,
        backgroundColor: "#64FFDA",
        position: "absolute",
        top: 0,
        opacity: 0.8
    },
    featuredProject: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "#64FFDA",
        fontSize: 12
    },
    projectName: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "whitesmoke",
        fontSize: 25,
    },
    projectDetails: {
        backgroundColor: "#112240",
        padding: 3,
        width: {
            lg: "110%",
            md: "110%",
            sm: "90%",
            xs: "90%"

        },
        borderRadius: 1,
        boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        alignText: "right"
    },
    projectDetailsText: {
        textAlign: "justify",
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "whitesmoke",
    },
    skills: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        color: "whitesmoke",
        fontSize: 12
    },
    skillsStack: {
        borderRadius: 1,
        border: "1px solid #64FFDA",
        padding: 1,
    }
};


const ProjectList = () => {
    return (
        <Stack spacing={20}>
            {
                ProjectData.map((value, index) => {
                    return (
                        <Stack direction={{ lg: value.project_id % 2 == 1 ? 'row' : 'row-reverse', md: value.project_id % 2 == 1 ? 'row' : 'row-reverse', sm: "column", xs: "column" }} alignItems={'center'} key={index}>
                            <Stack position={'relative'}  >
                                <Box component={'img'} src={value.projectImage} sx={styles.projectImage} />
                                <Stack display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}>
                                    <motion.div
                                        whileHover={{
                                            scale: 0.3,
                                            backgroundColor: "transparent",
                                            transition: {
                                                delay: 3,
                                                duration: 2,
                                            },
                                        }}
                                        style={{
                                            width: 702,
                                            height: 402,
                                            backgroundColor: "#0d2140",
                                            position: "absolute",
                                            top: 0,
                                            opacity: 0.8
                                        }}

                                    >

                                    </motion.div>
                                </Stack>
                            </Stack>
                            <Stack alignItems={value.project_id % 2 == 1 ? 'flex-end' : 'flex-start'} zIndex={10} spacing={3} width={{ lg: "35%", md: "35%", sm: "100%", xs: "100%" }} >
                                <Stack alignItems={value.project_id % 2 == 1 ? 'flex-end' : 'flex-start'} spacing={1}>
                                    <Typography sx={styles.featuredProject}>Featured Project</Typography>
                                    <Typography sx={styles.projectName}>{value.projectName}</Typography>
                                </Stack>
                                <Stack sx={styles.projectDetails} alignSelf={{lg:"",md:"",sm:"center",xs:"center"}}>
                                    <Typography sx={styles.projectDetailsText}>{value.projectDetails}</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={value.project_id % 2 == 1 ? 'flex-end' : 'flex-start'} flexWrap={'wrap'} justifyContent={value.project_id % 2 == 1 ? 'flex-end' : 'flex-start'} columnGap={1} rowGap={1}>
                                    {
                                        value.techStack.map((value, index) => {
                                            return (
                                                <Chip key={index} size="small" label={value} sx={{ backgroundColor: "#64FFDA", borderColor: "#64FFDA", color: "black", fontFamily: "Fira Code,Fira Mono,Roboto Mono", fontWeight: "bolder", }} />
                                            )
                                        })
                                    }

                                </Stack>
                                <Stack direction={'row'} alignItems={value.project_id % 2 == 1 ? 'flex-end' : 'flex-start'} justifyContent={value.project_id % 2 == 1 ? 'flex-end' : 'flex-start'}>
                                    <IconButton href={value.GithubLink} target="_blank">
                                        <GitHubIcon style={{ color: "white" }} />
                                    </IconButton>
                                    <IconButton href={value.liveDemoLink} target="_blank">
                                        <OpenInNewRoundedIcon style={{ color: "white" }} />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Stack>
                    )
                })
            }

        </Stack>
    )
}

export default ProjectList
