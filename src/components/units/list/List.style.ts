import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const ListTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ListTitle = styled.h2`
  font-weight: bold;
  ${theme.fontSizes.subTitle};
`;

export const ListCount = styled.p`
  margin: 0;
  margin-left: 10px;
  font-weight: 300;
  ${theme.fontSizes.subTitle};
`;

export const MapInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const MapBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MapText = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: bold;
`;

export const Img = styled.img``;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SelectBox = styled.select`
  margin-bottom: 30px;
  outline: none;
  padding: 10px;
  border-radius: 10px;
`;

export const SelectOption = styled.option``;

// 검색어가 없을 때
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
