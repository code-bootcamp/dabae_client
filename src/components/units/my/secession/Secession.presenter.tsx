import * as S from "./Secession.styles";
import { ISeceesionPresenter } from "./Secession.types";

export default function SecessionPresenter(props: ISeceesionPresenter) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.TitleBox>
          <S.Img
            onClick={props.BackMyMove}
            src="/images/myArrow.svg"
            alt="뒤로가기"
          />
          <S.Title>회원 탈퇴</S.Title>
        </S.TitleBox>
        <S.TextBox>
          <S.Text>
            회원을 탈퇴하시면 다배 서비스를 이용하셨던 모든 데이터는 삭제되며,
            환불 및 복구가 불가능합니다.
          </S.Text>
        </S.TextBox>
        <S.InputBox>
          <S.Input type="password" placeholder="비밀번호 재확인" />
        </S.InputBox>
        <S.CheckBox>
          <S.CheckInput id="check" type="checkbox" />
          <S.CheckLabel htmlFor="check">
            <S.CheckLabelB>위 내용들을 모두 확인</S.CheckLabelB>
            하였으며, 이에 동의합니다.
          </S.CheckLabel>
        </S.CheckBox>
        <S.Button>탈퇴하기</S.Button>
      </S.Inner>
    </S.Wrapper>
  );
}
