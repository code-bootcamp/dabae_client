import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ProFileInner = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9e9e9;
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ProfileTitle = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: rgb(51, 51, 51);
  ${theme.fontSizes.base};
  font-weight: bold;
`;

export const ProfileText = styled.p`
  margin: 0;
  color: rgb(170, 170, 170);
  ${theme.fontSizes.small};
  font-weight: 500;
`;

export const ProfileContentInner = styled.div`
  padding: 20px 0;
`;

export const ProfileContentBox = styled.a``;

export const ProfileContentTitle = styled.p`
  margin: 0;
  padding: 10px;
  ${theme.fontSizes.base};
  font-weight: bold;
  color: rgb(51, 51, 51);
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #e9e9e9;
  }
`;
