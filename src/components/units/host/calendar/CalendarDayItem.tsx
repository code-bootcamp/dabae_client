import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { ReactNode, useState } from "react";
import {
  dateFormat4y2m2d,
  dateFormat4y2m2d2h2m,
} from "../../../../function/date/format/dateFormat";
import { Modal, DatePicker } from "antd";
import Space from "../../../commons/space/Space";
import { CF } from "@/styles/commonComponentStyle";
import moment from "moment";
import { useFormContext } from "react-hook-form";
import Input from "@/src/components/commons/input/Input";
import { v4 as uuid } from "uuid";

type CalendarDayItemType = {
  color?: string;
  opacity?: string;
  day?: string;
  content?: any;
  id?: string;
  children?: ReactNode;
  date?: string;
  data?: any | any[];
  dayW?: number;
  onClickDayAddButton?: () => void;
  modal?: any;
};

const CalendarDayItem = (props: CalendarDayItemType) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { RangePicker } = DatePicker;
  const { register, setValue, getValues } = useFormContext();
  const [startClassDate, setStartClassDate] = useState([
    dateFormat4y2m2d2h2m(new Date()),
    dateFormat4y2m2d2h2m(new Date()),
  ]);
  const [, setCourseRecruitDeadLine] = useState([
    dateFormat4y2m2d2h2m(new Date()),
    dateFormat4y2m2d2h2m(new Date()),
  ]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeStartClassDate = (date: any, dateString: [string, string]) => {
    // date, dateString
    setStartClassDate([dateString[0], dateString[1]]);
    setValue("startClassDate", [dateString[0], dateString[1]]);
  };

  const onChangeCourseRecruitDeadLine = (
    date: any,
    dateString: [string, string]
  ) => {
    // date, dateString
    setCourseRecruitDeadLine([dateString[0], dateString[1]]);
    setValue("courseRecruitDeadLine", [dateString[0], dateString[1]]);
  };

  return (
    <Container today={dateFormat4y2m2d(new Date()) === props.id}>
      <ColumnDiv opacity={props.opacity}>
        {/* 일 수 */}
        <RowBetweenDiv>
          <DaySpan dayW={props.dayW}>{props.day}일 </DaySpan>
          <DayAddButton type="button" onClick={showModal}>
            <img src="/images/host/add_circle_icon.svg" />
          </DayAddButton>
        </RowBetweenDiv>
        {props.data?.schedule?.map((el: any, index: number) => (
          <Button type="button" key={uuid()} onClick={showModal}>
            {el.courseStartTime + " - " + el.courseEndTime}
          </Button>
        ))}
        {isModalVisible && (
          <Modal
            title="Basic Modal"
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
                          register={register("maxPerson")}
                          defaultValue={getValues("maxPerson")}
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
                    <RangePicker
                      onChange={onChangeStartClassDate}
                      format="YYYY/MM/DD HH:mm"
                      showTime
                      defaultValue={[
                        moment(
                          startClassDate[0].toString(),
                          "YYYY-MM-DD HH:mm"
                        ),
                        moment(
                          startClassDate[1].toString(),
                          "YYYY-MM-DD HH:mm"
                        ),
                      ]}
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
                      onChange={onChangeCourseRecruitDeadLine}
                      format="YYYY/MM/DD HH:mm"
                      showTime
                      defaultValue={[
                        moment(
                          startClassDate[0].toString(),
                          "YYYY-MM-DD HH:mm"
                        ),
                        moment(
                          startClassDate[1].toString(),
                          "YYYY-MM-DD HH:mm"
                        ),
                      ]}
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
const ColumnDiv = styled.div<{ opacity: string | undefined }>`
  display: flex;
  flex-flow: nowrap column;
  gap: 2px;
  opacity: ${(props) => (props.opacity ? "0.6" : 1)};
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
