import { CF } from "@/styles/commonComponentStyle";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";
import InputTypeFile from "../../commons/input/InputTypeFile";

type UploadTemplateType = {
  title?: string;
  defaultValue?: string;
};

const UploadTemplate = ({ title, defaultValue }: UploadTemplateType) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [, setRenderToggle] = useState(false);

  // 이미지 업로드 클릭하면 숨겨진 input[type="file"] 클릭
  useEffect(() => {
    setValue("images", defaultValue);
  }, [defaultValue]);

  const onClick = () => {
    fileRef.current?.click();
  };
  const { getValues, setValue } = useFormContext();
  const onClickDeleteImgItemHandler = (e: any) => {
    const temp = getValues("images").filter(
      (i: any, index: number) => index !== e.currentTarget.id >> 0
    );
    setValue("images", temp);
    setRenderToggle((prev) => !prev);
  };

  const onChangeUploadHandler = (type: any) => (e: any) => {
    const temp = getValues("images") ? getValues("images") : [];
    const file = e.target.files || undefined;
    if (file.length + temp.length > 5) {
      alert("5개까지만 업로드가 가능합니다.");
    } else if (file !== undefined) {
      for (let i = 0; i < file.length; i++) {
        temp.push({ tempPath: URL.createObjectURL(file[i]), file: file[i] });
      }
      setValue("images", temp);
      setRenderToggle((prev) => !prev);
    }
  };

  const dragDropUploadHandler = (e: any) => {
    const temp = getValues("images") ? getValues("images") : [];
    const file = e.dataTransfer.files || undefined;
    if (file.length + temp.length > 5) {
      alert("5개까지만 업로드가 가능합니다.");
    } else if (file !== undefined) {
      for (let i = 0; i < file.length; i++) {
        temp.push({ tempPath: URL.createObjectURL(file[i]), file: file[i] });
      }
      setValue("images", temp);
      setRenderToggle((prev) => !prev);
    }
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
  };

  const dragDropHandler = (e: any) => {
    dragDropUploadHandler(e);
  };

  return (
    <Container>
      <CF.RowDiv gap={10}>
        <UploadSpace
          onClick={onClick}
          onDragOver={dragOverHandler}
          onDragStart={dragStartHandler}
          onDrop={dragDropHandler}
          onDragEnd={dragEndHandler}
        >
          <img src="/images/upload/cloud_upload.svg" />
          <div> Drag and Drop or Click </div>
        </UploadSpace>
      </CF.RowDiv>
      {/* 여기에 이미지 보여주기(이미지, 파일이름, 크기 등) */}
      <ImgList>
        {getValues("images")?.map((i: any, index: number) => (
          <div key={uuid()}>
            <button
              type="button"
              id={index + ""}
              onClick={onClickDeleteImgItemHandler}
              draggable
            >
              {i.tempPath ? (
                <ImgItem src={i.tempPath} />
              ) : (
                <ImgItem src={`https://storage.googleapis.com/${i}`} />
              )}
            </button>
          </div>
        ))}
      </ImgList>
      <InputTypeFile
        onChange={onChangeUploadHandler("common")}
        fileRef={fileRef}
        display="none"
        multiple
      />
    </Container>
  );
};

export default UploadTemplate;

const Container = styled.div`
  display: flex;
  flex-flow: nowrap column;
  padding: 10px 0px;
  width: 100%;
  h2 {
    font-weight: 800;
  }
  input {
    width: 100%;
    min-height: 52px;
    padding-left: 16px;
  }
`;

const UploadSpace = styled.div`
  width: 100%;
  height: 160px;
  border: dotted 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: nowrap column;
  font-size: 1rem;
  cursor: pointer;

  & > img {
    width: 30px;
    height: 30px;
  }
`;
const ImgList = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0px;
`;
const ImgItem = styled.img`
  width: 100px;
  aspect-ratio: 1/1;
`;
