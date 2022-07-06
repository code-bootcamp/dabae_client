import theme from "@/styles/theme";
import styled from "@emotion/styled";

export default function MyContainer() {
  return (
    <Wrapper>
      <ProFileInner>
        <ProfileImg src="/images/profile.png" alt="프로필" />
        <ProfileBox>
          <ProfileTitle>아이디 대원</ProfileTitle>
          <ProfileText>이메일 계정</ProfileText>
        </ProfileBox>
      </ProFileInner>
      <ProfileContentInner>
        <ProfileContentBox href="/">
          <ProfileContentTitle>결제내역</ProfileContentTitle>
        </ProfileContentBox>
        <ProfileContentBox href="/">
          <ProfileContentTitle>호스트지원</ProfileContentTitle>
        </ProfileContentBox>
        <ProfileContentBox href="/">
          <ProfileContentTitle>내 정보 수정</ProfileContentTitle>
        </ProfileContentBox>
        <ProfileContentBox href="/">
          <ProfileContentTitle>회원 탈퇴</ProfileContentTitle>
        </ProfileContentBox>
        <ProfileContentBox href="/">
          <ProfileContentTitle>이용 및 약관</ProfileContentTitle>
        </ProfileContentBox>
      </ProfileContentInner>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
`;

export const ProFileInner = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9e9e9;
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ProfileTitle = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: rgb(51, 51, 51);
  ${theme.fontSizes.base};
  font-weight: bold;
`;

export const ProfileText = styled.p`
  margin: 0;
  color: rgb(170, 170, 170);
  ${theme.fontSizes.small};
  font-weight: 500;
`;

export const ProfileContentInner = styled.div`
  padding: 20px 0;
`;

export const ProfileContentBox = styled.a``;

export const ProfileContentTitle = styled.p`
  margin: 0;
  padding: 10px;
  ${theme.fontSizes.base};
  font-weight: bold;
  color: rgb(51, 51, 51);
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #e9e9e9;
  }
`;
