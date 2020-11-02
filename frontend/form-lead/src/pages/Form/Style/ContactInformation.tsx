import styled from "styled-components";

export const ContactInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  input {
    flex: 1;
    min-width: calc(50% - 1.7rem);
    :nth-child(even) {
      margin-left: 1.7rem;
    }
    + input:not(:nth-child(2)) {
      margin-top: 1.7rem;
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
  }
`;
