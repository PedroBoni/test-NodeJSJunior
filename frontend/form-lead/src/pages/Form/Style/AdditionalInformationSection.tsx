import styled from "styled-components";

export const AdditionalInformationSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  div:not(:last-child) {
    display: flex;
    flex: 1;
    min-width: calc(50% - 1.7rem);
    align-items: center;
    input {
      flex: none;
    }
    :nth-child(3) {
      margin-top: 1.7rem;
    }
    :nth-child(2) {
      margin-left: 1.7rem;
    }
    @media (max-width: 430px) {
      min-width: calc(50% - 1.2rem);
      :nth-child(3) {
        margin-top: 1.2rem;
      }
      :nth-child(2) {
        margin-left: 1.2rem;
      }
    }
  }
  label {
    color: #4b4b4b;
    font-size: 0.8rem;
  }
`;
