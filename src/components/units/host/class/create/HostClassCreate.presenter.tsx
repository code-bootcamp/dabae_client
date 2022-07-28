import Space from "@/src/components/commons/space/Space";
import { CF } from "@/styles/commonComponentStyle";
import * as S from "./HostClassCreate.styles";
import Input from "@/src/components/commons/input/Input";
import Button from "@/src/components/commons/button/Button";
import TextArea from "@/src/components/commons/textarea/TextArea";
import { v4 as uuid } from "uuid";
import moment from "moment";
import Tags from "@/src/components/commons/HashTag/HashTag";
import { FormProvider } from "react-hook-form";
import UploadOrganism from "@/src/components/commons/upload/UploadOrganism";
import { dateFormat4y2m2d2h2m } from "@/src/function/date/format/dateFormat";
import DaumPostcodeAddressOrganism from "@/src/components/commons/address/DaumPostcodeAddressOrganism";
import CustomCalendar from "@/src/components/units/host/calendar/CustomCalendar";
import CalendarDayItem from "@/src/components/units/host/calendar/CalendarDayItem";
import { IHostClassCreateUIProps } from "./HostClassCreate.types";
/*
 * Author : Sukyung Lee
 * FileName: HostClassCreate.Presenter.tsx
 * \Date: 2022-07-06 20:43:11
 * Description : 호스트 수업 등록 프레젠터
 */

const secondCategorys: any = {
  피트니스: {
    요가: "요가",
    필라테스: "필라테스",
    헬스: "헬스",
  },
  아웃도어: {
    서핑: "서핑",
    등산: "등산",
    캠핑: "캠핑",
    러닝: "러닝",
    수상레포츠: "수상레포츠",
    승마: "승마",
  },
  공예: {
    도자기: "도자기",
    가죽: "가죽",
    목공: "목공",
    플라워: "플라워",
    향수: "향수",
    비즈: "비즈",
    캔들: "캔들",
  },
  요리: {
    한식: "한식",
    중식: "중식",
    일식: "일식",
  },
  스포츠: {
    클라이밍: "클라이밍",
    실내다이빙: "실내다이빙",
    라켓스포츠: "라켓스포츠",
    구기스포츠: "구기스포츠",
    무도: "무도",
    수영: "수영",
    사격및양궁: "사격및양궁",
    스키및보드: "스키및보드",
  },
  베이킹: {
    디저트: "디저트",
    케이크: "케이크",
    빵: "빵",
  },
  문화예술: {
    미술: "미술",
    사진: "사진",
    음악: "음악",
    연기: "연기",
    춤: "춤",
  },
  자기계발: {
    어학: "어학",
    취업: "취업",
    이직: "이직",
    경제: "경제",
  },
};

const HostClassCreateUI = (props: IHostClassCreateUIProps) => {
  return (
    <FormProvider {...props.methods}>
      <S.MainContent>
        <form onSubmit={() => "return false"} style={{ height: "100%" }}>
          <CF.ColumnBetweenDiv height={"100%"}>
            {props.step === 1 && (
              <S.Wrapper>
                <S.Wrapper1>
                  <CF.RowDiv backgroundColor="white">
                    <Space
                      title1="카테고리"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnDiv gap={10}>
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
                                <option value="피트니스"> 피트니스 </option>
                                <option value="아웃도어"> 아웃도어 </option>
                                <option value="공예"> 공예 </option>
                                <option value="요리"> 요리 </option>
                                <option value="스포츠"> 스포츠 </option>
                                <option value="베이킹"> 베이킹 </option>
                                <option value="문화예술">문화예술</option>
                                <option value="자기계발">자기계발</option>
                              </S.BlockSelect>
                            </div>
                          </CF.RowBetweenDiv>
                          <CF.RowBetweenDiv>
                            <div> 2차 카테고리 </div>
                            <div>
                              <S.BlockSelect
                                disabled={!props.firstCategory}
                                onChange={props.onChangeSecondCategory}
                                defaultValue={
                                  props.methods.getValues("secondCategory") ||
                                  ""
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
                              <S.ErrorDiv>
                                {
                                  props.methods.formState.errors.firstCategory
                                    ?.message
                                }
                              </S.ErrorDiv>
                            </div>
                          </CF.RowBetweenDiv>
                        </CF.ColumnDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowDiv>
                  <CF.RowBetweenDiv backgroundColor="white">
                    <Space
                      title1="강의 진행 기간"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnDiv gap={10}>
                          <div> 강의 진행 시작일 ~ 강의 진행 종료일 </div>
                          <S.RangePickerStyle
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
                          <S.ErrorDiv>
                            {
                              props.methods.formState.errors.openingDate
                                ?.message
                            }
                          </S.ErrorDiv>
                        </CF.ColumnDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv backgroundColor="white">
                    <Space
                      title1="난이도"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
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
                          <S.ErrorDiv>
                            {props.methods.formState.errors.difficulty?.message}
                          </S.ErrorDiv>
                        </CF.RowDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv backgroundColor="white">
                    <Space
                      title1="클래스 1회 비용"
                      gap={10}
                      titleWidth={"160px"}
                      titlePadding={"10px 0px 0px 8px"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnDiv gap={10}>
                          <CF.RowDiv gap={10}>
                            <div> 최소 비용 : </div>
                            <Input
                              width={"160px"}
                              placeholder="0"
                              defaultValue={props.methods.getValues("minPrice")}
                              onChange={props.onChangePrice("minPrice")}
                            />
                            원
                            <S.ErrorDiv>
                              {props.methods.formState.errors.minPrice?.message}
                            </S.ErrorDiv>
                          </CF.RowDiv>
                          <CF.RowDiv gap={10}>
                            <div> 최대 비용 : </div>
                            <Input
                              width={"160px"}
                              placeholder="0"
                              defaultValue={props.methods.getValues("maxPrice")}
                              onChange={props.onChangePrice("maxPrice")}
                            />
                            원
                            <S.ErrorDiv>
                              {props.methods.formState.errors.maxPrice?.message}
                            </S.ErrorDiv>
                          </CF.RowDiv>
                        </CF.ColumnDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv backgroundColor="white" height="100%">
                    <Space
                      title1="장소"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
                    >
                      <DaumPostcodeAddressOrganism />
                    </Space>
                  </CF.RowBetweenDiv>
                </S.Wrapper1>
                <S.Wrapper2>
                  <CF.RowBetweenDiv backgroundColor="white">
                    <Space
                      title1="준비물(최대 6개)"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
                    >
                      <S.BorderDiv>
                        <Tags width={"120px"} />
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>

                  <CF.RowBetweenDiv backgroundColor="white" height="100%">
                    <Space
                      title1="대표 이미지(최대 4장)"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
                      height={"100%"}
                    >
                      <S.BorderDiv>
                        <CF.ColumnCenterDiv>
                          <UploadOrganism
                            defaultValue={props.methods.getValues("imageURLs")}
                          />
                        </CF.ColumnCenterDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                </S.Wrapper2>
              </S.Wrapper>
            )}
            {props.step === 2 && (
              <S.Wrapper>
                <S.Wrapper1>
                  <CF.RowBetweenDiv backgroundColor="white">
                    <Space
                      title1="클래스 제목"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
                    >
                      <S.BorderDiv>
                        <CF.RowDiv gap={10}>
                          <Input
                            placeholder="제목을 입력해주세요(40자 이내)"
                            register={props.methods.register("name")}
                          />
                        </CF.RowDiv>
                        <S.ErrorDiv>
                          {props.methods.formState.errors.name?.message}
                        </S.ErrorDiv>
                      </S.BorderDiv>
                    </Space>
                  </CF.RowBetweenDiv>
                  <CF.RowBetweenDiv backgroundColor="white" height="100%">
                    <Space
                      title1="내용"
                      gap={10}
                      titlePadding={"10px 0px 0px 8px"}
                    >
                      <CF.ColumnDiv gap={10} height={"100%"}>
                        <S.BorderDiv>
                          <TextArea
                            placeholder="내용을 입력해주세요."
                            register={props.methods.register("contents")}
                            backgroundColor="#fff"
                            border={"1px solid #acebe7"}
                            borderRadius="10px"
                          />
                          <S.ErrorDiv>
                            {props.methods.formState.errors.contents?.message}
                          </S.ErrorDiv>
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
                      onClick={props.methods.handleSubmit(
                        props.onClickSubmit,
                        props.onClickErrorSubmit
                      )}
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
