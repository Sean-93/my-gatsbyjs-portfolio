import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
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
        <meta name="author" content="Sean Rooney" />
        <meta
          name="description"
          content="My name is Sean, and I am a web developer.  This page of my site does not exist."
        />
        <meta name="keywords" content="404 page" />
        <title>Sean Rooney | Developer</title>
        <link rel="canonical" href="http://sean-rooney.netlify.app/404" />
      </Helmet>
      <H1>404</H1>
      <MainText>Sorry! The page you are looking for is not here.</MainText>
      <MainText>
        <Link to="/">
          <FontAwesomeIcon icon={faUndoAlt} size="1x" /> Back to home
        </Link>
      </MainText>
    </Layout>
  )
}
