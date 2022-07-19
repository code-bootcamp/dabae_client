import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";
import InputHashTag from "../input/InputHashTag";

/**
 * Author : Sukyung Lee
 * FileName: HashTag.tsx
 * Date: 2022-07-09 14:26:00
 * Description : tags를 입력하고 보여주는 컴포넌트
 * 사용방법 : 상위 컴포넌트에서 <Tags /> 로 사용
 * const { tagsInput, ...tempInput } = { ...methods.getValues() }; 와 같이 api를 전송할 때 분리를 해주어야 한다.
 * <Form onSubmit={() => "return false"}> 로 enter키를 방지해주기
 */

type HashTagType = {
  placeholders?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
};

const HashTag = ({
  placeholders,
  width,
  height,
  backgroundColor,
}: HashTagType) => {
  const { getValues, register, setValue, resetField, watch } = useFormContext();
  watch("materials");

  const onKeyDownHandler = (e: any) => {
    if (e.target.value === "") return;
    if (getValues("materials").length > 5) {
      resetField("tagsInput");
      alert("6개가 최대 그만 입력");
      return;
    }
    setValue("materials", [...getValues("materials"), e.target.value]);
    resetField("tagsInput");
  };

  const onClickDeleteTags = (index: number) => () => {
    setValue("materials", [
      ...getValues("materials").slice(0, index),
      ...getValues("materials").slice(index + 1),
    ]);
  };

  return (
    <Container>
      {getValues("materials")?.map((i: any, index: number) => (
        <TagDiv key={uuid()} height={height}>
          {i}
          <button type="button" onClick={onClickDeleteTags(index)}>
            x
          </button>
        </TagDiv>
      ))}
      <InputHashTag
        type="text"
        width={width}
        height={height}
        borderRadius={"4px"}
        register={register("tagsInput")}
        placeholder={placeholders || "태그 입력"}
        backgroundColor={backgroundColor}
        onKeyDown={(e: any) => {
          if (e.key === "Enter") {
            onKeyDownHandler(e);
          }
        }}
      />
    </Container>
  );
};
export default HashTag;

const Container = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  gap: 8px;
`;

const TagDiv = styled.div<{ height?: string }>`
  background-color: ${theme.backgroundColors.primary};
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  height: ${(props) =>
    props.height ? props.height : "32px"}; // 패딩도 계산해서 넣어주었다.

  & > button {
    background: none;
    color: black;
    font-weight: 600;
  }
`;
