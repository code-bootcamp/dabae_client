export interface UserEmailSignUpPageUIProps {
  register: any;
  handleSubmit: any;
  formState: any;
  tokenToggle: boolean;
  time: number;
  watch: any;
  isCert: boolean;
  isEmailValid: boolean;
  isNicknameValid: boolean;
  setValue: any;
  trigger: any;
  onClickSignUp: (data: any) => void;
  onClickSendCert: () => void;
  onClickCert: () => void;
  onClickEmailDupCheck: () => void;
  onClickNicknameDupCheck: () => void;
}
