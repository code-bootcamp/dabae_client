import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "../button/Button";
import InputTypeFile from "../input/InputTypeFile";

type UploadProfileOrganismType = {
  title?: string;
  defaultValue?: string;
};

const UploadProfileOrganism = (props: UploadProfileOrganismType) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [, setRenderToggle] = useState(false);
  const { getValues, setValue, trigger } = useFormContext();

  // // 이미지 업로드 클릭하면 숨겨진 input[type="file"] 클릭
  useEffect(() => {
    setValue(
      "profileImageURL",
      "https://storage.googleapis.com/" + props.defaultValue
    );
    trigger("profileImageURL");
  }, [props.defaultValue]);

  const onClickUploadImage = () => {
    fileRef.current?.click();
  };
  const onClickDeleteImgItemHandler = (e: any) => {
    URL.revokeObjectURL(getValues("profileImageURL")?.tempPath);
    setValue("profileImageURL", "null");
    setRenderToggle((prev) => !prev);
  };

  const onChangeUploadHandler = (e: any) => {
    if (e.target.files.length !== 0) {
      const inputFileArgs = e.target.files || undefined; // input에 넣어준 파일 인자 데이터들
      setValue("profileImageURL", {
        tempPath: URL.createObjectURL(inputFileArgs[0]), // 이미지 미리보기 때문에 임시로 사용되는 URL
        file: inputFileArgs[0],
      });
      setRenderToggle((prev) => !prev);
      e.target.value = ""; // onChange는 이전과 같이 같다면 이벤트가 발생하지 않아서 초기화 필요
    }
  };

  const dragDropUploadHandler = (e: any) => {
    const inputFileArgs = e.dataTransfer.files || undefined; // input에 넣어준 파일 인자 데이터들
    setValue("profileImageURL", {
      tempPath: URL.createObjectURL(inputFileArgs[0]), // 이미지 미리보기 때문에 임시로 사용되는 URL
      file: inputFileArgs[0],
    });
    setRenderToggle((prev) => !prev);
    e.target.value = ""; // onChange는 이전과 같이 같다면 이벤트가 발생하지 않아서 초기화 필요
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };

  const dragStartHandler = (e: any) => {
    e.target.classList.add("grabbing");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
  };

  const dragEndHandler = (e: any) => {
    e.dataTransfer.dropEffect = "move";
    e.target.classList.remove("grabbing");
    e.preventDefault();
  };

  const dragDropHandler = (e: any) => {
    dragDropUploadHandler(e);
  };

  return (
    <Container>
      <button
        type="button"
        onClick={onClickUploadImage}
        onDragOver={dragOverHandler}
        onDragStart={dragStartHandler}
        onDrop={dragDropHandler}
        onDragEnd={dragEndHandler}
        draggable
      >
        {typeof getValues("profileImageURL") === "string" ? (
          getValues("profileImageURL")?.split("/")[3] === "null" ||
          getValues("profileImageURL") === "null" ? (
            <ImgItem src={"/images/host/3d_man_brown_hat.svg"} />
          ) : (
            <ImgItem src={getValues("profileImageURL")} />
          )
        ) : (
          <ImgItem src={getValues("profileImageURL")?.tempPath} />
        )}
      </button>
      <Button
        onClick={onClickDeleteImgItemHandler}
        width={"100px"}
        height={"40px"}
      >
        비우기
      </Button>
      <InputTypeFile
        onChange={onChangeUploadHandler}
        fileRef={fileRef}
        display="none"
      />
    </Container>
  );
};

export default UploadProfileOrganism;

const Container = styled.div`
  display: flex;
  flex-flow: nowrap column;
  padding: 10px 0px;
  width: 100%;
  align-items: center;
  gap: 20px;
  h2 {
    font-weight: 800;
  }
  input {
    width: 100%;
    min-height: 52px;
    padding-left: 16px;
  }
`;
const ImgItem = styled.img`
  width: 100px;
  aspect-ratio: 1/1;
`;
