import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "./theme";

interface IStyleProps {
  gap?: number;
  border?: string;
  padding?: string;
  height?: string;
  width?: string;
}

const RowDiv = styled.div<IStyleProps>`
  width: 100%;
  ${theme.flex.row._.center}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

const RowStartDiv = styled.div<IStyleProps>`
  ${theme.flex.row._.start}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

const RowRightDiv = styled.div<IStyleProps>`
  ${theme.flex.row.end.center}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

const RowCenterDiv = styled.div<IStyleProps>`
  ${theme.flex.row.center.center}
  width: 100%;
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;
const RowBetweenDiv = styled.div<IStyleProps>`
  width: 100%;
  ${theme.flex.row.between.center}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}
    ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}
    ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}
    ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
`;

const RowBetweenStartDiv = styled.div<IStyleProps>`
  ${theme.flex.row.between.start}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

const ColumnLeftDiv = styled.div<IStyleProps>`
  /*  */
  width: 100%;
  ${theme.flex.column._.start}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;
const ColumnDiv = styled.div<IStyleProps>`
  ${theme.flex.column}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;
const ColumnEndDiv = styled.div<IStyleProps>`
  ${theme.flex.column.end}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

const ColumnBetweenDiv = styled.div<IStyleProps>`
  ${theme.flex.column.between}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

const ColumnCenterDiv = styled.div<IStyleProps>`
  width: 100%;
  ${theme.flex.column.center.center}
  ${(props: any) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${(props: any) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props: any) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: any) =>
    props.padding &&
    css`
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
