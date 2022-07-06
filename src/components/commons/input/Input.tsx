import styled from "@emotion/styled";

/**
 * Author : Sukyung Lee
 * FileName: Input.tsx
 * Date: 2022-06-17 02:19:41
 * Description : 커스텀 Input 컴포넌트
 */

interface IInputProps {
  type?: string;
  placeholder?: string;
  register?: any; // react-hook-form 용도로 사용
  disabled?: boolean;
  defaultValue?: string;
  height?: string;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const Input = ({
  type,
  placeholder,
  disabled,
  register,
  height,
  width,
  padding,
  borderRadius,
  ...props
}: IInputProps) => {
  return (
    <InputStyle
      type={type ?? "text"}
      placeholder={placeholder}
      disabled={disabled}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      {...register}
      {...props}
    />
  );
};
export default Input;

const InputStyle = styled.input<{
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
}>`
  font-size: 1rem;
  border: none;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "40px")};
  padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 16px")};
  background-color: ${(props) => props.backgroundColor || "#f0f0f0"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0px"};
`;
