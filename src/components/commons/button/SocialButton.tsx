import theme from "@/styles/theme";
import styled from "@emotion/styled";

const Button = styled.button<{ backColor: string; fontColor: string }>`
  width: 100%;
  padding: 10px 20px;
  outline: 0;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px #e4e4e4;
  background-color: ${(props: any) => props.backColor};
  color: ${(props: any) => props.fontColor};
  position: relative;
  ${theme.fontSizes.base}
  font-weight: 400;
  font-size: 16px;
`;

const Img = styled.img`
  width: 40px;
  aspect-ratio: 1;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

export default function SocialButton(props: any) {
  return (
    <Button backColor={props.backColor} fontColor={props.fontColor}>
      <Img src={props.imgsrc} />
      {props.title}
    </Button>
  );
}
