import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  padding: 0.5rem 5rem;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  > div {
    max-width: 50%;
    padding: 1rem;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    > div:nth-child(1) {
      order: 1;
    }
    > div:nth-child(2) {
      order: 3;
    }
    > div:nth-child(3) {
      order: 2;
    }
    > div:nth-child(4) {
      order: 4;
    }
    > div {
      max-width: 100%;
    }
    padding: 2rem 4rem;
  }
  @media (max-width: 700px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 550px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 430px) {
    min-width: calc(50% - 1.2rem);
    :nth-child(even) {
      margin-left: 1.2rem;
    }
    + input:not(:nth-child(2)) {
      margin-top: 1.2rem;
    }
  }
`;
