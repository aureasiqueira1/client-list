import React from "react";
import { ButtonStyled, ButtonDisabled } from "./styles";

interface IButton {
  name: string;
  disabled?: Boolean;
  active?: Boolean;
  onClick: () => void;
}

export function Button({
  name,
  disabled = false,
  active = false,
  ...rest
}: IButton) {
  return (
    <>
      {disabled ? (
        <ButtonDisabled>{name}</ButtonDisabled>
      ) : (
        <ButtonStyled active={active} {...rest}>
          {name}
        </ButtonStyled>
      )}
    </>
  );
}
