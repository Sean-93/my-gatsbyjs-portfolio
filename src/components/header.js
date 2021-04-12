import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faNodeJs,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"
import "../styles/image-frame.css"
import {
  HeaderBox,
  HeaderText,
  NavBox,
  NavLinkText,
} from "../styles/header-styles"
import { Link } from "gatsby"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <div>
      <HeaderBox>
        <div className="flex">
          <div className="flex-initial">
            <StaticImage
              className="image-frame"
              src="../images/headshot.jpg"
              alt="A picture of my face"
            />
          </div>
          <div className="flex-initial">
            <HeaderText>
              My name is Sean Rooney and I'm a web developer from{" "}
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Tempe,
              Arizona.
            </HeaderText>
            <br />
            <HeaderText>
              I have experience with{" "}
              <FontAwesomeIcon icon={faReact} size="1x" /> React,{" "}
              <FontAwesomeIcon icon={faNodeJs} size="1x" /> NodeJS,{" "}
              <FontAwesomeIcon icon={faWordpress} size="1x" /> Wordpress,
              GatsbyJS, GraphQL, MySQL, MongoDB + more.
            </HeaderText>
            <br />
            <HeaderText>
              I love to code and build web projects as well as assist others on
              their web journey-{" "}
              <a href="mailto:seandanielrooney@gmail.com?subject=Project Commission Inquiry">
                contact me via email to inquire about project commissions or
                other services like private tutoring or assisting with web
                hosting issues.
              </a>
            </HeaderText>
          </div>
        </div>
      </HeaderBox>
      <NavBox>
        <div className="grid grid-cols-3 gap-10">
          <NavLinkText>
            <Link to="/"><FontAwesomeIcon icon={faHome} size="1x" />{" "}Home</Link>
          </NavLinkText>
          <NavLinkText>
            <Link to="/about"><FontAwesomeIcon icon={faQuestionCircle} size="1x" />{" "}About</Link>
          </NavLinkText>
          <NavLinkText>
            <Link to="/contact"><FontAwesomeIcon icon={faMobileAlt} size="1x" />{" "}Contact</Link>
          </NavLinkText>
        </div>
      </NavBox>
    </div>
  )
}
