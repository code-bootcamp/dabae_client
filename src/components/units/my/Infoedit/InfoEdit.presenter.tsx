import { isLogIn } from "@/src/components/commons/mockup/data";
import { Modal } from "antd";
import "antd/dist/antd.css";
import * as S from "./InfoEdit.styles";
import { IInfoEditPresenter } from "./InfoEdit.types";

export default function InfoEditPresenter(props: IInfoEditPresenter) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.ProfileInput ref={props.profileRef} type="file" />
        <S.TitleBox onClick={props.BackMyMove}>
          <S.Img src="/images/myArrow.svg" />
          <S.Title>내 정보 수정</S.Title>
        </S.TitleBox>
        <S.ProfileInner>
          <S.ProfileBox onClick={props.ProfileUpload}>
            {isLogIn ? (
              <S.ProfileTitleImg src={isLogIn.profilePicture} />
            ) : (
              <S.ProfileTitleImg src="/images/profile.png" />
            )}
            <S.ProfileImgBox>
              <S.ProfileImg src="/images/profileChange.svg" />
            </S.ProfileImgBox>
          </S.ProfileBox>
        </S.ProfileInner>
        <S.InputBox>
          <S.InputLabel>닉네임</S.InputLabel>
          <S.NameInput
            onChange={props.changeNickname}
            type="text"
            defaultValue={props.data?.fetchLoginUser.nickname}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputLabel>이메일</S.InputLabel>
          <S.Input
            type="text"
            defaultValue={props.data?.fetchLoginUser.email}
            readOnly
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputLabel>휴대폰 번호</S.InputLabel>
          <S.Input
            type="text"
            defaultValue={props.data?.fetchLoginUser.phone}
            readOnly
          />
        </S.InputBox>
        <S.PasswordInner>
          <S.InputLabel>비밀번호</S.InputLabel>
          <S.PasswordBox>
            <S.PasswordInputBox>
              <S.PasswordInput type="password" readOnly />
            </S.PasswordInputBox>
            <S.PasswordButton onClick={props.onToggleModal}>
              변경하기
            </S.PasswordButton>
            {props.isModalVisible && (
              <Modal
                style={{ padding: "20px 40px", boxSizing: "border-box" }}
                onCancel={props.onToggleModal}
                visible={true}
                footer={
                  <S.ModalButton onClick={props.changeNewPassword}>
                    변경하기
                  </S.ModalButton>
                }
              >
                <S.ModalInner>
                  <S.ModalInputBox>
                    <S.ModalInput
                      onChange={props.currentPassword}
                      type="password"
                      placeholder="기존 비밀번호를 입력해주세요 :)"
                    />
                  </S.ModalInputBox>
                  <S.ModalInputBox>
                    <S.ModalInput
                      onChange={props.onChageNewPassword}
                      type="password"
                      placeholder="새 비밀번호를 입력해주세요 :)"
                    />
                    <S.ErrorText>{props.passwordNewMessage}</S.ErrorText>
                  </S.ModalInputBox>
                  <S.ModalInputBox>
                    <S.ModalInput
                      onChange={props.onChageNewPasswordConfirm}
                      type="password"
                      placeholder="새 비밀번호를 확인해주세요 :)"
                    />
                    <S.ErrorText>{props.passwordConfirmNewMessage}</S.ErrorText>
                  </S.ModalInputBox>
                </S.ModalInner>
              </Modal>
            )}
          </S.PasswordBox>
        </S.PasswordInner>
        <S.GenderInner>
          <S.GenderInput type="radio" name="gener" id="man" />
          <S.GenderInput type="radio" name="gener" id="woman" />
          <S.GenderBox>
            <S.GenderButton
              htmlFor="man"
              onClick={() => props.clickChagneGender(true)}
              active={props.gender === true}
            >
              남자
            </S.GenderButton>
          </S.GenderBox>
          <S.GenderBox>
            <S.GenderButton
              htmlFor="woman"
              onClick={() => props.clickChagneGender(false)}
              active={props.gender === false}
            >
              여자
            </S.GenderButton>
          </S.GenderBox>
        </S.GenderInner>
        <S.GenderInner>
          <S.ChangeButton onClick={props.changeNewUser}>
            변경하기
          </S.ChangeButton>
        </S.GenderInner>
      </S.Inner>
    </S.Wrapper>
  );
}
