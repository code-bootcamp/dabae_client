import Space from "@/src/components/commons/space/Space";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostClassCreate.styles";
import { DatePicker } from "antd";
import Input from "@/src/components/commons/input/Input";
import Button from "@/src/components/commons/button/Button";
import TextArea from "@/src/components/commons/textarea/TextArea";
import { v4 as uuid } from "uuid";
import { secondCategorys } from "@/src/components/commons/mockup/data";
import moment from "moment";
import Tags from "@/src/components/commons/HashTag/HashTag";
import { FormProvider } from "react-hook-form";
import UploadOrganism from "@/src/components/commons/upload/UploadOrganism";
import { dateFormat4y2m2d2h2d } from "@/src/function/date/format/dateFormat";
import DaumPostcodeAddressOrganism from "@/src/components/commons/address/DaumPostcodeAddressOrganism";
import CustomCalendar from "@/src/components/commons/calendar/CustomCalendar";
/*
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Presenter.tsx
 * \Date: 2022-07-06 20:43:11
 * Description : 호스트 수업 등록 프레젠터
 */

const HostClassCreateUI = (props: any) => {
  const { RangePicker } = DatePicker;
  // const dateFormat = "YYYY-MM-DD";

  return (
    <FormProvider {...props.methods}>
      <S.MainContent>
        <form onSubmit={() => "return false"} style={{ height: "100%" }}>
          <CF.ColumnBetweenDiv height={"100%"}>
            {props.step === 1 && (
              <S.Wrapper>
                <S.Wrapper1>
                  <CF.RowDiv>
                    <Space
                      title1="카테고리"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.RowBetweenDiv>
                          <div> 1차 카테고리 </div>
                          <div>
                            <S.BlockSelect
                              onChange={props.onChangeFirstCategory}
                              defaultValue={props.methods.firstCategory}
                            >
                              <option value="" disabled>
                                1차 카테고리
                              </option>
                              <option value="fitness"> 피트니스 </option>
                              <option value="outdoor"> 아웃도어 </option>
                              <option value="craftDIY"> 공예DIY </option>
                              <option value="cooking"> 쿠킹 </option>
                              <option value="sport"> 스포츠 </option>
                              <option value="baking"> 베이킹 </option>
                              <option value="curtureAndArts"> 문화예술 </option>
                              <option value="selfImprovement">
                                {" "}
                                자기계발{" "}
                              </option>
                            </S.BlockSelect>
                          </div>
                        </CF.RowBetweenDiv>
                        <CF.RowBetweenDiv>
                          <div> 2차 카테고리 </div>
                          <div>
                            <S.BlockSelect
                              disabled={!props.firstCategory}
                              onChange={props.onChangeSecondCategory}
                              defaultValue={props.methods.secondCategory}
                            >
                              <option value="" disabled>
                                2차 카테고리
                              </option>
                              {props.firstCategory &&
                                Object.entries(
                                  secondCategorys[props.firstCategory]
                                ).map((i, index) => (
                                  <option key={uuid()} value={i[0]}>
                                    {i[1]}
                                  </option>
                                ))}
                            </S.BlockSelect>
                          </div>
                        </CF.RowBetweenDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowDiv>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="강의 진행 기간"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnDiv gap={10}>
                          <div> 강의 진행 시작일 ~ 강의 진행 종료일 </div>
                          <RangePicker
                            onChange={props.onChangeClassRecruitDeadLine}
                            format="YYYY/MM/DD"
                            defaultValue={[
                              moment(
                                props.methods.getValues(
                                  "classRecruitDeadLine"
                                )[0] || dateFormat4y2m2d2h2d(new Date()),
                                "YYYY-MM-DD"
                              ),
                              moment(
                                props.methods.getValues(
                                  "classRecruitDeadLine"
                                )[1] || dateFormat4y2m2d2h2d(new Date()),
                                "YYYY-MM-DD"
                              ),
                            ]}
                          />
                        </CF.ColumnDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>

                  <CF.RowBetweenDiv>
                    <Space
                      title1="모집 최대 인원"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnDiv gap={10}>
                          <CF.RowDiv gap={20}>
                            <div> 최소 인원수 : </div>
                            <div>
                              <Input
                                width={"160px"}
                                placeholder="1명 이상 입력"
                                register={props.methods.register("minPerson")}
                                defaultValue={props.methods.getValues(
                                  "minPerson"
                                )}
                              />
                            </div>
                          </CF.RowDiv>
                          <CF.RowDiv gap={20}>
                            <div> 최대 인원수 : </div>
                            <div>
                              <Input
                                width={"160px"}
                                placeholder="최대 인원 수 입력"
                                register={props.methods.register("maxPerson")}
                                defaultValue={props.methods.getValues(
                                  "maxPerson"
                                )}
                              />
                            </div>
                          </CF.RowDiv>
                        </CF.ColumnDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="난이도"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.RowDiv gap={10}>
                          <div>
                            <input
                              type="radio"
                              name="level"
                              value="null"
                              id="null"
                              defaultChecked={
                                props.methods.getValues("level") === "null"
                              }
                              onChange={props.onChangeLevel}
                            />
                            <label htmlFor="null"> 없음 </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="level"
                              value="easy"
                              id="easy"
                              onChange={props.onChangeLevel}
                              defaultChecked={
                                props.methods.getValues("level") === "easy"
                              }
                            />
                            <label htmlFor="easy"> 쉬움 </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="level"
                              value="medium"
                              id="medium"
                              onChange={props.onChangeLevel}
                              defaultChecked={
                                props.methods.getValues("level") === "medium"
                              }
                            />
                            <label htmlFor="medium"> 중간 </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="level"
                              value="hard"
                              id="hard"
                              onChange={props.onChangeLevel}
                              defaultChecked={
                                props.methods.getValues("level") === "hard"
                              }
                            />
                            <label htmlFor="hard"> 어려움 </label>
                          </div>
                        </CF.RowDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                </S.Wrapper1>
                <S.Wrapper2>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="클래스 1회 비용"
                      gap={10}
                      titleWidth={"160px"}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnDiv gap={10}>
                          <CF.RowDiv gap={10}>
                            <div> 최대 비용 : </div>
                            <Input
                              width={"160px"}
                              placeholder="0"
                              defaultValue={props.methods.getValues("maxPrice")}
                              register={props.methods.register("maxPrice")}
                            />
                            원
                          </CF.RowDiv>
                          <CF.RowDiv gap={10}>
                            <div> 최소 비용 : </div>
                            <Input
                              width={"160px"}
                              placeholder="0"
                              defaultValue={props.methods.getValues("minPrice")}
                              register={props.methods.register("minPrice")}
                            />{" "}
                            원
                          </CF.RowDiv>
                        </CF.ColumnDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="준비물(최대 6개)"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <Tags width={"120px"} />
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="장소"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <DaumPostcodeAddressOrganism
                        register={props.methods.register}
                        setValue={props.methods.setValue}
                      />
                    </Space>
                  </CF.RowBetweenDiv>
                </S.Wrapper2>
              </S.Wrapper>
            )}
            {props.step === 2 && (
              <S.Wrapper>
                <S.Wrapper1>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="대표 이미지(최대 4장)"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                      height={"100%"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnCenterDiv>
                          <UploadOrganism
                            defaultValue={props.methods.getValues("images")}
                          />
                        </CF.ColumnCenterDiv>
                        {/* </section> */}
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="클래스 제목"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.RowDiv gap={10}>
                          <Input
                            placeholder="제목을 입력해주세요(40자 이내)"
                            register={props.methods.register("classTitle")}
                          />
                        </CF.RowDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv>
                    <Space
                      title1="내용"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <CF.ColumnDiv gap={10}>
                        <S.BorderDiv>
                          <TextArea
                            placeholder="내용을 입력해주세요."
                            register={props.methods.register("classContent")}
                          />
                        </S.BorderDiv>
                      </CF.ColumnDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                </S.Wrapper1>
              </S.Wrapper>
            )}
            {props.step === 3 && (
              <S.Wrapper>
                <S.Wrapper1>
                  <CustomCalendar />
                  {/* <CF.RowBetweenDiv>
                    <Space
                      title1="수업시간"
                      gap={20}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnDiv gap={10}>
                          <div> 수업 시작 날짜 ~ 수업 종료 날짜 </div>
                          <RangePicker
                            onChange={props.onChangeStartClassDate}
                            format="YYYY/MM/DD HH:mm"
                            showTime
                            defaultValue={[
                              moment(
                                props.startClassDate[0].toString(),
                                "YYYY-MM-DD HH:mm"
                              ),
                              moment(
                                props.startClassDate[1].toString(),
                                "YYYY-MM-DD HH:mm"
                              ),
                            ]}
                          />
                        </CF.ColumnDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv> */}
                </S.Wrapper1>
              </S.Wrapper>
            )}
            <S.FooterMenu>
              <S.BorderDiv>
                {props.step === 1 && (
                  <CF.RowBetweenDiv gap={10} height={"100%"} width={"100%"}>
                    <S.PageLocationSpan> [ 1 / 3 ] </S.PageLocationSpan>
                    <CF.RowRightDiv gap={10}>
                      <Button
                        width={"80px"}
                        height={"40px"}
                        status={"secondary"}
                        onClick={props.onClickResetField}
                      >
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
                  </CF.RowBetweenDiv>
                )}
                {props.step === 2 && (
                  <CF.RowBetweenDiv gap={10} height={"100%"} width={"100%"}>
                    <S.PageLocationSpan> [ 2 / 3 ] </S.PageLocationSpan>
                    <CF.RowRightDiv gap={10}>
                      <Button
                        width={"80px"}
                        height={"40px"}
                        onClick={props.onClickChangeStep(1)}
                      >
                        이전
                      </Button>
                      <Button
                        width={"80px"}
                        height={"40px"}
                        status={"secondary"}
                        onClick={props.onClickResetField}
                      >
                        초기화
                      </Button>
                      <Button
                        width={"80px"}
                        height={"40px"}
                        onClick={props.onClickChangeStep(3)}
                      >
                        다음
                      </Button>
                    </CF.RowRightDiv>
                  </CF.RowBetweenDiv>
                )}
                {props.step === 3 && (
                  <CF.RowBetweenDiv gap={10} height={"100%"} width={"100%"}>
                    <S.PageLocationSpan> [ 3 / 3 ] </S.PageLocationSpan>
                    <CF.RowRightDiv gap={10}>
                      <Button
                        width={"80px"}
                        height={"40px"}
                        onClick={props.onClickChangeStep(2)}
                      >
                        이전
                      </Button>
                      <Button
                        width={"80px"}
                        height={"40px"}
                        status={"secondary"}
                        onClick={props.onClickResetField}
                      >
                        초기화
                      </Button>
                      <Button
                        width={"80px"}
                        height={"40px"}
                        onClick={props.onClickChangeStep(3)}
                      >
                        제출
                      </Button>
                    </CF.RowRightDiv>
                  </CF.RowBetweenDiv>
                )}
              </S.BorderDiv>
            </S.FooterMenu>
          </CF.ColumnBetweenDiv>
        </form>
      </S.MainContent>
    </FormProvider>
  );
};
export default HostClassCreateUI;
