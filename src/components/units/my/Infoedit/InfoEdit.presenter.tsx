import { isLogIn } from "@/src/components/commons/mockup/data";
import { Modal } from "antd";
import "antd/dist/antd.css";
import * as S from "./InfoEdit.styles";
import { IInfoEditPresenter } from "./InfoEdit.types";

export default function InfoEditPresenter(props: IInfoEditPresenter) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.TitleBox>
          <S.ProfileInput ref={props.profileRef} type="file" />
          <S.Img onClick={props.BackMyMove} src="/images/myArrow.svg" />
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
          <S.NameInput type="text" defaultValue={isLogIn.nickName} />
        </S.InputBox>
        <S.InputBox>
          <S.InputLabel>휴대폰 번호</S.InputLabel>
          <S.Input type="text" defaultValue={isLogIn.phone} readOnly />
        </S.InputBox>
        <S.PasswordInner>
          <S.InputLabel>비밀번호</S.InputLabel>
          <S.PasswordBox>
            <S.PasswordInputBox>
              <S.PasswordInput defaultValue={isLogIn.password} readOnly />
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
                  <S.ModalButton onClick={props.onToggleModal}>
                    변경하기
                  </S.ModalButton>
                }
              >
                <S.ModalInner>
                  <S.InputBox>
                    <S.ModalInput
                      type="password"
                      placeholder="기존 비밀번호를 입력해주세요 :)"
                    />
                  </S.InputBox>
                  <S.InputBox>
                    <S.ModalInput
                      type="password"
                      placeholder="새 비밀번호를 입력해주세요 :)"
                    />
                  </S.InputBox>
                  <S.InputBox>
                    <S.ModalInput
                      type="password"
                      placeholder="새 비밀번호를 확인해주세요 :)"
                    />
                  </S.InputBox>
                </S.ModalInner>
              </Modal>
            )}
          </S.PasswordBox>
        </S.PasswordInner>
        <S.InputBox>
          <S.InputLabel>이메일</S.InputLabel>
          <S.Input type="text" defaultValue={isLogIn.email} readOnly />
        </S.InputBox>
        <S.InputBox>
          <S.InputLabel>생년월일</S.InputLabel>
          <S.Input type="text" defaultValue={isLogIn.birth} readOnly />
        </S.InputBox>
        <S.GenderInner>
          <S.GenderBox>
            {isLogIn.gender === true ? (
              <S.ActiveGenderButton disabled>남</S.ActiveGenderButton>
            ) : (
              <S.GenderButton disabled>남</S.GenderButton>
            )}
          </S.GenderBox>
          <S.GenderBox>
            {isLogIn.gender === false ? (
              <S.ActiveGenderButton disabled>여</S.ActiveGenderButton>
            ) : (
              <S.GenderButton disabled>여</S.GenderButton>
            )}
          </S.GenderBox>
        </S.GenderInner>
      </S.Inner>
    </S.Wrapper>
  );
}
