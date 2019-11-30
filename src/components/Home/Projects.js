import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/projects.module.css"
import Project from "./Project"
import Title from "../Title"

// projects center
const query = graphql`
  {
    jsProjects: allContentfulBasicJavascriptProject(
      sort: { fields: createdAt, order: ASC }
    ) {
      nodes {
        url
        title
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Projects = () => {
  const {
    jsProjects: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <section className={styles.projects}>
      <Title title="all" subtitle="projects"></Title>
      <div className={styles.center}>
        {projects.map(item => {
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
