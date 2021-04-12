import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import { H1, MainText } from "../styles/general-styles"
import PortfolioFavicon from "../images/portfolio-favicon.png"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href={PortfolioFavicon}
          type="image/gif"
          sizes="16x16"
        />
        <title>Sean Rooney | Developer</title>
        <link rel="canonical" href="https://sean-rooney.netlify.app" />
      </Helmet>
      <H1>Web Development Services:</H1>
      <MainText>
        I can make you a website, provide private tutoring, or assist with
        website administration & hosting issues.
      </MainText>
      <MainText>
        <FontAwesomeIcon icon={faLaptopCode} size="1x" /> I have worked with a
        variety of technologies spanning from full-stack web development to
        working with Wordpress.
      </MainText>
      <MainText>
        <FontAwesomeIcon icon={faServer} size="1x" /> I also have experience
        with web administration & hosting issues like DNS, Domain Name
        Registration, and File Transfer Protocol.
      </MainText>
    </Layout>
  )
}
