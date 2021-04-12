import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import PortfolioFavicon from "../images/portfolio-favicon.png"
import { H1, MainText } from "../styles/general-styles"
import { ContactInfo, ContactItem } from "../styles/contact-styles"

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
          content="My name is Sean, and I am a web developer.  Contact me here for service inquiries."
        />
        <meta
          name="keywords"
          content="web developer, freelance web developer, hire freelance web developer, web dev, hire freelance web dev, hire developer, hire web developer"
        />
        <title>Sean Rooney | Contact</title>
        <link rel="canonical" href="https://sean-rooney.netlify.app/contact" />
      </Helmet>
      <H1>Contact Me:</H1>
      <MainText>
        If you're interested in hiring me to assist with your web-based project,
        here are some ways to contact me to learn more.
      </MainText>
      <ContactItem>
        <FontAwesomeIcon icon={faEnvelopeSquare} size="1x" /> Email:
        <ContactInfo>
          {" "}
          <a href="mailto:seandanielrooney@gmail.com?subject=Project Commission Inquiry">
            seandanielrooney@gmail.com
          </a>
        </ContactInfo>
      </ContactItem>
      <ContactItem>
        <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn:
        <ContactInfo>
          {" "}
          <a href="https://www.linkedin.com/in/sean-d-rooney/y">
            linkedin.com/in/sean-d-rooney/
          </a>
        </ContactInfo>
      </ContactItem>
      <ContactItem>
        <FontAwesomeIcon icon={faGithubSquare} size="1x" /> GitHub:
        <ContactInfo>
          {" "}
          <a href="https://github.com/Sean-93">https://github.com/Sean-93</a>
        </ContactInfo>
      </ContactItem>
    </Layout>
  )
}
