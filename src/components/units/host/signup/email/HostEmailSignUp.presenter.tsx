import * as S from "./HostEmailSignUp.styles";
import { CF } from "@/styles/commonComponentStyle";
import Checkbox from "../../../../commons/signup-checkbox";
import { HostEmailSignUpPageUIProps } from "./HostEmailSignUp.types";

export default function HostEmailSignUpPageUI(
  props: HostEmailSignUpPageUIProps
) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <CF.ColumnCenterDiv>
        <S.Title>호스트 회원가입</S.Title>
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
              onClick={props.onClickEmailDupCheck}
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
              placeholder="호스트 명을 입력해주세요."
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
        {/* <CF.ColumnLeftDiv>
          <CF.RowDiv gap={20}>
            <S.Input
              type="text"
              {...props.register("accountNumber")}
              placeholder="계좌 번호를 입력해주세요."
            />
            <S.Button01
              disabled={
                !/^(\d{1,})(-(\d{1,})){1,}$/.test(props.watch("accountNumber"))
              }
              // onClick={props.onClickAccountCheck}
              type="button"
            >
              계좌 확인
            </S.Button01>
          </CF.RowDiv>
          <S.Error>{props.formState.errors.accountNumber?.message}</S.Error>
        </CF.ColumnLeftDiv> */}
        <CF.ColumnLeftDiv>
          <CF.RowDiv gap={20}>
            <S.Input
              type="text"
              {...props.register("phone")}
              placeholder="휴대폰 번호를 입력해주세요."
            />
            <S.Button01
              disabled={
                !/^010-?([0-9]{4})-?([0-9]{4})$/.test(props.watch("phone"))
              }
              onClick={props.onClickSendCert}
              type="button"
            >
              {props.isCert ? "인증 완료" : "인증번호 전송"}
            </S.Button01>
          </CF.RowDiv>
          <S.Error>{props.formState.errors.phone?.message}</S.Error>
        </CF.ColumnLeftDiv>
        {props.tokenToggle && (
          <CF.RowDiv gap={20}>
            <S.InputBox>
              <S.Input
                type="text"
                {...props.register("inputToken")}
                placeholder="인증번호 6자리를 입력해주세요."
              />
              <S.Timer>
                {props.isCert
                  ? ""
                  : Math.floor(props.time / 60) +
                    ":" +
                    String(props.time % 60).padStart(2, "0")}
              </S.Timer>
            </S.InputBox>
            <S.Button01
              disabled={!/^\d{6}$/.test(props.watch("inputToken"))}
              type="button"
              onClick={props.onClickCert}
            >
              인증하기
            </S.Button01>
          </CF.RowDiv>
        )}
        <Checkbox setValue={props.setValue} trigger={props.trigger} />
        <S.Button02
          disabled={
            !props.formState.isValid || !props.isCert || !props.isEmailValid
          }
        >
          회원가입
        </S.Button02>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}
