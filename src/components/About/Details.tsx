import { Stack, Typography } from "@mui/material"

const styles = {
  text: {
    fontFamily: "Fira Code,Fira Mono,Roboto Mono",
    fontWeight: "bolder",
    color: "whitesmoke",
  }
}
const Details = () => {
  return (
    <Stack width={{ lg: "50%", md: "50%", sm: "100%", xs: "100%" }} spacing={4}>
      <Typography component={'li'} typeof="bullet" sx={styles.text}>I’m Divyanshu Sharma, a passionate Frontend Developer with over 2 years of experience in building <b style={{ color: "#64FFDA" }}>responsive, scalable web applications using React.js, TypeScript, and Django REST Framework.</b></Typography>
      <Typography component={'li'} typeof="bullet" sx={styles.text}>I specialize in creating intuitive UIs, integrating <b style={{ color: "#64FFDA" }}>RESTful APIs</b>, and optimizing performance for seamless user experiences. </Typography>
      <Typography component={'li'} typeof="bullet" sx={styles.text}>With a strong foundation in <b style={{ color: "#64FFDA" }}>JavaScript</b>, modern <b style={{ color: "#64FFDA" }}>React practices</b>, and backend development using <b style={{ color: "#64FFDA" }}>Django</b>, I thrive in Agile environments and enjoy delivering high-quality, maintainable code.</Typography>
      <Typography component={'li'} typeof="bullet" sx={styles.text}>I'm driven by a continuous learning mindset and a goal to contribute meaningfully to innovative tech teams.</Typography>
    </Stack>
  )
}

export default Details
