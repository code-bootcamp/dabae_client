import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { KeyboardEvent } from "react";

/**
 * Author : Sukyung Lee
 * FileName: InputHashTag.tsx
 * Date: 2022-07-09 14:19:28
 * Description : 해시태그를 위한 input 태그
 */

type InputHashTagType = {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  register?: any;
  height?: string;
  width?: string;
  padding?: string;
  onKeyUp?: KeyboardEvent<HTMLInputElement>;
  borderRadius?: string;
  backgroundColor?: string;
  onKeyDown?: any;
};

const InputHashTag = ({
  type,
  placeholder,
  disabled,
  register,
  height,
  width,
  padding,
  onKeyUp,
  borderRadius,
  backgroundColor,
  onKeyDown,
  ...props
}: InputHashTagType) => {
  return (
    <InputStyle
      type={type ?? "text"}
      placeholder={placeholder}
      disabled={disabled}
      width={width}
      height={height}
      padding={padding}
      onKeyUp={onKeyUp}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      onKeyDown={onKeyDown}
      {...register}
      {...props}
    />
  );
};
export default InputHashTag;

const InputStyle = styled.input<{
  padding: string;
  backgroundColor: string;
  borderRadius: string;
}>`
  font-size: 1rem;
  border: none;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "40px")};
  padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 8px")};
  background-color: ${(props) => props.backgroundColor || "#f0f0f0"};
  border-radius: ${(props) => props.borderRadius || "0px"};

  &:focus {
    animation: s1 1s infinite;
    animation-direction: alternate;

    @keyframes s1 {
      0% {
        background-color: ${theme.backgroundColors.secondary};
      }
      50% {
        background-color: ${theme.backgroundColors.secondary} - 500;
      }
      100% {
        background-color: ${theme.backgroundColors.secondary} - 1000;
      }
    }
  }
`;
