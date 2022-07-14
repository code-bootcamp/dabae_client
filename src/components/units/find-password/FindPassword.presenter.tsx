import { CF } from "@/styles/commonComponentStyle";
import * as S from "./FindPassword.styles";

export default function FindPasswordUI(props: any) {
  console.log(props.formState.errors.phoneNumber?.message);
  return (
    <form onSubmit={props.handleSubmit(props.onClickCert)}>
      <S.Wrapper>
        <CF.ColumnDiv gap={36}>
          <CF.ColumnCenterDiv>
            <S.Title>비밀번호 찾기</S.Title>
          </CF.ColumnCenterDiv>
          <CF.ColumnDiv gap={150}>
            <div>
              <S.Input
                type="text"
                {...props.register("email")}
                placeholder="아이디(이메일)"
              />
              <CF.ColumnLeftDiv>
                {props.formState.errors.email?.message ? (
                  <S.Error>{props.formState.errors.email?.message}</S.Error>
                ) : (
                  <S.Message>
                    재설정하려는 비밀번호의 아이디(이메일)를 입력해 주세요.
                  </S.Message>
                )}
                <S.Input
                  type="text"
                  {...props.register("phoneNumber")}
                  placeholder="휴대폰 번호"
                />
                <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
              </CF.ColumnLeftDiv>
            </div>
            <S.Button01
              disabled={!props.formState.isValid || props.tokenToggle}
              onClick={props.onClickSend}
              type="button"
            >
              {props.tokenToggle
                ? Math.floor(props.time / 60) +
                  ":" +
                  String(props.time % 60).padStart(2, "0")
                : "휴대폰 인증"}
            </S.Button01>
          </CF.ColumnDiv>
          {props.tokenToggle && (
            <CF.RowDiv gap={20}>
              <S.Input
                type="text"
                {...props.register("certNum")}
                placeholder="인증번호를 입력해주세요."
              ></S.Input>
              <S.Button02
                disabled={!/^\d{6}$/.test(props.watch("certNum"))}
                // !props.formState.errors.certNum?.isValid
                // disabled={!props.formState.isValid}
                type="button"
                onClick={props.onClickCert}
              >
                인증하기
              </S.Button02>
            </CF.RowDiv>
          )}
          {/* <S.Input 
          type="password"
          name="password"
          value={props.password}
          onChange={props.handleChange}
          />
          <S.Button01 type="submit">비밀번호 변경</S.Button01> */}
        </CF.ColumnDiv>
      </S.Wrapper>
    </form>
  );
}
