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
import { FormProvider, UseFormReturn } from "react-hook-form";
import UploadOrganism from "@/src/components/commons/upload/UploadOrganism";
import { dateFormat4y2m2d2h2m } from "@/src/function/date/format/dateFormat";
import DaumPostcodeAddressOrganism from "@/src/components/commons/address/DaumPostcodeAddressOrganism";
import CustomCalendar from "@/src/components/units/host/calendar/CustomCalendar";
import CalendarDayItem from "@/src/components/units/host/calendar/CalendarDayItem";
import { ChangeEvent } from "react";
/*
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Presenter.tsx
 * \Date: 2022-07-06 20:43:11
 * Description : 호스트 수업 등록 프레젠터
 */

type useFormType = {
  materials?: string[];
  imageURLs: [];
  openingDate: string;
  closingDate: string;
  firstCategory: string;
  category: string;
  difficulty: string;
  tagsInput: string | undefined;
  maxPrice: string | number;
  minPrice: string | number;
  lat: number;
  lng: number;
  contents: string;
  name: string;
  courseDate: [];
};
interface IHostClassCreateUIProps {
  step: number;
  onClickChangeStep: (move: number) => () => void;
  onChangeFirstCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  firstCategory: string;
  category: string;
  // TODO: typescript 해결하기
  onChangeClassRecruitDate: (date: any, dateString: any) => void;
  methods: UseFormReturn<useFormType, object>;
  onClickSubmit: () => void;
  onChangeLevel: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClickResetField: () => void;
  onChangeDifficulty: (e: ChangeEvent<HTMLInputElement>) => void;
}

const HostClassCreateUI = (props: IHostClassCreateUIProps) => {
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
                              defaultValue={
                                props.methods.getValues("firstCategory") || ""
                              }
                            >
                              <option value="">1차 카테고리</option>
                              <option value="fitness"> 피트니스 </option>
                              <option value="outdoor"> 아웃도어 </option>
                              <option value="craftDIY"> 공예DIY </option>
                              <option value="cooking"> 쿠킹 </option>
                              <option value="sport"> 스포츠 </option>
                              <option value="baking"> 베이킹 </option>
                              <option value="curtureAndArts"> 문화예술 </option>
                              <option value="selfImprovement">자기계발</option>
                            </S.BlockSelect>
                          </div>
                        </CF.RowBetweenDiv>
                        <CF.RowBetweenDiv>
                          <div> 2차 카테고리 </div>
                          <div>
                            <S.BlockSelect
                              disabled={!props.firstCategory}
                              onChange={props.onChangeCategory}
                              defaultValue={
                                props.methods.getValues("category") || ""
                              }
                            >
                              <option value="" disabled>
                                2차 카테고리
                              </option>
                              {props.firstCategory &&
                                Object.entries(
                                  secondCategorys[props.firstCategory]
                                ).map((i: any, index: number) => (
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
                            onChange={props.onChangeClassRecruitDate}
                            format="YYYY/MM/DD"
                            defaultValue={[
                              moment(
                                props.methods.getValues("openingDate") ||
                                  dateFormat4y2m2d2h2m(new Date()),
                                "YYYY-MM-DD"
                              ),
                              moment(
                                props.methods.getValues("closingDate") ||
                                  dateFormat4y2m2d2h2m(new Date()),
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
                      title1="난이도"
                      gap={10}
                      titlePadding={"20px 0px 0px 0px"}
                    >
                      <S.BorderDiv>
                        <CF.RowDiv gap={10}>
                          <div>
                            <input
                              type="radio"
                              name="difficulty"
                              value="쉬움"
                              id="easy"
                              onChange={props.onChangeDifficulty}
                              defaultChecked={
                                props.methods.getValues("difficulty") === "쉬움"
                              }
                            />
                            <label htmlFor="easy"> 쉬움 </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="difficulty"
                              value="보통"
                              id="medium"
                              onChange={props.onChangeDifficulty}
                              defaultChecked={
                                props.methods.getValues("difficulty") === "보통"
                              }
                            />
                            <label htmlFor="medium"> 보통 </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="difficulty"
                              value="어려움"
                              id="hard"
                              onChange={props.onChangeDifficulty}
                              defaultChecked={
                                props.methods.getValues("difficulty") ===
                                "어려움"
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
                            <div> 최소 비용 : </div>
                            <Input
                              width={"160px"}
                              placeholder="0"
                              defaultValue={props.methods.getValues("minPrice")}
                              register={props.methods.register("minPrice")}
                            />
                            원
                          </CF.RowDiv>
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
                        getValues={props.methods.getValues}
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
                            defaultValue={props.methods.getValues("imageURLs")}
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
                            register={props.methods.register("name")}
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
                            register={props.methods.register("contents")}
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
                  <CustomCalendar
                    calendarDayItem={(el: any, forceRender: () => void) => {
                      return (
                        <CalendarDayItem
                          key={el[0]}
                          date={el[0]}
                          day={el[1].day}
                          dayW={el[1].dayW}
                          isThisMonth={el[1].isThisMonth}
                          data={props.methods
                            .getValues("courseDate")
                            ?.find((x: any) => x.date === el[0])}
                          forceRender={forceRender}
                        />
                      );
                    }}
                  />
                </S.Wrapper1>
              </S.Wrapper>
            )}
            <S.FooterMenu>
              <S.PageLocationDiv>
                <S.Button
                  onClick={props.onClickChangeStep(1)}
                  isActive={(props.step as unknown) === 1}
                  type="button"
                >
                  1
                </S.Button>
                <S.Button
                  onClick={props.onClickChangeStep(2)}
                  isActive={(props.step as unknown) === 2}
                  type="button"
                >
                  2
                </S.Button>
                <S.Button
                  onClick={props.onClickChangeStep(3)}
                  isActive={(props.step as unknown) === 3}
                  type="button"
                >
                  3
                </S.Button>
              </S.PageLocationDiv>
              {props.step === 1 && (
                <CF.RowBetweenDiv gap={10} height={"100%"} width={"100%"}>
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
                      onClick={props.onClickSubmit}
                    >
                      제출
                    </Button>
                  </CF.RowRightDiv>
                </CF.RowBetweenDiv>
              )}
            </S.FooterMenu>
          </CF.ColumnBetweenDiv>
        </form>
      </S.MainContent>
    </FormProvider>
  );
};
export default HostClassCreateUI;
