import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 40px;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
`;

export const PasswordFind = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: -12px;
  margin-bottom: 30px;
`;

export const Button2 = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #03c75a;
  box-shadow: 2px 2px 5px #bab7c0;
  position: relative;
  font-size: 16px;
`;
export const Button3 = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #fee500;
  box-shadow: 2px 2px 5px #bab7c0;
  position: relative;
  font-size: 16px;
`;
export const Button4 = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  position: relative; // 앱솔루트는 부모요소 신경 안 쓰고 화면 전체에서 잡아주는 것, 릴레이티브는 부모요소에 맞춰 줄어드는 것
  font-size: 16px;
  box-shadow: 2px 2px 5px #bab7c0;
`;

export const Question = styled.div`
  font-size: 14px;
`;
export const SignUp = styled.div`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 50px;
  aspect-ratio: 1;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;
