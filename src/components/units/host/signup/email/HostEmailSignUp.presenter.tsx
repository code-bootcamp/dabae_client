import * as S from "./HostEmailSignUp.styles";
import { CF } from "@/styles/commonComponentStyle";
import Checkbox from "../../../../../components/commons/signup-checkbox";

export default function HostEmailSignUpContainerUI(props: any) {
  console.log(props.formState.errors.phoneNumber?.message);
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Body>
        <S.Wrapper>
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
                  // onClick={props.onClickOverLapCheck}
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
                placeholder="호스트 명을 입력해주세요."
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
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
              {/* <CF.RowDiv gap={20}> */}
              <S.Input
                type="text"
                {...props.register("businessNumber")}
                placeholder="사업자 번호를 입력해주세요."
                // 사업자등록번호 (110-11-11111)
                // pattern="^(\d{3,3})+[-]+(\d{2,2})+[-]+(\d{5,5})"
                // minlength="12"
                // maxlength="12"
              />
              {/* <S.Button02
                disabled={
                  !/^(\d{3,3})+[-]+(\d{2,2})+[-]+(\d{5,5})$/.test(
                    props.watch("certNum")
                  )
                }
                type="button"
                onClick={props.onClickCert}
              >
                중복 확인
              </S.Button02>
            </CF.RowDiv> */}
              <S.Error>
                {props.formState.errors.businessNumber?.message}
              </S.Error>
            </CF.ColumnLeftDiv>
            <CF.ColumnLeftDiv>
              <CF.RowDiv gap={20}>
                <S.Input
                  type="text"
                  {...props.register("accountNumber")}
                  placeholder="계좌 번호를 입력해주세요."
                />
                <S.Button01
                  disabled={
                    !/^(\d{1,})(-(\d{1,})){1,}$/.test(
                      props.watch("accountNumber")
                    )
                  }
                  // onClick={props.onClickAccountCheck}
                  type="button"
                >
                  계좌 확인
                </S.Button01>
              </CF.RowDiv>
              <S.Error>{props.formState.errors.accountNumber?.message}</S.Error>
            </CF.ColumnLeftDiv>

            <CF.ColumnLeftDiv>
              <CF.RowDiv gap={20}>
                <S.Input
                  type="text"
                  {...props.register("phoneNumber")}
                  placeholder="휴대폰 번호를 입력해주세요."
                  // maxLength={13}
                  // onChange={handlePhone}
                  // ref={phoneRef}
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
                  type="button"
                  onClick={props.onClickCert}
                >
                  인증하기
                </S.Button01>
              </CF.RowDiv>
            )}
            {/* <CF.RowBetweenDiv>
            <CF.RowDiv>
              <Input
                type="text"
                register={props.register("birth")}
                placeholder="생년월일"
                width="100%"
                height="54px"
                borderRadius="10px"
              />
              <S.Text>년</S.Text>
              <Input
                type="text"
                width="100%"
                height="54px"
                borderRadius="10px"
              />
              <S.Text>월</S.Text>
              <Input
                type="text"
                width="100%"
                height="54px"
                borderRadius="10px"
              />
              <S.Text>일</S.Text>
              <S.Error>{props.formState.errors.birth?.message}</S.Error>
            </CF.RowDiv>
            <CF.RowRightDiv gap={15}>
              <S.RadioButton type="radio" name="radio-button" />
              <S.RadioLabel htmlFor="youtube">여성</S.RadioLabel>
              <S.RadioButton type="radio" name="radio-button" />
              <S.RadioLabel htmlFor="image">남성</S.RadioLabel>
            </CF.RowRightDiv>
          </CF.RowBetweenDiv> */}

            <Checkbox />
            <S.Button02 disabled={!props.formState.isValid}>
              회원가입
            </S.Button02>
          </CF.ColumnCenterDiv>
        </S.Wrapper>
      </S.Body>
    </form>
  );
}