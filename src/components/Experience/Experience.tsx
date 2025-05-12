import { Stack } from "@mui/material"
import Header from "../Common/Header"
import ExperienceDetail from "./ExperienceDetail"

const Experience = () => {
  return (
    <div id="Experience">
      <Stack spacing={4}>
        <Header title='Experience' />
        <ExperienceDetail />
      </Stack>
    </div>
  )
}

export default Experience
