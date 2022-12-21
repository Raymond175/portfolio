import { Grid, styled } from "@nextui-org/react"
import { ProjectListItem } from "../molecules/projectListItem"


export const ProjectList = ({ projects }) => {
    console.log("props projects: ", projects)
    return (
        <Grid.Container gap={2}>
            {
                projects.map((project) => <Grid key={project.id} xs={12} md={6} lg={4}> <ProjectListItem project={project} /></Grid>)
            }
        </Grid.Container >
    )

} 