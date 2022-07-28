import { gql } from "@apollo/client";

// 유저 삭제
export const DELETE_LOGIN_USER = gql`
  mutation ABC($inputPassword: String!) {
    deleteLoginUser(inputPassword: $inputPassword)
  }
`;

// 패스워드 변경
export const UPDATE_PASSWORD = gql`
  mutation ABC($newPassword: String!, $inputPassword: String!) {
    updatePassword(newPassword: $newPassword, inputPassword: $inputPassword)
  }
`;

// 닉네임 중복 체크
export const CHECK_NICKNAME = gql`
  mutation checkNickname($nickname: String!) {
    checkNickname(nickname: $nickname)
  }
`;

// 이미지 업로드
export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

// 유저 수정
export const UPDATE_USER = gql`
  mutation ($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      nickname
    }
  }
`;
