import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Projects from "../components/Home/Projects"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="JS Projects"></SEO>
    <HomeBanner></HomeBanner>
    <Projects />
  </Layout>
)

export default IndexPage
