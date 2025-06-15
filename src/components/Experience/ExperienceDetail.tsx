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
            Software Developer at <b>Career Margdarshan</b>
          </Typography>
          <Typography sx={styles.date}>August 2024 - May 2025</Typography>
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
            Built <b style={{ color: "#64FFDA" }}>reusable</b> and{" "}
            <b style={{ color: "#64FFDA" }}>modular components</b> to ensure
            design consistency and maintainability across multiple projects.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            <b style={{ color: "#64FFDA" }}>Integrated RESTful APIs</b> with
            advanced state management,{" "}
            <b style={{ color: "#64FFDA" }}>
              reducing API response time by 25%
            </b>
            .
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Collaborated in <b style={{ color: "#64FFDA" }}>Agile teams</b>,
            actively participating in{" "}
            <b style={{ color: "#64FFDA" }}>sprint planning</b>,{" "}
            <b style={{ color: "#64FFDA" }}>daily stand-ups</b>, and{" "}
            <b style={{ color: "#64FFDA" }}>retrospectives</b>.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Enhanced UI scalability and accessibility by implementing{" "}
            <b style={{ color: "#64FFDA" }}>WCAG-compliant design</b> and{" "}
            <b style={{ color: "#64FFDA" }}>responsive grid systems</b>.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Conducted <b style={{ color: "#64FFDA" }}>code reviews</b> and wrote{" "}
            <b style={{ color: "#64FFDA" }}>unit tests</b> using{" "}
            <b style={{ color: "#64FFDA" }}>Jest</b> and{" "}
            <b style={{ color: "#64FFDA" }}>React Testing Library</b> to
            maintain high code quality.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Contributed to a{" "}
            <b style={{ color: "#64FFDA" }}>multi-tenant HRMS system</b> with
            features like{" "}
            <b style={{ color: "#64FFDA" }}>role-based access control</b> and
            real-time analytics dashboards.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Designed dashboards for HR data visualization using{" "}
            <b style={{ color: "#64FFDA" }}>React</b>,{" "}
            <b style={{ color: "#64FFDA" }}>Redux</b>, and{" "}
            <b style={{ color: "#64FFDA" }}>Material-UI</b>, improving data
            interpretation speed.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Ensured <b style={{ color: "#64FFDA" }}>secure API communication</b>{" "}
            using <b style={{ color: "#64FFDA" }}>JWT-based authentication</b>{" "}
            and authorization strategies.
          </Typography>
          <Typography component={"li"} typeof="bullet" sx={styles.text}>
            Assisted in deploying{" "}
            <b style={{ color: "#64FFDA" }}>CI/CD pipelines</b>, enabling faster
            and more reliable production releases.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExperienceDetail;
