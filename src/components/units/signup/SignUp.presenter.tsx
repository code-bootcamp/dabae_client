import { CF } from "@/styles/commonComponentStyle";
import * as S from "./SignUp.styles";
import Button from "../../commons/button/Button";
import Input from "../../commons/input/Input";
import Checkbox from "../../commons/signup-checkbox";

export default function SignUpContainerPageUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Wrapper>
        <CF.ColumnCenterDiv>
          <S.Title>회원가입</S.Title>
        </CF.ColumnCenterDiv>
        <CF.ColumnCenterDiv gap={20}>
          <CF.ColumnLeftDiv>
            <CF.RowDiv gap={20}>
              <Input
                type="text"
                register={props.register("email")}
                placeholder="이메일을 입력해주세요."
                width="100%"
                height="60px"
                borderRadius="10px"
              />
              <S.Button3
                disabled={
                  !/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    props.watch("email")
                  )
                }
                // onClick={props.onClickCheck}
                type="button"
              >
                중복 확인
              </S.Button3>
            </CF.RowDiv>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <Input
              type="password"
              register={props.register("password")}
              placeholder="비밀번호를 입력해주세요."
              width="100%"
              height="60px"
              borderRadius="10px"
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <Input
              type="password"
              register={props.register("passwordCheck")}
              placeholder="비밀번호를 다시 입력해주세요."
              width="100%"
              height="60px"
              borderRadius="10px"
            />
            <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <Input
              type="text"
              register={props.register("name")}
              placeholder="이름을 입력해주세요."
              width="100%"
              height="60px"
              borderRadius="10px"
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <Input
              type="text"
              register={props.register("nickName")}
              placeholder="닉네임을 입력해주세요."
              width="100%"
              height="60px"
              borderRadius="10px"
            />
            <S.Error>{props.formState.errors.nickName?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <CF.RowDiv gap={20}>
              <Input
                type="text"
                register={props.register("phoneNumber")}
                placeholder="휴대폰 번호를 입력해주세요."
                width="100%"
                height="60px"
                borderRadius="10px"
              />
              <S.Button3
                disabled={!/^\d{11}$/.test(props.watch("phoneNumber"))}
                onClick={props.onClickSend}
                type="button"
              >
                {props.tokenToggle
                  ? Math.floor(props.time / 60) +
                    ":" +
                    String(props.time % 60).padStart(2, "0")
                  : "인증번호 전송"}
              </S.Button3>
            </CF.RowDiv>
            <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
          </CF.ColumnLeftDiv>
          {props.tokenToggle && (
            <CF.RowDiv gap={20}>
              <Input
                type="text"
                register={props.register("certNum")}
                placeholder="인증번호를 입력해주세요."
                width="100%"
                height="60px"
                borderRadius="10px"
              />
              <S.Button4
                disabled={!/^\d{6}$/.test(props.watch("certNum"))}
                // !props.formState.errors.certNum?.isValid
                // disabled={!props.formState.isValid}
                type="button"
                onClick={props.onClickCert}
              >
                인증하기
              </S.Button4>
            </CF.RowDiv>
          )}
          <Checkbox />
          <Button
            disabled={!props.formState.isValid}
            width="100%"
            height="60px"
          >
            회원가입
          </Button>
        </CF.ColumnCenterDiv>
      </S.Wrapper>
    </form>
  );
}
