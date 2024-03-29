import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { ChangeEvent, ReactNode, useState } from "react";
import { dateFormat4y2m2d } from "../../../../function/date/format/dateFormat";
import { DatePicker, TimePicker } from "antd";
import Space from "../../../commons/space/Space";
import { CF } from "@/styles/commonComponentStyle";
import moment from "moment";
import { useFormContext } from "react-hook-form";
import Input from "@/src/components/commons/input/Input";
import { v4 as uuid } from "uuid";
import CustomModal from "@/src/components/commons/modal/CustomModal";
import Button from "@/src/components/commons/button/Button";
import { css } from "@emotion/react";

const decidedClassTime = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

const decidedMaxUsers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

type CalendarDayItemType = {
  color?: string;
  isThisMonth?: string | undefined;
  day?: string;
  content?: any;
  id?: string;
  children?: ReactNode;
  date?: string;
  data?: any | any[];
  dayW?: number;
  onClickDayAddButton?: () => void;
  modal?: any;
  forceRender: () => void;
  isEdit?: boolean;
};

const CalendarDayItem = (props: CalendarDayItemType) => {
  const { RangePicker } = DatePicker;
  const { setValue, getValues } = useFormContext();
  const [edit, setEdit] = useState(false);
  const [editTempData, setEditTempData] = useState<any>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [intervalTime, setIntervalTime] = useState(2);
  const [intervalDate, setIntervalDate] = useState(7);
  const [maxUsers, setMaxUsers] = useState(10);
  const [classTime, setClassTime] = useState([
    moment("00:00", "HH:mm"),
    moment("00:00", "HH:mm"),
  ]);
  const [classRecruitDate, setClassRecruitDate] = useState([
    moment(dateFormat4y2m2d(new Date(String(props.date))), "YYYY-MM-DD"),
    moment(dateFormat4y2m2d(new Date(String(props.date))), "YYYY-MM-DD"),
  ]);
  const toggleModal = () => {
    if (isModalOpen) {
      initSetting();
    }
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const showModalAndDefaultSetValue = (data: any) => () => {
    setEdit(true);
    setClassTime([
      moment(data.courseStartTime, "HH:mm"),
      moment(data.courseEndTime, "HH:mm"),
    ]);
    setClassRecruitDate([
      moment(data.recruitmentStartDate, "YYYY-MM-DD"),
      moment(data.recruitmentEndDate, "YYYY-MM-DD"),
    ]);
    setMaxUsers(data.maxUsers);
    setEditTempData({
      courseStartTime: data.courseStartTime,
      courseEndTime: data.courseEndTime,
      recruitmentStartDate: data.recruitmentStartDate,
      recruitmentEndDate: data.recruitmentEndDate,
      maxUsers: data.maxUsers,
    });
    setIsModalOpen(true);
  };
  // * 수업 시간을 삭제하는 함수
  const handleClassTimeDelete = () => {
    const prevCourseDate = getValues("courseDate")?.find(
      (el: any) => el.date === props.date
    );
    // * 수업 시작시간으로 필터링해서 제외
    prevCourseDate.schedules = prevCourseDate.schedules.filter(
      (el: any) => el.courseStartTime !== editTempData.courseStartTime
    );
    // * 날짜에 아무런 수업이 없다면 날짜도 삭제
    if (prevCourseDate.schedules.length) {
      setValue("courseDate", [
        ...getValues("courseDate").filter((el: any) => el.date !== props.date),
        {
          date: props.date,
          schedules: [...prevCourseDate.schedules],
        },
      ]);
    } else {
      setValue("courseDate", [
        ...getValues("courseDate").filter((el: any) => el.date !== props.date),
      ]);
    }
    props.forceRender();
    initSetting();
    setIsModalOpen(false);
  };

  // 수업 시간을 생성하는 API
  const handleClassTimeSave = () => {
    const prevCourseDate = getValues("courseDate")?.find(
      (el: any) => el.date === props.date
    );
    if (prevCourseDate) {
      // * 기존 데이터를 변경한다면 필터링을 해서 데이터를 제외시킨다.
      if (edit) {
        prevCourseDate.schedules = prevCourseDate.schedules.filter(
          (el: any) => el.courseStartTime !== editTempData.courseStartTime
        );
      }
      const tempSchedules = [
        ...prevCourseDate.schedules,
        {
          courseStartTime: classTime[0].format("HH:mm"),
          courseEndTime: classTime[1].format("HH:mm"),
          recruitmentStartDate: classRecruitDate[0].format("YYYY-MM-DD"),
          recruitmentEndDate: classRecruitDate[1].format("YYYY-MM-DD"),
          maxUsers: Number(maxUsers),
        },
      ];
      // * 수업 시작 시간을 기준으로 정렬하기
      const sortedSchedules = tempSchedules.sort((a, b) => {
        if (a.courseStartTime > b.courseStartTime) {
          return 1;
        } else {
          return -1;
        }
      });
      setValue("courseDate", [
        ...getValues("courseDate").filter((el: any) => el.date !== props.date),
        {
          date: props.date,
          schedules: sortedSchedules,
        },
      ]);
    } else {
      // * 기존의 날짜가 없으므로 생성
      setValue("courseDate", [
        ...getValues("courseDate"),
        {
          date: props.date,
          schedules: [
            {
              courseStartTime: classTime[0].format("HH:mm"),
              courseEndTime: classTime[1].format("HH:mm"),
              recruitmentStartDate: classRecruitDate[0].format("YYYY-MM-DD"),
              recruitmentEndDate: classRecruitDate[1].format("YYYY-MM-DD"),
              maxUsers: Number(maxUsers),
            },
          ],
        },
      ]);
    }
    props.forceRender(); // 달력에 날짜를 변경하고 보여주기 위해서 강제 렌더링...
    initSetting();
    setIsModalOpen(false);
  };

  // 초기로 세팅해주는 함수
  const initSetting = () => {
    // setClassRecruitDate([
    //   moment(dateFormat4y2m2d(new Date()), "YYYY-MM-DD"),
    //   moment(dateFormat4y2m2d(new Date()), "YYYY-MM-DD"),
    // ]);
    // setClassTime([moment("00:00", "HH:mm"), moment("00:00", "HH:mm")]);
    // setMaxUsers(0);
    setEdit(false);
  };

  const onChangeDecidedMaxUsers = (e: any) => {
    setMaxUsers(e.target.value);
  };

  // 수업 시작 시간과 수업 종료 시간을 설정하는 함수
  const onChangeClassTime = (time: any, timeString: [string, string]) => {
    setClassTime([
      moment(timeString[0], "HH:mm"),
      moment(timeString[1], "HH:mm"),
    ]);
  };

  const onChangeDecidedClassTime = (e: any) => {
    setClassTime([
      moment(String(e.target.value).padStart(2, "0") + ":00", "HH:mm"),
      moment(
        String((Number(e.target.value) + Number(intervalTime)) % 24).padStart(
          2,
          "0"
        ) + ":00",
        "HH:mm"
      ),
    ]);
  };

  const onChangeClassRecruitDate = (
    date: any,
    dateString: [string, string]
  ) => {
    setClassRecruitDate([
      moment(dateString[0], "YYYY-MM-DD"),
      moment(dateString[1], "YYYY-MM-DD"),
    ]);
  };

  const onChangeDecidedClassRecruitDate = (e: any) => {
    const date1 = new Date(String(props.date));
    const date2 = new Date(String(props.date));
    date1.setDate(date1.getDate() - e.target.value - 1);
    date2.setDate(date2.getDate() - 1);
    setClassRecruitDate([
      moment(date1, "YYYY-MM-DD"),
      moment(date2, "YYYY-MM-DD"),
    ]);
  };

  const onChangeMaxUsers = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxUsers(Number(e.target.value));
  };

  return (
    <Container today={dateFormat4y2m2d(new Date()) === props.id}>
      <ColumnDiv isThisMonth={props.isThisMonth}>
        {/* 일 수 */}
        <RowBetweenDiv>
          <DaySpan
            dayW={props.dayW}
            isToday={dateFormat4y2m2d(new Date()) === props.date}
          >
            {props.day}일
          </DaySpan>
          {new Date(String(props.date)).getTime() - new Date().getTime() > 0 &&
            props.isThisMonth && (
              <DayAddButton type="button" onClick={toggleModal}>
                <CirclePlus>
                  <PlusVertical> </PlusVertical>
                  <PlusHorizon> </PlusHorizon>
                </CirclePlus>
              </DayAddButton>
            )}
        </RowBetweenDiv>
        {props.data?.schedules?.map((el: any, index: number) => (
          <Button1
            type="button"
            key={uuid()}
            onClick={showModalAndDefaultSetValue(el)}
          >
            {el.courseStartTime + " - " + el.courseEndTime}
          </Button1>
        ))}
        {isModalOpen && (
          <CustomModal
            title={"수업 시간 등록 " + props.date}
            toggleModal={toggleModal}
          >
            <CF.RowBetweenDiv>
              <Space
                title1="모집 최대 인원"
                gap={10}
                titlePadding={"20px 0px 0px 0px"}
              >
                <BorderDiv>
                  <CF.ColumnDiv gap={10}>
                    <CF.RowDiv gap={20}>
                      <div> 최대 인원수 : </div>
                      <div>
                        <Input
                          width={"160px"}
                          placeholder="최대 인원 수 입력"
                          onChange={onChangeMaxUsers}
                          value={maxUsers}
                        />
                      </div>
                    </CF.RowDiv>
                    <CF.RowDiv gap={10}>
                      {decidedMaxUsers.map((el: any, index: number) => (
                        <Button
                          key={index}
                          width="30px"
                          height="30px"
                          fontSize="12px"
                          onClick={onChangeDecidedMaxUsers}
                          value={el}
                        >
                          {el}
                        </Button>
                      ))}
                    </CF.RowDiv>
                  </CF.ColumnDiv>
                </BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space
                title1="수업시간"
                gap={20}
                titlePadding={"20px 0px 0px 0px"}
              >
                <BorderDiv>
                  <CF.ColumnDiv gap={10} padding="0px 0px 10px 0px">
                    <div> 수업 시작 시간 ~ 수업 종료 시간 </div>
                    <TimePicker.RangePicker
                      onChange={onChangeClassTime}
                      format="HH:mm"
                      value={[classTime[0], classTime[1]]}
                      minuteStep={10}
                      autoFocus
                    />
                  </CF.ColumnDiv>
                  <CF.ColumnDiv gap={10}>
                    <CF.RowDiv gap={10}>
                      <div> 시간 간격 : </div>
                      <Input
                        width={"100px"}
                        height={"30px"}
                        type="number"
                        value={intervalTime}
                        onChange={(e: any) => setIntervalTime(e.target.value)}
                      />
                    </CF.RowDiv>
                    <RowDiv>
                      {decidedClassTime.map((el: any, index: number) => (
                        <Button
                          key={index}
                          width="30px"
                          height="30px"
                          fontSize="12px"
                          onClick={onChangeDecidedClassTime}
                          value={el}
                          backgroundColor={index > 11 ? "#319db8" : "#f0bc17"}
                        >
                          {el}
                        </Button>
                      ))}
                    </RowDiv>
                  </CF.ColumnDiv>
                </BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <CF.RowBetweenDiv>
              <Space
                title1="수업 모집 기간"
                gap={20}
                titlePadding={"20px 0px 0px 0px"}
              >
                <BorderDiv>
                  <CF.ColumnDiv gap={10}>
                    <div> 모집 시작 날짜 ~ 모집 종료 날짜 </div>
                    <RangePicker
                      onChange={onChangeClassRecruitDate}
                      format="YYYY-MM-DD"
                      value={[classRecruitDate[0], classRecruitDate[1]]}
                    />
                    <CF.RowDiv gap={10}>
                      <div> (오늘 전 날짜) - </div>
                      <Input
                        width={"60px"}
                        height={"30px"}
                        type="number"
                        value={intervalDate}
                        onChange={(e: any) => setIntervalDate(e.target.value)}
                      />
                      <Button
                        onClick={onChangeDecidedClassRecruitDate}
                        width="80px"
                        height="30px"
                        value={intervalDate}
                      >
                        날짜 변경
                      </Button>
                    </CF.RowDiv>
                  </CF.ColumnDiv>
                </BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
            <ModalFooter>
              {edit && (
                <Button2 type="button" onClick={handleClassTimeDelete}>
                  삭제
                </Button2>
              )}
              <Button2 type="button" onClick={handleClassTimeSave}>
                {edit ? "변경" : "추가"}
              </Button2>
              <Button2 type="button" onClick={toggleModal}>
                취소
              </Button2>
            </ModalFooter>
          </CustomModal>
        )}
      </ColumnDiv>
    </Container>
  );
};

export default CalendarDayItem;

const Container = styled.div<{ today?: boolean }>`
  min-height: 120px;
  outline: solid 1px #32c2b9;
  background-color: ${(props) => props.today && "#fffcf2"};
  overflow-y: auto;
`;
const ColumnDiv = styled.div<{ isThisMonth: string | undefined }>`
  display: flex;
  flex-flow: nowrap column;
  gap: 2px;
  padding: 4px 4px;
  opacity: ${(props) => (props.isThisMonth ? 1 : 0.6)};
`;
const DaySpan = styled.div<{ dayW?: number; isToday?: boolean }>`
  padding: 4px 4px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    (props.isToday && "white") ||
    (props.dayW === 0 && "red") ||
    (props.dayW === 6 && "blue") ||
    "#333333"};

  ${(props) =>
    props.isToday &&
    css`
      background-color: #32c2b9;
      border-radius: 50%;
    `}

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
const DayAddButton = styled.button`
  background-color: transparent;
  width: 20px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  img {
    width: 16px;
    aspect-ratio: 1;
  }
`;
const CirclePlus = styled.div`
  position: relative;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: solid 1px black;
  &:hover {
    background-color: #999;
  }
`;
const PlusHorizon = styled.div`
  width: 10px;
  height: 2px;
  background-color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(90deg);
`;
const PlusVertical = styled.div`
  width: 10px;
  height: 2px;
  background-color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Button1 = styled.button`
  height: 16px;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  padding: 4px 10px;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  background-color: ${theme.backgroundColors.primary};
  @media (max-width: 1200px) {
    padding: 2px 0px;
    font-size: 16px;
    height: 40px;
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    padding: 2px 0px;
    font-size: 14px;
    height: 40px;
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0px;
    height: 40px;
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
  }
`;
const RowBetweenDiv = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 4px;
`;
const RowDiv = styled.div`
  display: flex;
  flex-flow: wrap row;
  gap: 10px;
`;
const BorderDiv = styled.div`
  width: 100%;
  border: solid ${theme.backgroundColors.border} 1px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`;
const ModalFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 10px;
  padding-bottom: 10px;
`;
const Button2 = styled.button`
  width: 80px;
  height: 30px;
  background-color: #32c2b9;
`;
