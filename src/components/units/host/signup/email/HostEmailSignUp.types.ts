export interface HostEmailSignUpPageUIProps {
  register: any;
  handleSubmit: any;
  formState: any;
  tokenToggle: boolean;
  time: number;
  watch: any;
  isCert: boolean;
  isEmailValid: boolean;
  setValue: any;
  trigger: any;
  isNicknameValid: boolean;
  onClickSignUp: (data: any) => void;
  onClickSendCert: () => void;
  onClickCert: () => void;
  onClickEmailDupCheck: () => void;
  onClickNicknameDupCheck: () => void;
}
