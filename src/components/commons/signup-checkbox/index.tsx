import { CF } from "@/styles/commonComponentStyle";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const dataList = [
  { id: 1, data: "(필수) 이용약관동의" },
  { id: 2, data: "(필수) 개인정보 처리방침 동의" },
  // { id: 3, data: "(필수) 위치기반 서비스 이용약관 동의" },
  { id: 3, data: "(선택) 마케팅 수신 동의" },
];

const Checkbox = () => {
  const [checkbox, setCheckbox] = useState([]);
  const [checkboxAll, setCheckboxAll] = useState(false);

  const onClickHandler = (checked, i) => {
    if (checked) {
      // 방금 누른 체크박스를 제외하고 다 눌려져 있다면
      if (dataList.length - 1 === checkbox.length) {
        setCheckboxAll(true);
      }
      // 방금 누른 체크박스를 true로 바꾸어준다.
      setCheckbox([...checkbox, i]);
    } else {
      // 전체 체크박스가 눌려져 있다면 체크박스들 중에 체크박스를 해제했으므로 false로 바꾸어준다.
      if (checkboxAll) {
        setCheckboxAll(false);
      }
      setCheckbox(checkbox.filter((a) => a !== i));
    }
  };
  const onClickAllCheckBoxHandler = (checked) => {
    if (checked) {
      setCheckbox(dataList.map((element) => element.id));
      setCheckboxAll(true);
    } else {
      setCheckbox([]);
      setCheckboxAll(false);
    }
  };

  const onClickArrow = (event: any) => {
    console.log(event.target.id);
  };

  return (
    <>
      <Item>
        <CF.RowDiv gap={20}>
          <input
            type="checkbox"
            onChange={(element) =>
              onClickAllCheckBoxHandler(element.target.checked)
            }
            checked={checkboxAll}
          />
          <div> 전체 동의</div>
        </CF.RowDiv>
        {dataList.map((el: any) => (
          <CF.RowDiv key={uuidv4()}>
            <CF.RowDiv gap={20}>
              <input
                type="checkbox"
                onChange={(element) =>
                  onClickHandler(element.target.checked, el.id)
                }
                checked={checkbox.includes(el.id)}
              />
              <div> {el.data} </div>
            </CF.RowDiv>
            <Img
              src="/images/login/arrow.svg"
              id={el.id}
              onClick={onClickArrow}
            />
          </CF.RowDiv>
        ))}
      </Item>
    </>
  );
};
export default Checkbox;

const Item = styled.div`
  width: 100%;
  font-size: 18px;

  input[type="checkbox"] {
    width: 20px; /*Desired width*/
    height: 20px; /*Desired height*/
    cursor: pointer;
    accent-color: #929090;
  }
`;

const Img = styled.img`
  padding-right: 10px;
  cursor: pointer;
`;
