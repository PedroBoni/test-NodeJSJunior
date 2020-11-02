import styled from "styled-components";

export const AddressSection = styled.div`
  display: flex;
  flex-wrap: wrap;

  > input {
    width: 100%;
  }
  > input + input {
    margin-top: 1.7rem;
  }
  label {
    color: #4b4b4b;
    font-size: 0.8rem;
  }
  @media (max-width: 430px) {
    > input + input {
      margin-top: 1.2rem;
    }
  }
`;
