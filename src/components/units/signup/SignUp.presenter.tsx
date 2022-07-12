import { CF } from "@/styles/commonComponentStyle";
import * as S from "./SignUp.styles";
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
            <S.Input
              type="text"
              {...props.register("name")}
              placeholder="이름을 입력해주세요."
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <S.Input
              type="text"
              {...props.register("nickName")}
              placeholder="닉네임을 입력해주세요."
            />
            <S.Error>{props.formState.errors.nickName?.message}</S.Error>
          </CF.ColumnLeftDiv>
          <CF.ColumnLeftDiv>
            <CF.RowDiv gap={20}>
              <S.Input
                type="text"
                {...props.register("phoneNumber")}
                placeholder="휴대폰 번호를 입력해주세요."
              />
              <S.Button01
                disabled={!/^\d{11}$/.test(props.watch("phoneNumber"))}
                onClick={props.onClickSend}
                type="button"
              >
                {props.tokenToggle
                  ? Math.floor(props.time / 60) +
                    ":" +
                    String(props.time % 60).padStart(2, "0")
                  : "인증번호 전송"}
              </S.Button01>
            </CF.RowDiv>
            <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
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
          {/* <CF.RowBetweenDiv gap={30}>
            <CF.RowDiv>
              <Input
                type="date"
                register={props.register("birth")}
                placeholder="생년월일을 입력해주세요."
                width="100%"
                height="54px"
                borderRadius="10px"
              />
              <S.Error>{props.formState.errors.birth?.message}</S.Error>
            </CF.RowDiv>
            <CF.RowCenterDiv gap={10}>
              <S.RadioButton type="radio" name="radio-button" />
              <S.RadioLabel htmlFor="youtube">여성</S.RadioLabel>
              <S.RadioButton type="radio" name="radio-button" />
              <S.RadioLabel htmlFor="image">남성</S.RadioLabel>
            </CF.RowCenterDiv>
          </CF.RowBetweenDiv> */}
          <Checkbox />
          <S.Button02 disabled={!props.formState.isValid || !props.cert}>
            회원가입
          </S.Button02>
        </CF.ColumnCenterDiv>
      </S.Wrapper>
    </form>
  );
}
