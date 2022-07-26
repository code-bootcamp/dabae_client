import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "./theme";

interface IStyleProps {
  gap?: number;
  border?: string;
  padding?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
}

const RowDiv = styled.div<IStyleProps>`
  width: 100%;
  ${theme.flex.row._.center}

  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

const RowStartDiv = styled.div<IStyleProps>`
  ${theme.flex.row._.start}

  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

const RowRightDiv = styled.div<IStyleProps>`
  width: 100%;
  ${theme.flex.row.end.center};
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

const RowCenterDiv = styled.div<IStyleProps>`
  ${theme.flex.row.center.center}
  width: 100%;
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;
const RowBetweenDiv = styled.div<IStyleProps>`
  width: 100%;
  ${theme.flex.row.between.center}
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

const RowBetweenStartDiv = styled.div<IStyleProps>`
  ${theme.flex.row.between.start}
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

const ColumnLeftDiv = styled.div<IStyleProps>`
  /*  */
  width: 100%;
  ${theme.flex.column._.start}
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;
const ColumnDiv = styled.div<IStyleProps>`
  ${theme.flex.column}
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;
const ColumnEndDiv = styled.div<IStyleProps>`
  ${theme.flex.column.end}
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

const ColumnBetweenDiv = styled.div<IStyleProps>`
  ${theme.flex.column.between}
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

const ColumnCenterDiv = styled.div<IStyleProps>`
  width: 100%;
  ${theme.flex.column.center.center}
  ${(props: any) =>
    css`
      background-color: ${props.backgroundColor};
      gap: ${props.gap}px;
      border: ${props.border};
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
    `}
`;

// const flexColumnSet = (just = 'center', align = 'center') => {
//   return `display: flex;
//   flex-direction: column;
//   justify-content: ${just};
//   align-items: ${align};`;
// };

export const CF = {
  RowDiv,
  RowRightDiv,
  RowStartDiv,
  RowBetweenDiv,
  RowCenterDiv,
  RowBetweenStartDiv,
  ColumnLeftDiv,
  ColumnBetweenDiv,
  ColumnDiv,
  ColumnCenterDiv,
  ColumnEndDiv,
};
