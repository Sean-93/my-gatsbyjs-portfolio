import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/image-frame.css"
import { HeaderBox, HeaderText } from "../styles/header-styles"

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
              My name is Sean Rooney and I'm a web developer from Tempe,
              Arizona.
            </HeaderText>
            <br/>
            <HeaderText>
              I have experience with React, NodeJS, GatsbyJS, Wordpress, GraphQL, MySQL, MongoDB + more.
            </HeaderText>
            <br/>
            <HeaderText>
              I love to code and build web projects- contact me via email to inquire about project commissions.
            </HeaderText>
          </div>
        </div>
      </HeaderBox>
    </div>
  )
}
