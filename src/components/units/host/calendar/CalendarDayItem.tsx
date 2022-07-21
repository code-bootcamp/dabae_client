import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { ChangeEvent, ReactNode, useState } from "react";
import { dateFormat4y2m2d } from "../../../../function/date/format/dateFormat";
import { Modal, DatePicker, TimePicker } from "antd";
import Space from "../../../commons/space/Space";
import { CF } from "@/styles/commonComponentStyle";
import moment from "moment";
import { useFormContext } from "react-hook-form";
import Input from "@/src/components/commons/input/Input";
import { v4 as uuid } from "uuid";

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
};

const CalendarDayItem = (props: CalendarDayItemType) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { RangePicker } = DatePicker;
  const { setValue, getValues } = useFormContext();
  const [edit, setEdit] = useState(false);
  const [editTempData, setEditTempData] = useState<any>({});
  const [classTime, setClassTime] = useState([
    moment("00:00", "HH:mm"),
    moment("00:00", "HH:mm"),
  ]);
  const [classRecruitDate, setClassRecruitDate] = useState([
    moment(dateFormat4y2m2d(new Date()), "YYYY-MM-DD"),
    moment(dateFormat4y2m2d(new Date()), "YYYY-MM-DD"),
  ]);
  const [maxPerson, setMaxPerson] = useState(0);

  const showModal = () => {
    setIsModalVisible(true);
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
    setMaxPerson(data.maxPerson);
    setIsModalVisible(true);
    setEditTempData({
      courseStartTime: data.courseStartTime,
      courseEndTime: data.courseEndTime,
      recruitmentStartDate: data.recruitmentStartDate,
      recruitmentEndDate: data.recruitmentEndDate,
      maxPerson: data.maxPerson,
    });
  };

  const handleOk = () => {
    const prevCourseDate = getValues("courseDate")?.find(
      (x: any) => x.date === props.date
    );
    if (prevCourseDate) {
      if (edit) {
        console.log(prevCourseDate.schedules);
        prevCourseDate.schedules = prevCourseDate.schedules.filter(
          (el: any) => el.courseStartTime !== editTempData.courseStartTime
        );
      }
      // 기존의 객체가 있으면 덮어쓰지 않고 정렬하고 스케줄을 추가해준다.
      let tempSchedules = [
        ...prevCourseDate.schedules,
        {
          courseStartTime: classTime[0].format("hh:mm"),
          courseEndTime: classTime[1].format("hh:mm"),
          recruitmentStartDate: classRecruitDate[0].format("YYYY-MM-DD"),
          recruitmentEndDate: classRecruitDate[1].format("YYYY-MM-DD"),
          maxPerson: Number(maxPerson),
        },
      ];
      // 수업 시간별로 정렬하기
      tempSchedules = tempSchedules.sort((a, b) => {
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
          schedules: tempSchedules,
        },
      ]);
    } else {
      // 기존의 객체가 없으면 새로 만든다.
      setValue("courseDate", [
        ...getValues("courseDate"),
        {
          date: props.date,
          schedules: [
            {
              courseStartTime: classTime[0].format("hh:mm"),
              courseEndTime: classTime[1].format("hh:mm"),
              recruitmentStartDate: classRecruitDate[0].format("YYYY-MM-DD"),
              recruitmentEndDate: classRecruitDate[1].format("YYYY-MM-DD"),
              maxPerson: Number(maxPerson),
            },
          ],
        },
      ]);
    }
    props.forceRender(); // 달력에 날짜를 변경하고 보여주기 위해서 강제 렌더링...
    initSetting();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    initSetting();
    setIsModalVisible(false);
  };

  const initSetting = () => {
    setClassRecruitDate([
      moment(dateFormat4y2m2d(new Date()), "YYYY-MM-DD"),
      moment(dateFormat4y2m2d(new Date()), "YYYY-MM-DD"),
    ]);
    setClassTime([moment("00:00", "HH:mm"), moment("00:00", "HH:mm")]);
    setMaxPerson(0);
    setEdit(false);
  };

  const onChangeClassTime = (time: any, timeString: [string, string]) => {
    // date, dateString
    setClassTime([
      moment(timeString[0], "hh:mm"),
      moment(timeString[1], "hh:mm"),
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

  const onChangeMaxPerson = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPerson(Number(e.target.value));
  };

  return (
    <Container today={dateFormat4y2m2d(new Date()) === props.id}>
      <ColumnDiv isThisMonth={props.isThisMonth}>
        {/* 일 수 */}
        <RowBetweenDiv>
          <DaySpan dayW={props.dayW}>{props.day}일 </DaySpan>
          <DayAddButton type="button" onClick={showModal}>
            <img src="/images/host/add_circle_icon.svg" />
          </DayAddButton>
        </RowBetweenDiv>
        {props.data?.schedules?.map((el: any, index: number) => (
          <Button
            type="button"
            key={uuid()}
            onClick={showModalAndDefaultSetValue(el)}
          >
            {el.courseStartTime + " - " + el.courseEndTime}
          </Button>
        ))}
        {isModalVisible && (
          <Modal
            title="수업 시간 등록"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
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
                          onChange={onChangeMaxPerson}
                          value={maxPerson}
                        />
                      </div>
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
                  <CF.ColumnDiv gap={10}>
                    <div> 수업 시작 날짜 ~ 수업 종료 날짜 </div>
                    <TimePicker.RangePicker
                      onChange={onChangeClassTime}
                      format="HH:mm"
                      value={[classTime[0], classTime[1]]}
                    />
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
                  </CF.ColumnDiv>
                </BorderDiv>
              </Space>
            </CF.RowBetweenDiv>
          </Modal>
        )}
      </ColumnDiv>
    </Container>
  );
};

export default CalendarDayItem;

const Container = styled.div<{ today?: boolean }>`
  min-height: 120px;
  padding: 4px;
  display: grid;
  box-shadow: 0px 0px 1px 1px #32c2b9 inset;
  background-color: ${(props) => props.today && "#fffcf2"};
`;
const ColumnDiv = styled.div<{ isThisMonth: string | undefined }>`
  display: flex;
  flex-flow: nowrap column;
  gap: 2px;
  opacity: ${(props) => (props.isThisMonth ? 0.6 : 1)};
`;
const DaySpan = styled.span<{ dayW?: number }>`
  font-size: 16px;
  color: ${(props) =>
    (props.dayW === 0 && "red") || (props.dayW === 6 && "blue") || "#333333"};

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
const DayAddButton = styled.button`
  img {
    max-width: 16px;
    max-height: 16px;
  }
`;
const Button = styled.button`
  height: 24px;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  padding: 0px 0px 0px 4px;
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
`;
const BorderDiv = styled.div`
  width: 100%;
  border: solid ${theme.backgroundColors.border} 1px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`;
