import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 2.25vw;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgb(25, 175, 225);
  text-shadow: 0.075vw 0vw rgb(5, 105, 145);
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 30%;
  }
  @media only screen and (max-width: 1200px) {
    margin: 1.5% 5% 1.5% 55%;
    font-size: 2.45vw;
  }
`

export const H2 = styled.h2`
  font-size: 1.45vw;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgb(5, 105, 145);
  margin: 1.5% 5% 1.5% 30%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 40%;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1.75vw;
  }
`

export const MainText = styled.p`
  font-size: 1.45vw;
  color: rgb(55, 55, 55);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 1.5% 5% 1.5% 30%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 40%;
  }
  @media only screen and (max-width: 1200px) {
    margin: 1.5% 5% 1.5% 55%;
    font-size: 1.75vw;
  }
`

export const SecondaryText = styled.p`
  font-size: 1.25vw;
  color: rgb(55, 55, 55);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 1.5% 5% 1.5% 30%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 40%;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1.45vw;
  }
`