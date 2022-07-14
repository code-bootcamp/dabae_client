import { CF } from "@/styles/commonComponentStyle";
import * as S from "./EmailSignUp.styles";
import Checkbox from "../../../commons/signup-checkbox";

export default function EmailSignUpContainerPageUI(props: any) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <CF.ColumnCenterDiv>
        <S.Title>회원가입</S.Title>
      </CF.ColumnCenterDiv>
      <CF.ColumnCenterDiv gap={20}>
        <CF.ColumnLeftDiv>
          <CF.RowDiv gap={20}>
            <S.Input
              type="text"
              {...props.register("email")}
              placeholder="이메일을 입력해주세요."
            />
            <S.Button01
              disabled={
                !/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  props.watch("email")
                )
              }
              // onClick={props.onClickCheck}
              type="button"
            >
              중복 확인
            </S.Button01>
          </CF.RowDiv>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
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
            type="password"
            {...props.register("passwordCheck")}
            placeholder="비밀번호를 다시 입력해주세요."
          />
          <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
        </CF.ColumnLeftDiv>
        <CF.ColumnLeftDiv>
          <CF.RowDiv gap={20}>
            <S.Input
              type="text"
              {...props.register("nickname")}
              placeholder="닉네임을 입력해주세요."
            />
            <S.Button01
              disabled={!props.watch("nickname")}
              // onClick={props.onClickCheck}
              type="button"
            >
              중복 확인
            </S.Button01>
          </CF.RowDiv>
          <S.Error>{props.formState.errors.nickname?.message}</S.Error>
        </CF.ColumnLeftDiv>
        <CF.ColumnLeftDiv>
          <CF.RowDiv gap={20}>
            <S.Input
              type="text"
              // onChange={props.handleChange}
              // value={props.inputValue}
              {...props.register("phone")}
              placeholder="휴대폰 번호를 입력해주세요."
            />
            <S.Button01
              disabled={!/^\d{11}$/.test(props.watch("phone"))}
              onClick={props.onClickSend}
              type="button"
            >
              {props.isCert
                ? "인증 완료"
                : props.tokenToggle
                ? Math.floor(props.time / 60) +
                  ":" +
                  String(props.time % 60).padStart(2, "0")
                : "인증번호 전송"}
            </S.Button01>
          </CF.RowDiv>
          <S.Error>{props.formState.errors.phone?.message}</S.Error>
        </CF.ColumnLeftDiv>
        {props.tokenToggle && (
          <CF.RowDiv gap={20}>
            <S.Input
              type="text"
              {...props.register("certNum")}
              placeholder="인증번호 6자리를 입력해주세요."
            />
            <S.Button01
              disabled={!/^\d{6}$/.test(props.watch("certNum"))}
              // !props.formState.errors.certNum?.isValid
              // disabled={!props.formState.isValid}
              type="button"
              onClick={props.onClickCert}
            >
              인증하기
            </S.Button01>
          </CF.RowDiv>
        )}
        <Checkbox />
        <S.Button02 disabled={!props.formState.isValid || !props.isCert}>
          회원가입
        </S.Button02>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}
