import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToolbox } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import { H1, H2, MainText, SecondaryText } from "../styles/general-styles"
import PortfolioFavicon from "../images/portfolio-favicon.png"
import {
  ListFlexWrapper,
  ListText,
  ListFlexOne,
  ListFlexTwo,
  ListFlexThree,
} from "../styles/about-styles"

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
          content="My name is Sean, and I am a web developer.  I can design you a site, or help with various web-related issues."
        />
        <meta
          name="keywords"
          content="web developer, freelance web developer, hire freelance web developer, web dev, hire freelance web dev, hire developer, hire web developer"
        />
        <title>Sean Rooney | About Me</title>
        <link rel="canonical" href="https://sean-rooney.netlify.app/about" />
      </Helmet>
      <H1>About Me:</H1>
      <MainText>
        I started my development journey working in a support position for a web
        hosting company. From there I learned the basics of the web & became
        experienced in the Wordpress CMS environment.
      </MainText>
      <MainText>
        Next, I decided that I wanted to expand my knowledge to learning how to
        code websites from scratch, so I enrolled in a full-time web-focused
        coding bootcamp.
      </MainText>
      <MainText>
        Now, I work full-time as a web developer. Although my job keeps me busy,
        I am always looking for side projects to keep me sharp.
      </MainText>
      <H2>
        <FontAwesomeIcon icon={faToolbox} size="1x" /> What's in my Toolbox:
      </H2>
      <SecondaryText>
        Here is a list of all the technologies that I have experience in and
        have worked with.
      </SecondaryText>
      <ListFlexWrapper>
        <ListFlexOne>
          <ListText>HTML5/CSS3/Javascript</ListText>

          <ListText>Wordpress</ListText>

          <ListText>Node.JS</ListText>

          <ListText>React</ListText>

          <ListText>Gatsby.JS</ListText>

          <ListText>TailwindCSS</ListText>

          <ListText>Styled-Components</ListText>
        </ListFlexOne>
        <ListFlexTwo>
          <ListText>Bootstrap</ListText>

          <ListText>SQL</ListText>

          <ListText>MongoDB</ListText>

          <ListText>GraphQL</ListText>

          <ListText>JQuery</ListText>

          <ListText>DNS</ListText>

          <ListText>SSL</ListText>
        </ListFlexTwo>

        <ListFlexThree>
          <ListText>Web Hosting</ListText>

          <ListText>Domain Registration</ListText>

          <ListText>GNU Image Manipulation Program (GIMP)</ListText>

          <ListText>Adobe Indesign</ListText>

          <ListText>Netlify</ListText>

          <ListText>Heroku</ListText>

          <ListText>Git/Github</ListText>
        </ListFlexThree>
      </ListFlexWrapper>
    </Layout>
  )
}
