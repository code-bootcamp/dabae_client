import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ProFileInner = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #32c2b9;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const MobileProFileInner = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const EmptyBox = styled.div`
  display: none;
  list-style: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Link = styled.a``;

export const MyListItem = styled.li`
  font-weight: 700;
  ${theme.fontSizes.small};
  padding-bottom: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #32c2b9;
  }
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
  /* font-weight: bold; */
`;

export const ProfileText = styled.p`
  margin: 0;
  color: rgb(170, 170, 170);
  ${theme.fontSizes.small};
  font-weight: 500;
`;

export const ProfileContentInner = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-radius: 10px;
`;

export const ProfileContentBox = styled.a`
  width: 100%;
  /* box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%); */
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  ${theme.fontSizes.base};
  font-weight: bold;
  color: rgb(51, 51, 51);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #32c2b9;
    color: #ffffff;
  }
`;

export const ProfileLisImg = styled.img``;

export const ProfileContentTitle = styled.p`
  margin: 0;
  font-weight: normal;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 76px;
`;

export const ModalTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  padding-bottom: 30px;
  color: #000;
`;

export const PointSelect = styled.select`
  width: 384px;
  height: 52px;
  border: none;
  border-bottom: 1px solid #000;
`;

export const FlexBox = styled.div`
  display: flex;
`;
