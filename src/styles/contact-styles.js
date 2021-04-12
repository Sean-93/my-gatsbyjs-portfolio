import styled from "styled-components"

export const ContactItem = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 1.45vw;
  color: rgb(5, 105, 145);
  margin: 1.5% 5% 1.5% 30%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 40%;
  }
  @media only screen and (max-width: 1200px) {
    margin: 1.5% 5% 1.5% 55%;
    font-size: 1.75vw;
  }
`

export const ContactInfo = styled.span`
  color: blue;
  font-weight: normal;
`
