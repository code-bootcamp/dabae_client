import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleInner = styled.div`
  padding: 40px 0 50px;
`;

export const TitleBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  transform: rotate(180deg);
  margin-right: 10px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const TableWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #32c2b9;
  border-radius: 10px;
`;

export const TableInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const TableBox = styled.div`
  width: calc(100% - 100px);
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const TableImgBox = styled.div`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const TableImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const CourseTitleBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const CourseTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
`;

export const Rates = styled(Rate)`
  color: red;
  ${theme.fontSizes.small};
`;

export const ContentInner = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const ContentTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
`;

export const ContentBox = styled.div``;

export const Content = styled.p`
  margin: 0;
  ${theme.fontSizes.small};
`;

export const DeleteButtonBox = styled.div`
  width: 100px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  cursor: pointer;
  outline: 0;
  border: 1px solid #32c2b9;
  background-color: transparent;
  ${theme.fontSizes.small};
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  color: #32c2b9;
  :hover {
    background-color: #32c2b9;
    color: #fff;
  }
`;
