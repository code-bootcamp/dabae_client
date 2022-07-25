import { CF } from "@/styles/commonComponentStyle";
import * as S from "./UserToHostSignUp.styles";
import { IUserToHostSignUpPageUIProps } from "./UserToHostSignUp.types";

export default function UserToHostSignUpPageUI(
  props: IUserToHostSignUpPageUIProps
) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <CF.ColumnCenterDiv>
        <S.Title>호스트 회원가입</S.Title>
      </CF.ColumnCenterDiv>
      <CF.ColumnCenterDiv gap={10}>
        <CF.ColumnLeftDiv>
          <S.DefaultInput
            readOnly
            type="text"
            defaultValue={props.data?.fetchLoginUser.email}
          />
          <S.Error></S.Error>
        </CF.ColumnLeftDiv>
        <CF.ColumnLeftDiv>
          <S.DefaultInput
            readOnly
            type="text"
            defaultValue={props.data?.fetchLoginUser.nickname}
          />
          <S.Error></S.Error>
        </CF.ColumnLeftDiv>
        <CF.ColumnLeftDiv>
          <S.DefaultInput
            readOnly
            type="text"
            defaultValue={props.data?.fetchLoginUser.phone}
          />
          <S.Error></S.Error>
        </CF.ColumnLeftDiv>
        <CF.ColumnLeftDiv>
          <S.Input
            type="password"
            {...props.register("password")}
            placeholder="비밀번호를 입력해주세요."
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </CF.ColumnLeftDiv>
        <CF.ColumnLeftDiv>
          <S.Input
            type="text"
            {...props.register("businessName")}
            placeholder="상호명을 입력해주세요."
          />
          <S.Error>{props.formState.errors.businessName?.message}</S.Error>
        </CF.ColumnLeftDiv>
        <CF.ColumnLeftDiv>
          <S.Input
            type="text"
            {...props.register("businessNumber")}
            placeholder="사업자 번호를 입력해주세요."
          />
          <S.Error>{props.formState.errors.businessNumber?.message}</S.Error>
        </CF.ColumnLeftDiv>
        <S.SignUpButton disabled={!props.formState.isValid}>
          회원가입
        </S.SignUpButton>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}
