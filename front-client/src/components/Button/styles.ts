import styled from "styled-components";

interface IButtonStyled {
  active: Boolean;
}

export const ButtonStyled = styled.button<IButtonStyled>`
  background-color: ${({ active }) =>
    active ? "rgb(104, 42, 186)" : "rgb(130, 52, 233)"};
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.2em;
  height: 50px;

  transition: all 0.2s;

  &:hover {
    background-color: rgb(104, 42, 186);
  }
`;

export const ButtonDisabled = styled.button`
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.2em;
  height: 50px;
  background-color: rgb(92, 92, 92);
  cursor: not-allowed;
`;
