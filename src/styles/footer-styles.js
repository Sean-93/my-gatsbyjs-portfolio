import styled from "styled-components"

export const FooterBox = styled.div`
  border-top: solid 0.25vh rgba(25, 175, 225, 0.5);
  background-color: rgb(225, 255, 255);
  padding: 1.5%;
  margin: 1.5%;
`

export const FooterText = styled.p`
  color: rgb(75, 75, 75);
  font-size: 1.25vw;
  text-align: center;
  @media only screen and (max-width: 1400px) {
    font-size: 1.45vw;
  }
`
