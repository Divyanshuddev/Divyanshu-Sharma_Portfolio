import { Stack } from "@mui/material"
import Header from "../Common/Header"
import ProjectList from "./ProjectList"

const Projects = () => {
  return (
    <div id="Work">
      <Stack spacing={4}>
        <Header title="Work" />
        <ProjectList />
      </Stack>
    </div>
  )
}

export default Projects
