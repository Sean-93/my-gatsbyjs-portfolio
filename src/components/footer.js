import React from "react"
import { FooterBox, FooterText } from "../styles/footer-styles"

export default function Footer() {
  return (
    <div>
      <FooterBox>
        <FooterText>© Copyright {new Date().getFullYear()}</FooterText>
      </FooterBox>
    </div>
  )
}
