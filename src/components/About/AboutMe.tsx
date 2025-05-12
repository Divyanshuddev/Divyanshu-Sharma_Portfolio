import { Stack } from "@mui/material"
import Header from "../Common/Header"
import Details from "./Details"
import Image from "./Image"

const AboutMe = () => {
  return (
    <Stack alignItems={'flex-start'} justifyContent={'flex-start'} spacing={4}>
      <Header title={'About Me'} />
      <Stack direction={{ lg: "row", md: "row", sm: "column-reverse", xs: "column-reverse" }} alignItems={{ lg: "flex-start", md: "flex-start", sm: "center", xs: "center" }} justifyContent={'space-between'} spacing={5}>
        <Details />
        <Image />
      </Stack>
    </Stack>
  )
}

export default AboutMe
