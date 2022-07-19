import { CF } from "@/styles/commonComponentStyle";
import * as S from "./FindPassword.styles";

export default function FindPasswordPageUI(props: any) {
  console.log(props.formState.errors.phoneNumber?.message);
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickCert)}>
      <CF.ColumnDiv gap={36}>
        <CF.ColumnCenterDiv>
          <S.Title>비밀번호 찾기</S.Title>
        </CF.ColumnCenterDiv>
        <CF.ColumnCenterDiv>
          <CF.ColumnLeftDiv>
            <S.Input
              type="text"
              {...props.register("email")}
              placeholder="이메일"
            />
            {props.formState.errors.email?.message ? (
              <S.Error>{props.formState.errors.email?.message}</S.Error>
            ) : (
              <S.Message>
                재설정하려는 비밀번호의 이메일을 입력해 주세요.
              </S.Message>
            )}
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
                  {props.isCert ? "인증 완료" : "휴대폰 인증"}
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
          </CF.ColumnLeftDiv>

          {/* <S.Button01
            disabled={!props.formState.isValid || props.tokenToggle}
            onClick={props.onClickSend}
            type="button"
          >
            {props.tokenToggle
              ? Math.floor(props.time / 60) +
                ":" +
                String(props.time % 60).padStart(2, "0")
              : "휴대폰 인증"}
          </S.Button01> */}
        </CF.ColumnCenterDiv>

        <CF.ColumnDiv gap={20}>
          <S.Input
            type="password"
            name="password"
            placeholder="새 비밀번호를 입력해주세요."
            value={props.password}
            onChange={props.handleChange}
          />
          <S.Button02 type="submit" onClick={props.onClickChangePassword}>
            비밀번호 변경
          </S.Button02>
        </CF.ColumnDiv>
      </CF.ColumnDiv>
    </S.Wrapper>
  );
}
