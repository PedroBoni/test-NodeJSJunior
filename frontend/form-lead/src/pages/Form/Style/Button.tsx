import styled from "styled-components";

export const Button = styled.button`
  background-color: #1a237a;
  border: none;
  border-radius: 0.4rem;
  height: 2rem;
  width: 20%;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 200ms;
  @media (max-width: 1100px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    width: 50%;
  }
  :hover {
    background-color: #0e1341;
  }
`;
