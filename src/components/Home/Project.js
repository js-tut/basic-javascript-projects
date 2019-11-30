import React from "react"
import Image from "gatsby-image"
import styles from "../../css/single-project.module.css"
import { FaGithubSquare } from "react-icons/fa"
const Project = ({ image, title, url }) => {
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} alt={title} className={styles.img}></Image>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.url}
        >
          finished project
        </a>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default Project
