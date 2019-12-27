import React from "react"
import { AppContext } from "../../context/context"
import SmallBanner from "./SmallBanner"
import Banner from "../Banner"
import Background from "./Background"
const HomeBanner = () => {
  return (
    <Background>
      <Banner title=" vanilla javascript projects"></Banner>
    </Background>
  )
}

export default HomeBanner
