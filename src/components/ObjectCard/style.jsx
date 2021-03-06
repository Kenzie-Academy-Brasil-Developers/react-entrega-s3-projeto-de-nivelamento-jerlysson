import styled from "styled-components";

export const BoxCard = styled.div`
  @media (max-width: 500px) {
    flex-direction: column;
    align-content: center;
  }
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  div {
    @media (max-width: 500px) {
      width: 70%;
    }
    @media (max-width: 700px) and (min-width: 500px) {
      width: 45%;
    }

    margin: 1%;
    max-height: 320px;
    width: 30%;
    border: 1px solid black;
  }
`;
