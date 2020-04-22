import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 10px 20px;
  margin-right: 10px;
  width: 100%;
  color: white;
  background: transparent;
  border-bottom: 1px solid white;
  &:focus {
    border-bottom: 0;
    outline: none;
  }
`;
export const Label = styled.label`
  margin: 20px 10px;

  width: 300px;
  & div {
    max-width: 0px;
    width: 100%;
    background: #a71e4d;
    height: 3px;
    transition: all 0.5s;
    position: relative;
    left: 50%;
    top: -2px;
  }
  & input:focus + div {
    max-width: 300px;
    left: 0%;
  }
`;
