import { CF } from "@/styles/commonComponentStyle";
import Button from "../../commons/button/Button";
import Input from "../../commons/input/Input";
import * as S from "./FindPassword.styles";

export default function FindPasswordUI(props: any) {
  console.log(props.formState.errors.phoneNumber?.message);
  return (
    <S.Wrapper>
      <CF.ColumnDiv gap={36}>
        <CF.RowCenterDiv>
          <S.Title>비밀번호 찾기</S.Title>
        </CF.RowCenterDiv>
        <CF.ColumnDiv gap={150}>
          <div>
            <Input
              type="text"
              register={props.register("email")}
              placeholder="아이디(이메일)"
              width="100%"
              height="60px"
              borderRadius="10px"
            />

            <CF.ColumnLeftDiv>
              {props.formState.errors.email?.message ? (
                <S.Error>{props.formState.errors.email?.message}</S.Error>
              ) : (
                <S.Message>
                  재설정하려는 비밀번호의 아이디(이메일)를 입력해 주세요.
                </S.Message>
              )}
              <Input
                type="text"
                register={props.register("phoneNumber")}
                placeholder="휴대폰 번호"
                width="100%"
                height="60px"
                borderRadius="10px"
              />
              <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
            </CF.ColumnLeftDiv>
          </div>
          <Button
            disabled={!props.formState.isValid}
            onClick={props.onClickSend}
            type="button"
            height="60px"
          >
            휴대폰 인증
          </Button>
        </CF.ColumnDiv>
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
            <S.Button
              disabled={!props.formState.isValid}
              type="button"
              onClick={props.onClickCert}
            >
              인증하기
            </S.Button>
          </CF.RowDiv>
        )}
      </CF.ColumnDiv>
    </S.Wrapper>
  );
}
