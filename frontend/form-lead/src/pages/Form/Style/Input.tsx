import styled from "styled-components";

export const Input = styled.input`
  height: 2rem;
  border: 1px solid #d6d6d6;
  border-radius: 0.4rem;
  padding: 0.5rem;
  color: #4b4b4b;
  ::placeholder {
    color: #d6d6d6;
  }
  outline: none;
  :focus {
    border: 1px solid #414141;
  }
`;
