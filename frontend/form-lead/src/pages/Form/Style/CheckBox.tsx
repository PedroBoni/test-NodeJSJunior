import styled from "styled-components";
import { Input } from "./Input";

export const CheckBox = styled(Input).attrs((props) => ({
  type: "checkbox",
}))`
  width: 2rem;
  border: 1px solid #d6d6d6;
  border-radius: 0.4rem;
  margin-right: 1rem;
  background-color: #fff;
  @media (max-width: 430px) {
    margin-right: 0.5rem;
  }
`;
