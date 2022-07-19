import { CF } from "@/styles/commonComponentStyle";
import * as S from "./FindPassword.styles";
import { IFindPasswordPageUIProps } from "./FindPassword.types";

export default function FindPasswordPageUI(props: IFindPasswordPageUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickCert)}>
      <CF.ColumnDiv gap={36}>
        <CF.ColumnCenterDiv>
          <S.Title>비밀번호 찾기</S.Title>
        </CF.ColumnCenterDiv>
        <CF.ColumnLeftDiv gap={60}>
          {props.visible ? (
            <>
              <CF.ColumnLeftDiv gap={10}>
                <CF.ColumnLeftDiv>
                  {/* <S.Input readOnly type="text" defaultValue={props.email} /> */}
                  <S.Error></S.Error>
                </CF.ColumnLeftDiv>
                <CF.ColumnLeftDiv>
                  <S.Input
                    type="password"
                    {...props.register("newPassword")}
                    placeholder="새 비밀번호를 입력해주세요."
                  />
                  <S.Error>
                    {props.formState.errors.newPassword?.message}
                  </S.Error>
                </CF.ColumnLeftDiv>
                <CF.ColumnLeftDiv>
                  <S.Input
                    type="password"
                    {...props.register("newPasswordCheck")}
                    placeholder="새 비밀번호를 다시 입력해주세요."
                  />
                  <S.Error>
                    {props.formState.errors.newPasswordCheck?.message}
                  </S.Error>
                </CF.ColumnLeftDiv>
                <S.PwChangeButton
                  disabled={!props.formState.isValid}
                  onClick={props.onClickChangePassword}
                >
                  비밀번호 변경
                </S.PwChangeButton>
              </CF.ColumnLeftDiv>
            </>
          ) : (
            <>
              <CF.ColumnLeftDiv gap={5}>
                <CF.RowDiv gap={20}>
                  <S.Input
                    type="text"
                    {...props.register("phone")}
                    placeholder="휴대폰 번호를 입력해주세요."
                  />
                  <S.CertButton
                    disabled={
                      !/^010-?([0-9]{4})-?([0-9]{4})$/.test(
                        props.watch("phone")
                      )
                    }
                    onClick={props.onClickSendCert}
                    type="button"
                  >
                    {props.isCert ? "인증 완료" : "휴대폰 인증"}
                  </S.CertButton>
                </CF.RowDiv>
                <S.Error>{props.formState.errors.phone?.message}</S.Error>
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
                    <S.CertButton
                      disabled={!/^\d{6}$/.test(props.watch("inputToken"))}
                      type="button"
                      onClick={props.onClickCert}
                    >
                      인증하기
                    </S.CertButton>
                  </CF.RowDiv>
                )}
              </CF.ColumnLeftDiv>
            </>
          )}
        </CF.ColumnLeftDiv>
      </CF.ColumnDiv>
    </S.Wrapper>
  );
}
