import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.form`
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
  padding: 50px;
  border: 1px solid #32c2b9;
  border-radius: 10px;
`;

export const TableInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  border-radius: 50%;
`;

export const CourseTitleBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
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
  ${theme.fontSizes.lg};
`;

export const Rates = styled(Rate)`
  color: red;
  ${theme.fontSizes.small};
`;

export const DateInner = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Date = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
`;

export const ReviewContents = styled.textarea`
  /* background-color: red; */
  width: 100%;
  height: 300px;
  resize: none;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ReviewButtonBox = styled.div`
  width: 100px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ReviewButton = styled.button`
  width: 100%;
  cursor: pointer;
  outline: 0;
  border: 1px solid #32c2b9;
  background-color: transparent;
  ${theme.fontSizes.small};
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  color: #32c2b9;
`;
