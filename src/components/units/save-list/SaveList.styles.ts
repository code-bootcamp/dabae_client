import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleInner = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const TitleBox = styled.div`
  cursor: pointer;
  display: flex;
`;

export const Img = styled.img`
  cursor: pointer;
  margin-right: 10px;
  transform: rotate(180deg);
`;

export const Title = styled.h2`
  margin: 0;
  ${theme.fontSizes.subTitle};
  font-weight: bold;
`;

export const InfiniteScrollBox = styled.div`
  width: 100%;
  height: 800px;
  overflow-y: auto;
`;

export const InnerContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const EmptyContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const EmptyTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.lg};
  font-weight: bold;
  color: rgb(119, 119, 119);
  margin-bottom: 10px;
`;

export const EmptyText = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  color: rgb(119, 119, 119);
`;
