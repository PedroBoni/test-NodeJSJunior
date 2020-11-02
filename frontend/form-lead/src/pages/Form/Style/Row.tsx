import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  margin-top: 1.7rem;
  width: 100%;
  align-items: center;
  input[type="text"] {
    flex: 1;
    width: 100%;
    + input {
      margin-left: 1.7rem;
    }
  }
  input[type="number"] {
    flex: 1;
  }
  @media (max-width: 430px) {
    margin-top: 1.2rem;
    input[type="text"] {
      + input {
        margin-left: 1.2rem;
      }
    }
  }
`;
