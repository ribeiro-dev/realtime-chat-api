import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  handleClick: (e: React.FormEvent) => void;
  children?: ReactNode;
  style?: object;
  type?: "button" | "reset" | "submit";
}

export function Button({ children, style, type, handleClick }: ButtonProps) {
  return (
    <StyledButton type={type ?? "submit"} style={style} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}
