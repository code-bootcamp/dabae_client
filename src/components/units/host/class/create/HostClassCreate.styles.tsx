import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  scroll-behavior: smooth;
  ${theme.flex.row._};
  @media screen and (max-width: ${theme.deviceSizes.laptop}) {
    ${theme.flex.column}
  }
`;

export const Wrapper1 = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #d9d9d9;
`;

export const Wrapper2 = styled.div`
  width: 100%;
  padding: 10px;
  @media screen and (max-width: ${theme.deviceSizes.laptop}) {
    background-color: #d9d9d9;
  }
`;
export const SelectTitle = styled.div`
  ${theme.fontSizes.lg};
  font-weight: 800;
`;
export const BlockSelect = styled.select`
  background-color: white;
  padding: 10px 10px;
  position: relative;
  min-width: 200px;

  option {
    position: absolute;
    left: 0;
  }
`;
export const BorderDiv = styled.div`
  border: solid ${theme.backgroundColors.border} 1px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`;
export const FooterMenu = styled.div`
  height: 60px;
  width: 100%;
`;
