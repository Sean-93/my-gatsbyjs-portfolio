import styled from "styled-components"

export const HeaderBox = styled.div`
  width: auto;
  height: auto;
  min-height: 300px;
  background-color: rgb(225, 255, 255);
  box-shadow: 0.45vw 0.45vw rgba(25, 175, 225, 0.5);
  padding: 1.5%;
  margin: 1.5%;
`

export const HeaderText = styled.p`
  color: rgb(75, 75, 75);
  text-shadow: 0.25vw rgb(125, 125, 125);
  font-size: 1.25vw;
  margin: 1% 5% 1% 35%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 45%;
  }
`

export const NavBox = styled.nav`
  border-radius: 5%;
  background-color: rgb(225, 225, 225);
  border: solid 0.25vw rgb(185, 185, 185);
  margin: 1.5% 30% 1.5% 25%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 30%;
  }
`

export const NavLinkText = styled.span`
  margin: 10%;
  font-size: 1vw;
  color: rgb(75, 75, 75);
  text-shadow: 0.25vw rgb(125, 125, 125);
`
