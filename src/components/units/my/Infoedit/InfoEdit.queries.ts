import { gql } from "@apollo/client";

// 로그인 정보
export const PROFILE_INFOR = gql`
  query {
    fetchLoginUser {
      id
      email
      nickname
      phone
      gender
      birth
      profileImageURL
    }
  }
`;

// 유저 수정
export const UPDATE_USER = gql`
  mutation ($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
    }
  }
`;

// 패스워드 수정
export const PASSWORD_EDIT = gql`
  mutation ($newPassword: String!, $inputPassword: String!) {
    updatePassword(newPassword: $newPassword, inputPassword: $inputPassword)
  }
`;

// 프로필 사진 변경
export const UPOLAD_PROFILE = gql`
  mutation ($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;
