import { CF } from "@/styles/commonComponentStyle";
import * as S from "./SignUpList.styles";

export default function SignUpListPageUI(props: any) {
  return (
    <S.Wrapper>
      <CF.ColumnCenterDiv gap={20}>
        <S.Title>회원가입</S.Title>
        <CF.RowBetweenDiv gap={20}>
          <S.Button onClick={props.onClickUser}>일반</S.Button>
          <S.Button onClick={props.onClickHost}>호스트</S.Button>
        </CF.RowBetweenDiv>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}
