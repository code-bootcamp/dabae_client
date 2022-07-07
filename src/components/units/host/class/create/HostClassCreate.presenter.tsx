import Space from "@/src/components/commons/space/Space";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostClassCreate.styles";
import { DatePicker, TimePicker } from "antd";
import Input from "@/src/components/commons/input/Input";
import Button from "@/src/components/commons/button/Button";
import TextArea from "@/src/components/commons/textarea/TextArea";
/*
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Presenter.tsx
 * Date: 2022-07-06 20:43:11
 * Description : 호스트 수업 등록 프레젠터
 */

const HostClassCreateUI = (props: any) => {
  const { RangePicker } = DatePicker;
  return (
    <CF.ColumnBetweenDiv height={"100%"} width={"100%"}>
      {props.step === 1 && (
        <S.Wrapper>
          <S.Wrapper1>
            <CF.RowDiv>
              <Space
                title1="카테고리"
                gap={20}
                titlePadding={"10px 0px 0px 0px"}
              >
                <S.BorderDiv>
                  <CF.RowBetweenDiv>
                    <div> 1차 카테고리 </div>
                    <div>
                      <S.BlockSelect>
                        <option> 피트니스 </option>
                        <option> 아웃도어 </option>
                        <option> 공예DIY </option>
                        <option> 쿠킹 </option>
                        <option> 스포츠 </option>
                        <option> 베이킹 </option>
                        <option> 문화예술 </option>
                        <option> 자기계발 </option>
                      </S.BlockSelect>
                    </div>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv>
                    <div> 2차 카테고리 </div>
                    <div>
                      {
                        <S.BlockSelect disabled={true}>
                          <option> 1 </option>
                          <option> 2 </option>
                          <option> 3 </option>
                          <option> 4 </option>
                        </S.BlockSelect>
                      }
                    </div>
                  </CF.RowBetweenDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowDiv>
            <CF.RowBetweenDiv>
              <Space
                title1="모집기간"
                gap={20}
                titlePadding={"10px 0px 0px 0px"}
              >
                <S.BorderDiv>
                  <CF.ColumnDiv gap={10}>
                    <div> 시작일 ~ 마감일 </div>
                    <RangePicker />
                  </CF.ColumnDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space
                title1="수업시간"
                gap={20}
                titlePadding={"10px 0px 0px 0px"}
              >
                <S.BorderDiv>
                  <CF.ColumnDiv gap={10}>
                    <div> 수업 시작 날짜 ~ 수업 종료 날짜 </div>
                    <DatePicker />
                    <TimePicker.RangePicker />
                  </CF.ColumnDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space
                title1="모집 최대 인원"
                gap={20}
                titlePadding={"10px 0px 0px 0px"}
              >
                <S.BorderDiv>
                  <CF.RowDiv gap={20}>
                    <div> 인원수 : </div>
                    <div>
                      <Input width={"100px"} />
                    </div>
                  </CF.RowDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
          </S.Wrapper1>
          <S.Wrapper2>
            <CF.RowBetweenDiv>
              <Space title4="기본가격" gap={20} titleWidth={"160px"}>
                <S.BorderDiv>
                  <CF.RowDiv gap={10} width={"200px"}>
                    <Input placeholder="0" /> 원
                  </CF.RowDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space title4="최대 할인율" gap={20} titleWidth={"160px"}>
                <S.BorderDiv>
                  <CF.RowDiv gap={10} width={"200px"}>
                    <Input placeholder="0" /> %
                  </CF.RowDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space
                title1="대표 이미지(최대 5장)"
                gap={20}
                titlePadding={"10px 0px 0px 0px"}
              >
                <S.BorderDiv>
                  <section className="container">
                    <div {...props.getRootProps({ className: "dropzone" })}>
                      <input {...props.getInputProps()} />
                      <p>드랍 더 비트</p>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>{props.files}</ul>
                    </aside>
                  </section>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space title1="난이도" gap={20} titlePadding={"10px 0px 0px 0px"}>
                <S.BorderDiv>
                  <CF.RowDiv gap={10}>
                    <div>
                      <input
                        type="radio"
                        name="level"
                        value="null"
                        id="null"
                        defaultChecked={true}
                      />
                      <label htmlFor="null"> 없음 </label>
                    </div>
                    <div>
                      <input type="radio" name="level" value="easy" id="easy" />
                      <label htmlFor="easy"> 쉬움 </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="level"
                        value="medium"
                        id="medium"
                      />
                      <label htmlFor="medium"> 중간 </label>
                    </div>
                    <div>
                      <input type="radio" name="level" value="hard" id="hard" />
                      <label htmlFor="hard"> 어려움 </label>
                    </div>
                  </CF.RowDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space title1="준비물" gap={20} titlePadding={"10px 0px 0px 0px"}>
                <S.BorderDiv>
                  <Input placeholder="준비물 작성" />
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
          </S.Wrapper2>
        </S.Wrapper>
      )}
      {props.step === 2 && (
        <S.Wrapper>
          <S.Wrapper1>
            <CF.RowBetweenDiv>
              <Space title4="제목" gap={20} titleWidth={"60px"}>
                <S.BorderDiv>
                  <CF.RowDiv gap={10}>
                    <Input placeholder="제목을 입력해주세요(40자 이내)" />
                  </CF.RowDiv>
                </S.BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space title1="장소" gap={20} titlePadding={"10px 0px 0px 0px"}>
                <CF.ColumnDiv gap={10}>
                  <S.BorderDiv>
                    <CF.RowDiv gap={10}>
                      <Input
                        placeholder="우편번호"
                        width={"80px"}
                        padding={"0px 0px 0px 8px"}
                        height={"50px"}
                      />
                      <Button
                        width={"120px"}
                        height={"50px"}
                        borderRadius={"0px"}
                      >
                        우편번호검색
                      </Button>
                    </CF.RowDiv>
                  </S.BorderDiv>
                  <S.BorderDiv>
                    <Input placeholder="주소를 입력해주세요." />
                  </S.BorderDiv>
                  <S.BorderDiv>
                    <Input placeholder="상세주소를 입력해주세요." />
                  </S.BorderDiv>
                </CF.ColumnDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space title1="내용" gap={20} titlePadding={"10px 0px 0px 0px"}>
                <CF.ColumnDiv gap={10}>
                  <S.BorderDiv>
                    <TextArea placeholder="내용을 입력해주세요." />
                  </S.BorderDiv>
                </CF.ColumnDiv>
              </Space>
            </CF.RowBetweenDiv>
          </S.Wrapper1>
        </S.Wrapper>
      )}
      <S.FooterMenu>
        <S.BorderDiv>
          {props.step === 1 && (
            <CF.RowRightDiv
              gap={20}
              padding={"0px 20px 0px 0px"}
              height={"100%"}
            >
              <Button width={"80px"} height={"40px"} status={"secondary"}>
                초기화
              </Button>
              <Button
                width={"80px"}
                height={"40px"}
                onClick={props.onClickChangeStep(2)}
              >
                다음
              </Button>
            </CF.RowRightDiv>
          )}
          {props.step === 2 && (
            <CF.RowRightDiv
              gap={20}
              padding={"0px 20px 0px 0px"}
              height={"100%"}
            >
              <Button
                width={"80px"}
                height={"40px"}
                onClick={props.onClickChangeStep(1)}
              >
                이전
              </Button>
              <Button width={"80px"} height={"40px"} status={"secondary"}>
                초기화
              </Button>
              <Button width={"80px"} height={"40px"} type="submit">
                등록
              </Button>
            </CF.RowRightDiv>
          )}
        </S.BorderDiv>
      </S.FooterMenu>
    </CF.ColumnBetweenDiv>
  );
};
export default HostClassCreateUI;
