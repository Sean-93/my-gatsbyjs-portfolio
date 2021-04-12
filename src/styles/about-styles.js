import styled from "styled-components"

export const ListText = styled.div`
  font-size: 1.15vw;
  color: rgb(55, 55, 55);
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 1.5% 5% 1.5% 30%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 40%;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1.45vw;
  }
`
export const ListFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 25%;
  @media only screen and (max-width: 1600px) {
    margin: 1.5% 5% 1.5% 30%;
  }
  @media only screen and (max-width: 1400px) {
    margin: 1.5% 5% 1.5% 35%;
  }
`

export const ListFlexOne = styled.div`
  flex: 3;
`

export const ListFlexTwo = styled.div`
  flex: 3;
`

export const ListFlexThree = styled.div`
  flex: 3;
`
