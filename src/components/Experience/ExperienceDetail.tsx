import { Stack, Typography } from "@mui/material";
const styles = {
  title: {
    fontFamily: "Fira Code,Fira Mono,Roboto Mono",
    fontWeight: "bolder",
    color: "#64FFDA",
    fontSize: 26,
  },
  date: {
    fontFamily: "Fira Code,Fira Mono,Roboto Mono",
    fontWeight: "bolder",
    color: "whitesmoke",
  },
  text: {
    fontFamily: "Fira Code,Fira Mono,Roboto Mono",
    fontWeight: "bolder",
    color: "whitesmoke",
  },
};
const ExperienceDetail = () => {
  return (
    <Stack spacing={10}>
      <Stack spacing={4}>
        <Stack>
          <Typography sx={styles.title}>
            Software Engineer Intern at <b>Nashtech Global</b>
          </Typography>
          <Typography sx={styles.date}>November 2023 - July 2024</Typography>
        </Stack>
        <Stack spacing={3}>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Developed{" "}
            <b style={{ color: "#64FFDA" }}>responsive web applications</b>{" "}
            using <b style={{ color: "#64FFDA" }}>React.js</b>, improving
            overall performance and user experience by{" "}
            <b style={{ color: "#64FFDA" }}>30%</b>.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Built reusable and modular components to ensure design consistency
            and maintainability across multiple projects.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            <b style={{ color: "#64FFDA" }}>Integrated RESTful</b> APIs with
            advanced state management,{" "}
            <b style={{ color: "#64FFDA" }}>
              reducing API response time by 25%
            </b>
            .
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Collaborated in Agile teams, actively participating in sprint
            planning, stand-ups, and retrospectives.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Enhanced UI scalability and accessibility by implementing{" "}
            <b style={{ color: "#64FFDA" }}>WCAG-compliant design</b> and{" "}
            <b style={{ color: "#64FFDA" }}>responsive grid systems</b>.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Conducted code reviews and wrote unit tests using Jest and React
            Testing Library to maintain high code quality.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Contributed to a multi-tenant HRMS system with features like
            role-based access control and real-time analytics dashboards.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Designed dashboards for HR data visualization using{" "}
            <b style={{ color: "#64FFDA" }}>React, Redux, and Material-UI</b>,
            improving data interpretation speed.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Ensured secure API communication using JWT-based authentication and
            authorization strategies.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Assisted in deploying{" "}
            <b style={{ color: "#64FFDA" }}>CI/CD pipelines</b>, enabling faster
            and more reliable production releases.
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Stack>
          <Typography sx={styles.title}>
            Full Stack Developer MERN at <b>Career Margdarshan</b>
          </Typography>
          <Typography sx={styles.date}>August 2024 - May 2025</Typography>
        </Stack>
        <Stack spacing={3}>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Spearheaded the development of scalable user interfaces using <b style={{ color: "#64FFDA" }}>React.js</b>, <b style={{ color: "#64FFDA" }}>TypeScript</b>, and <b style={{ color: "#64FFDA" }}>Redux Toolkit</b>, significantly enhancing frontend maintainability.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Engineered <b style={{ color: "#64FFDA" }}>RESTful APIs</b> with <b style={{ color: "#64FFDA" }}>Node.js</b> and <b style={{ color: "#64FFDA" }}>Express.js</b>, ensuring seamless integration between frontend and backend services.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Managed and structured data storage using <b style={{ color: "#64FFDA" }}>MongoDB</b>, improving data retrieval efficiency and scalability.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Designed and implemented responsive UI/UX with <b style={{ color: "#64FFDA" }}>Tailwind CSS</b>, maintaining consistency across various devices and screen sizes.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Integrated <b style={{ color: "#64FFDA" }}>React Hook Form</b> and <b style={{ color: "#64FFDA" }}>Axios</b> to build dynamic, interactive forms with real-time <b style={{ color: "#64FFDA" }}>validation and API communication</b>.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Enhanced performance using <b style={{ color: "#64FFDA" }}>lazy loading techniques</b>l, optimizing the platform's loading speed and responsiveness.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Wrote unit tests with <b style={{ color: "#64FFDA" }}>React Testing Library and Jest</b>, improving code reliability and reducing production-level bugs.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Ensured <b style={{ color: "#64FFDA" }}>WCAG accessibility compliance</b>, contributing to an inclusive and user-friendly experience for all users.</Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Collaborated closely with <b style={{ color: "#64FFDA" }}>cross-functional teams in an Agile environment, attending daily stand-ups, sprint planning, and code reviews.</b></Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>Led continuous improvement efforts by adopting best practices in <b style={{ color: "#64FFDA" }}>Git-based version control, CI/CD deployment, and modular coding.</b></Typography>
        </Stack>
      </Stack>
      </Stack>
  );
};

export default ExperienceDetail;
