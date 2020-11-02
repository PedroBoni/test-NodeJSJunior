import styled from "styled-components";

const Header = styled.header`
  background-color: #ffffff;
  padding: 2.5rem 6rem;
  @media (max-width: 1100px) {
    padding: 2.5rem 5rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 550px) {
    padding: 1.6rem 2rem;
  }
`;

export default Header;
