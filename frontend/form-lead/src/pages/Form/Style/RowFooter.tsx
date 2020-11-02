import styled from "styled-components";
import { Row } from "./Row";

export const RowFooter = styled(Row)`
  justify-content: flex-end;
  padding: 0 6rem 2rem 6rem;
  @media (max-width: 1100px) {
    padding: 0 5rem 2rem 5rem;
  }
  @media (max-width: 700px) {
    padding: 0 3rem 2rem 3rem;
  }
  @media (max-width: 550px) {
    padding: 0 2rem 1.7rem 2rem;
  }
`;
