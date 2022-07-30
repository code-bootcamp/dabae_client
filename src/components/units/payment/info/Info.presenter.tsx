import { TimeAmPm, TimeJustDigit } from "@/src/commons/libraries/utils";
import Payment from "@/src/components/commons/payment/Payment.container";
import { Modal } from "antd";
import "antd/dist/antd.css";
import * as S from "./Info.styles";
import { IInfoPresenter } from "./Info.types";

export default function InfoPresenter(props: IInfoPresenter) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>결제</S.Title>
      </S.TitleBox>
      <S.SubTitleBox>
        <S.SubTitle>원데이 클래스 정보</S.SubTitle>
        <S.ClassInner>
          <S.ClassImg
            src={`https://storage.googleapis.com/${props.data?.fetchCourse.imageURLs[0].imageURLs}`}
          />
          <S.ClassTitleInner>
            <S.ClassTitleBox>
              <S.ClassTitle>{props.data?.fetchCourse.name}</S.ClassTitle>
            </S.ClassTitleBox>
            <S.ClassTitleBox>
              <S.ClassTitle>{`${TimeAmPm(
                props.courseTime.courseStartTime
              )} ~ ${TimeJustDigit(
                props.courseTime.courseEndTime
              )}`}</S.ClassTitle>
            </S.ClassTitleBox>
            {/* <S.RatesBox>
              <S.Rates disabled value={paymentData.rate} />
              <S.Review>({paymentData.review})</S.Review>
            </S.RatesBox> */}
          </S.ClassTitleInner>
        </S.ClassInner>
      </S.SubTitleBox>
      <S.SubTitleBox>
        <S.SubTitle>결제수단</S.SubTitle>
        <S.PaymentWayInner>
          <S.PaymentInput id="payment" type="radio" />
          <S.PaymentInputLabel htmlFor="payment">
            신용/체크카드
          </S.PaymentInputLabel>
        </S.PaymentWayInner>
      </S.SubTitleBox>
      <S.SubTitleBox>
        <S.SubTitle>할인 및 포인트</S.SubTitle>
        <S.EnergyInner>
          <S.Energy>포인트</S.Energy>
          <S.EnergyLine />
          <S.Energy>
            보유{" "}
            <S.EnergyB>{`${props.userData?.fetchLoginUser?.point?.toLocaleString()} P`}</S.EnergyB>
          </S.Energy>
        </S.EnergyInner>
        <S.EnergyInputBox>
          <S.EnergyInput
            placeholder={`${props.userData?.fetchLoginUser?.point?.toLocaleString()} P`}
          />
          <S.EnergyButton>모두 사용</S.EnergyButton>
        </S.EnergyInputBox>
        <S.PointInner>
          <S.PointText>
            포인트는 100P 부터 사용가능합니다.
            <br /> <br />
            포인트를 사용하여 결제한 경우 개별 취소가 불가합니다.
            <br />{" "}
          </S.PointText>
        </S.PointInner>
      </S.SubTitleBox>
      <S.SubTitleBox>
        <S.TotalPaymentInner>
          <S.SubTitle>총 결제 금액</S.SubTitle>
          <S.TotalPayment>{`${props.currentPrice?.toLocaleString()} 원`}</S.TotalPayment>
        </S.TotalPaymentInner>
      </S.SubTitleBox>
      <S.SubTitleBox>
        <S.AgreementInner>
          <S.AgreementTextBox onClick={props.onAgreeModal}>
            <S.AgreementText>개인정보 제 3자 제공 동의</S.AgreementText>
            <S.AgreementTextButton>보기</S.AgreementTextButton>
          </S.AgreementTextBox>
          {props.isModalVisible.agree && (
            <Modal
              style={{ padding: "20px 40px", boxSizing: "border-box" }}
              onCancel={props.onAgreeModal}
              visible={true}
              footer={<></>}
            >
              <S.ModalInner>
                <S.ModalContentHeader>
                  결제 대행 서비스 이용약관
                </S.ModalContentHeader>
                <S.ModalContentBox>
                  <S.ModalContent>
                    개인정보처리방침 개인정보 수집 및 이용 안내
                    <br />
                    주식회사 프렌트립(이하 “회사”)는 회원님의 개인정보를
                    보호하기 위해 최선을 다하고 있습니다.
                    <br />
                    이를 위해서 회사는 개인정보의 보호와 관련하여 ‘정보통신망
                    이용촉진 및 정보보호 등에 관한 법률’, ‘개인정보 보호법’ 등
                    개인정보와 관련된 법령을 준수하고 있습니다.
                    <br />
                    1. 수집하는 개인정보의 항목 회사는 이름, 이메일, 나이, 성별,
                    서비스 이용기록, 결제 및 환불 기록, 생년월일, 휴대폰번호,
                    관심분야 등에 관한 정보를 수집합니다.
                    <br />
                    서비스를 이용하는 과정에서 방문일시, 사용이력, 기기정보,
                    접속로그, IP주소 등이 자동으로 생성·수집 될 수 있습니다.
                    <br />
                    회사는 회원가입, 구매 등 서비스 제공을 위한 최소한의 범위
                    내에서 이용자의 동의 하에 개인정보를 수집하며, 수집한 모든
                    개인정보는 고지한 목적 범위 내에서만 이용됩니다.
                    <br />
                    1) 회원 가입 시 - (필수) 아이디(E-MAIL), 비밀번호,
                    휴대폰번호, 닉네임 - (선택) 생년월일, 성별, 연계정보(CI) 2)
                    판매 회원 가입 시 - (필수) 호스트명, 이름, 아이디, 비밀번호,
                    E-MAIL, 사업자등록번호, 주민등록증, 담당자 이름, 휴대폰번호,
                    주소, 호스트 약력, 은행명, 예금주, 계좌번호 - (선택)
                    호스트등록경로, 프로필 사진 3) 상품 구매 시 - (필수)
                    핸드폰번호, 신용카드 정보, 은행계좌 정보, 결제기록 등의 정보
                    - (선택) 배송지 정보: 수령인, 연락처, 주소지 - (선택) 탑승자
                    이름, 동반인정보(성명, 이외 서비스의 유형에 따라, 추가적인
                    정보가 수집될 수 있습니다.
                    <br />
                    (여행상품) 4) 모바일 사용 시 - 프립 앱 버전, OS버전 (iOS,
                    안드로이드) - 위치정보 (별도 저장없이 앱에서 사용) 5) 기타 -
                    서비스 이용과정에서 자동 수집 정보 : 회원ID, IP Address,
                    쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록, 기기정보,
                    ADID, IDFA, 위치정보 -고객 분쟁처리 및 상담 진행 시 :
                    상담내역, 채팅(대화)내역, 서비스 이용기록, 결제 및 환불 기록
                    6) 구독회원 - E-MAIL, 성별 2. 개인정보의 수집 및 이용목적
                    회사는 회원의 식별·확인, 회원가입 의사 확인, 중복가입 여부
                    확인, 만14세 미만 여부 확인, 법정대리인의 동의 처리, 계약의
                    체결·이행·관리, 주문상품의 배송 상태 통지, 결제 및 환불,
                    통계분석, 구매 성향 분석, 서비스 개선, 민원 기타 문의 사항
                    처리, 부정이용에 대한 조사 및 대응, 고지사항 전달, 청구서
                    등의 발송, 법령상 의무 이행, 사은/판촉행사 등 각종 이벤트,
                    개인 맞춤형 서비스 제공, 새로운 상품 기타 행사 관련 정보
                    안내 및 마케팅 활동, 이메일 초대권 활용 내역 조회, 회사 및
                    제휴사 상품/서비스 안내 및 권유의 목적으로 개인정보를
                    이용합니다.
                    <br />
                    3. 개인정보 수집 방법 회사는 홈페이지, 어플리케이션,
                    고객센터, 게시판, 이벤트 참여, 제휴사로부터의 전달 등을 통해
                    개인정보를 수집합니다.
                    <br />
                    이용자는 회사가 마련한 개인정보 처리 동의서에 대해 「동의」
                    버튼을 클릭함으로써 개인정보 처리에 대하여 동의 여부를
                    표시할 수 있습니다.
                    <br />
                    4. 개인정보의 보유 및 이용기간 귀하가 제공한 개인정보는
                    법령에서 별도로 정하거나 귀하와 별도 합의하는 등의 특별한
                    사정이 없는 한 회사가 제공하는 서비스를 받는 동안 또는
                    위에서 정한 목적을 달성할 때까지 회사가 보유ㆍ이용하게
                    됩니다.
                    <br /> 회사는 관련 법령(아래의 경우에 한정되지 않습니다)의
                    규정에 의하여 보존하여야 하는 기록은 일정 기간 보관 후
                    파기합니다.
                    <br /> 가. 계약 또는 청약철회 등에 관한 기록 (보존기간 :
                    5년) : 전자상거래 등에서의 소비자 보호에 관한 법률 나.
                    대금결제 및 재화 등의 공급에 관한 기록 (보존기간 : 5년) :
                    전자상거래 등에서의 소비자 보호에 관한 법률 다.
                    <br />
                    소비자의 불만 또는 분쟁처리에 관한 기록 (보존기간 : 3년) :
                    전자상거래 등에서의 소비자 보호에 관한 법률 라. 홈페이지
                    방문에 관한 기록 (보존 기간: 3개월) : 통신비밀보호법 5.
                    개인정보 제 3자 제공 회사는 계약의 이행을 위하여 최소한의
                    개인정보만 제공하고 있으며, 개인정보를 제3자에게 제공해야
                    하는 경우 사전에 이용자에게 해당 사실을 알리고 동의를
                    구하도록 하겠습니다.
                    <br />
                    다만 다음의 경우는 예외로 하고 있습니다.
                    <br />
                    가. 서비스 제공에 따른 요금정산을 위해 필요한 경우 나.
                    법령의 규정에 의한 경우 다.
                    <br />
                    수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의
                    요구가 있는 경우 회사가 제공하는 서비스를 통하여 주문 및
                    결제가 이루어진 경우 상담 등 거래 당사자간 원활한 의사소통
                    및 발송 등 거래이행을 위하여 관련된 정보를 필요한 범위
                    내에서 거래 당사자에게 제공합니다.
                    <br />
                    제공받는 자 : 호스트 제공하는 항목 : 이름, 성별, 나이,
                    연락처, 의류 사이즈, 배송지 정보(수령인, 연락처, 주소지) 등
                    개별 프로그램별로 필요하여 회원이 입력한 정보 제공받는 자의
                    이용목적 : 본인 확인, 프로그램 준비 및 이행, 민원처리,
                    상품(서비스), 발송(전송), 제품 설치, 반품, 환불, 고객상담 등
                    정보통신서비스제공계약 및 전자상거래(통신판매) 계약의 이행을
                    위해 필요한 업무 보유 및 이용기간 : 상품 제공 완료 후 6개월
                    제공받는 자 : 회원 제공하는 항목 : 호스트명, 이름, 연락처,
                    주소, 집결지 등 호스트가 입력한 정보 제공받는 자의 이용목적
                    : 본인 확인, 프로그램 준비 및 이행, 민원처리, 상품(서비스),
                    발송(전송), 제품 설치, 반품, 환불, 고객상담 등
                    정보통신서비스제공계약 및 전자상거래(통신판매) 계약의 이행을
                    위해 필요한 업무 보유 및 이용기간 : 상품 제공 완료 후 6개월
                    6. 개인정보의 처리 위탁 회사는 서비스 향상을 위해서 아래와
                    같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약
                    시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을
                    규정하고 있습니다.
                    <br />
                    수탁자 및 수탁업무 내용은 아래와 같습니다.
                    <br />
                    수탁자 : 나이스페이, 다날, 아임포트, 페이코, 토스 수탁업무 :
                    결제 수탁자 : 다날 수탁업무 : 본인확인 수탁자 : braze
                    수탁업무 : 마케팅 자동화 솔루션 수탁자 : Sendbird 수탁업무 :
                    고객 상담(대화 내용) 7. 이용자의 권리 회사는 이용자(만 14세
                    미만자인 경우에는 법정대리인)의 권
                  </S.ModalContent>
                </S.ModalContentBox>
              </S.ModalInner>
            </Modal>
          )}
          <S.AgreementTextBox onClick={props.onServiceModal}>
            <S.AgreementText>결제 대행 서비스 이용약관</S.AgreementText>
            <S.AgreementTextButton>보기</S.AgreementTextButton>
          </S.AgreementTextBox>
          {props.isModalVisible.service && (
            <Modal
              style={{ padding: "20px 40px", boxSizing: "border-box" }}
              onCancel={props.onServiceModal}
              visible={true}
              footer={<></>}
            >
              <S.ModalInner>
                <S.ModalContentHeader>
                  개인정보 제 3자 제공 동의
                </S.ModalContentHeader>
                <S.ModalContentBox>
                  <S.ModalContent>
                    결제 대행 서비스 이용약관 개인정보처리방침 개인정보 수집 및
                    이용 안내 주식회사 프렌트립(이하 “회사”)는 회원님의
                    개인정보를 보호하기 위해 최선을 다하고 있습니다.
                    <br />
                    이를 위해서 회사는 개인정보의 보호와 관련하여 ‘정보통신망
                    이용촉진 및 정보보호 등에 관한 법률’, ‘개인정보 보호법’ 등
                    개인정보와 관련된 법령을 준수하고 있습니다.
                    <br />
                    1. 수집하는 개인정보의 항목 회사는 이름, 이메일, 나이, 성별,
                    서비스 이용기록, 결제 및 환불 기록, 생년월일, 휴대폰번호,
                    관심분야 등에 관한 정보를 수집합니다.
                    <br />
                    서비스를 이용하는 과정에서 방문일시, 사용이력, 기기정보,
                    접속로그, IP주소 등이 자동으로 생성·수집 될 수 있습니다.
                    <br />
                    회사는 회원가입, 구매 등 서비스 제공을 위한 최소한의 범위
                    내에서 이용자의 동의 하에 개인정보를 수집하며, 수집한 모든
                    개인정보는 고지한 목적 범위 내에서만 이용됩니다.
                    <br /> 1) 회원 가입 시 - (필수) 아이디(E-MAIL), 비밀번호,
                    휴대폰번호, 닉네임 - (선택) 생년월일, 성별, 연계정보(CI) 2)
                    판매 회원 가입 시 - (필수) 호스트명, 이름, 아이디, 비밀번호,
                    E-MAIL, 사업자등록번호, 주민등록증, 담당자 이름, 휴대폰번호,
                    주소, 호스트 약력, 은행명, 예금주, 계좌번호 - (선택)
                    호스트등록경로, 프로필 사진 3) 상품 구매 시 - (필수)
                    핸드폰번호, 신용카드 정보, 은행계좌 정보, 결제기록 등의 정보
                    - (선택) 배송지 정보: 수령인, 연락처, 주소지 - (선택) 탑승자
                    이름, 동반인정보(성명, 이외 서비스의 유형에 따라, 추가적인
                    정보가 수집될 수 있습니다.
                    <br />
                    (여행상품) 4) 모바일 사용 시 - 프립 앱 버전, OS버전 (iOS,
                    안드로이드) - 위치정보 (별도 저장없이 앱에서 사용) 5) 기타 -
                    서비스 이용과정에서 자동 수집 정보 : 회원ID, IP Address,
                    쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록, 기기정보,
                    ADID, IDFA, 위치정보 -고객 분쟁처리 및 상담 진행 시 :
                    상담내역, 채팅(대화)내역, 서비스 이용기록, 결제 및 환불 기록
                    6) 구독회원 - E-MAIL, 성별 2. 개인정보의 수집 및 이용목적
                    회사는 회원의 식별·확인, 회원가입 의사 확인, 중복가입 여부
                    확인, 만14세 미만 여부 확인, 법정대리인의 동의 처리, 계약의
                    체결·이행·관리, 주문상품의 배송 상태 통지, 결제 및 환불,
                    통계분석, 구매 성향 분석, 서비스 개선, 민원 기타 문의 사항
                    처리, 부정이용에 대한 조사 및 대응, 고지사항 전달, 청구서
                    등의 발송, 법령상 의무 이행, 사은/판촉행사 등 각종 이벤트,
                    개인 맞춤형 서비스 제공, 새로운 상품 기타 행사 관련 정보
                    안내 및 마케팅 활동, 이메일 초대권 활용 내역 조회, 회사 및
                    제휴사 상품/서비스 안내 및 권유의 목적으로 개인정보를
                    이용합니다.
                    <br />
                    3. 개인정보 수집 방법 회사는 홈페이지, 어플리케이션,
                    고객센터, 게시판, 이벤트 참여, 제휴사로부터의 전달 등을 통해
                    개인정보를 수집합니다.
                    <br /> 이용자는 회사가 마련한 개인정보 처리 동의서에 대해
                    「동의」 버튼을 클릭함으로써 개인정보 처리에 대하여 동의
                    여부를 표시할 수 있습니다.
                    <br />
                    4. 개인정보의 보유 및 이용기간 귀하가 제공한 개인정보는
                    법령에서 별도로 정하거나 귀하와 별도 합의하는 등의 특별한
                    사정이 없는 한 회사가 제공하는 서비스를 받는 동안 또는
                    위에서 정한 목적을 달성할 때까지 회사가 보유ㆍ이용하게
                    됩니다.
                    <br />
                    회사는 관련 법령(아래의 경우에 한정되지 않습니다)의 규정에
                    의하여 보존하여야 하는 기록은 일정 기간 보관 후 파기합니다.
                    <br />
                    가. 계약 또는 청약철회 등에 관한 기록 (보존기간 : 5년) :
                    전자상거래 등에서의 소비자 보호에 관한 법률 나. 대금결제 및
                    재화 등의 공급에 관한 기록 (보존기간 : 5년) : 전자상거래
                    등에서의 소비자 보호에 관한 법률 다.
                    <br />
                    소비자의 불만 또는 분쟁처리에 관한 기록 (보존기간 : 3년) :
                    전자상거래 등에서의 소비자 보호에 관한 법률 라. 홈페이지
                    방문에 관한 기록 (보존 기간: 3개월) : 통신비밀보호법 5.
                    개인정보 제 3자 제공 회사는 계약의 이행을 위하여 최소한의
                    개인정보만 제공하고 있으며, 개인정보를 제3자에게 제공해야
                    하는 경우 사전에 이용자에게 해당 사실을 알리고 동의를
                    구하도록 하겠습니다.
                    <br />
                    다만 다음의 경우는 예외로 하고 있습니다.
                    <br />
                    가. 서비스 제공에 따른 요금정산을 위해 필요한 경우 나.
                    법령의 규정에 의한 경우 다.
                    <br />
                    수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의
                    요구가 있는 경우 회사가 제공하는 서비스를 통하여 주문 및
                    결제가 이루어진 경우 상담 등 거래 당사자간 원활한 의사소통
                    및 발송 등 거래이행을 위하여 관련된 정보를 필요한 범위
                    내에서 거래 당사자에게 제공합니다.
                    <br />
                    제공받는 자 : 호스트 제공하는 항목 : 이름, 성별, 나이,
                    연락처, 의류 사이즈, 배송지 정보(수령인, 연락처, 주소지) 등
                    개별 프로그램별로 필요하여 회원이 입력한 정보 제공받는 자의
                    이용목적 : 본인 확인, 프로그램 준비 및 이행, 민원처리,
                    상품(서비스), 발송(전송), 제품 설치, 반품, 환불, 고객상담 등
                    정보통신서비스제공계약 및 전자상거래(통신판매) 계약의 이행을
                    위해 필요한 업무 보유 및 이용기간 : 상품 제공 완료 후 6개월
                    제공받는 자 : 회원 제공하는 항목 : 호스트명, 이름, 연락처,
                    주소, 집결지 등 호스트가 입력한 정보 제공받는 자의 이용목적
                    : 본인 확인, 프로그램 준비 및 이행, 민원처리, 상품(서비스),
                    발송(전송), 제품 설치, 반품, 환불, 고객상담 등
                    정보통신서비스제공계약 및 전자상거래(통신판매) 계약의 이행을
                    위해 필요한 업무 보유 및 이용기간 : 상품 제공 완료 후 6개월
                    6. 개인정보의 처리 위탁 회사는 서비스 향상을 위해서 아래와
                    같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약
                    시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을
                    규정하고 있습니다.
                    <br />
                    수탁자 및 수탁업무 내용은 아래와 같습니다.
                    <br />
                    수탁자 : 나이스페이, 다날, 아임포트, 페이코, 토스 수탁업무 :
                    결제 수탁자 : 다날 수탁업무 : 본인확인 수탁자 : braze
                    수탁업무 : 마케팅 자동화 솔루션 수탁자 : Sendbird 수탁업무 :
                    고객 상담(대화 내용) 7. 이용자의 권리 회사는 이용자(만 14세
                    미만자인 경우에는 법정대리인)의 권
                  </S.ModalContent>
                </S.ModalContentBox>
              </S.ModalInner>
            </Modal>
          )}
        </S.AgreementInner>
      </S.SubTitleBox>
      <S.PaymentBox>
        <Payment
          setPage={props.setPage}
          userData={props.userData}
          fetchCourse={props.data?.fetchCourse}
          courseTime={props.courseTime}
          currentPrice={props.currentPrice}
          currentUsers={props.currentUsers}
        />
      </S.PaymentBox>
    </S.Wrapper>
  );
}
