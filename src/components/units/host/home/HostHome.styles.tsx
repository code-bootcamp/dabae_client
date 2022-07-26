import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${theme.flex.row._};
  height: calc(100% - 60px);
  background-color: #eceef2;
`;
export const ColumnDiv1 = styled.div`
  width: calc(100% - 240px);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    margin-bottom: 400px;
  }
`;
export const TitleDiv = styled.div`
  width: 100%;
  height: 60px;
  ${theme.flex.row.center.center};
  ${theme.fontSizes.subTitle};
  background-color: ${theme.backgroundColors.primary};
  font-weight: 600;
`;
