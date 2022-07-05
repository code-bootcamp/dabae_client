import theme from "@/styles/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEventHandler, ReactNode, useCallback } from "react";

interface IButtonProps {
  onClick?: (event: any) => void | any;
  disabled?: boolean;
  children: ReactNode;
  status?: string;
  width?: string;
  height?: string;
  padding?: string;
  type?: "button" | "reset" | "submit";
}

const Button = ({
  onClick: _onClick,
  // onClick,
  disabled,
  children,
  status,
  width,
  height,
  padding,
  type,
}: IButtonProps) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (disabled) return;
      _onClick?.(event);
    },
    [_onClick, disabled]
  );

  return (
    <ButtonStyle
      onClick={onClick} // {onClick}은 위에서 정의한 함수이다.
      disabled={disabled}
      status={status}
      height={height}
      width={width}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button<IButtonProps>`
  width: ${(props) => props.width || "100%"};
  /* height: ${(props) => (props.height ? props.height + "px" : "54px")}; */
  height: ${(props) => props.height || "54px"};
  padding: ${(props) => props.padding || "0px 4px"};
  ${theme.flex.row.center.center}
  font-size: 0.9em;
  font-weight: 800;
  border: none;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 0 2px #000 inset;
  }

  ${(props) =>
    (props.status === undefined || props.status === "primary") &&
    css`
      /* background-color: ${theme.backgroundColors.primary}; */
      background-color: ${theme.backgroundColors.primary};
      color: ${theme.colors.primary};
    `}

  ${(props) =>
    props.status === "secondary" &&
    css`
      background: ${theme.backgroundColors.secondary};
      color: ${theme.colors.secondary};
    `}

  ${(props) =>
    props.status === "third" &&
    css`
      background-color: ${theme.backgroundColors.third};
      color: ${theme.colors.third};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${theme.backgroundColors.disabled};
      color: ${theme.colors.disabled};
      border: none;

      &:hover {
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.status === "error" &&
    css`
      background-color: ${theme.backgroundColors.error};
      color: ${theme.colors.error};
    `}

  ${(props) =>
    props.status === "danger" &&
    css`
      background-color: ${theme.backgroundColors.danger};
      color: ${theme.colors.danger};
    `}
    
    ${(props) =>
    props.status === "cancel" &&
    css`
      background-color: ${theme.backgroundColors.cancel};
      color: ${theme.colors.cancel};
    `}
`;
