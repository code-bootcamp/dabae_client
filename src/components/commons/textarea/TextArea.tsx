import styled from "@emotion/styled";
/**
 * Author : Sukyung Lee
 * FileName: TextArea.tsx
 * Date: 2022-07-07 10:33:15
 * Description :
 */
type TextAreaType = {
  placeholder?: string;
  register?: any; // react-hook-form 용도로 사용
  disabled?: boolean;
  defaultValue?: string;
  height?: string;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  outline?: string;
};

const TextArea = ({
  placeholder,
  disabled,
  register,
  height,
  width,
  padding,
  borderRadius,
  backgroundColor,
  outline,
  border,
  ...props
}: TextAreaType) => {
  return (
    <TextAreaStyle
      placeholder={placeholder}
      disabled={disabled}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      border={border}
      outline={outline}
      {...register}
      {...props}
    />
  );
};
export default TextArea;

const TextAreaStyle = styled.textarea<{
  backgroundColor: string;
  border: string;
  borderRadius: string;
  outline: string;
  width: string;
  height: string;
}>`
  resize: none;
  padding: 10px;
  min-height: calc(100vh - 320px);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  border: ${(props) => (props.border ? props.border : "0px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0px"};
  outline: ${(props) => (props.outline ? props.outline : "0px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
`;
