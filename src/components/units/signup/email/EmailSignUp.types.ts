export interface EmailSignUpContainerPageUIProps {
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSignUp: (data: any) => void;
  onClickSendCert: () => void;
  tokenToggle: boolean;
  time: number;
  watch: any;
  onClickCert: () => void;
  onClickEmailDupCheck: () => void;
  isCert: boolean;
  isEmailValid: boolean;
}
