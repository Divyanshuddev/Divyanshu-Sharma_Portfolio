import { Stack } from "@mui/material"
import Header from "../Common/Header"
import SkillsList from "./SkillsList"

const Skills = () => {
  return (
    <div id="Skills">
      <Stack spacing={4}>
        <Header title="Skills" />
        <SkillsList />
      </Stack>
    </div>
  )
}

export default Skills
