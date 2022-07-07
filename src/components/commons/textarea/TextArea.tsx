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
};

const TextArea = ({
  placeholder,
  disabled,
  register,
  height,
  width,
  padding,
  borderRadius,
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
      {...register}
      {...props}
    />
  );
};
export default TextArea;

const TextAreaStyle = styled.textarea`
  width: 100%;
  resize: none;
  min-height: 300px;
  padding: 20px;
  &::placeholder {
  }
`;
