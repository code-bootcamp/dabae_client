import { CF } from "@/styles/commonComponentStyle";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";
import InputTypeFile from "../../commons/input/InputTypeFile";

type UploadTemplateType = {
  title?: string;
  defaultValue?: [];
};

const UploadTemplate = ({ title, defaultValue }: UploadTemplateType) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [, setRenderToggle] = useState(false);
  const fileThumbnailRef = useRef<HTMLInputElement>(null);
  const { getValues, setValue, trigger, formState } = useFormContext();

  // 이미지 업로드 클릭하면 숨겨진 input[type="file"] 클릭
  useEffect(() => {
    setValue("imageURLs", defaultValue);
  }, [defaultValue]);

  const onClickUploadImage = () => {
    fileRef.current?.click();
  };
  const onClickDeleteImgItemHandler = (e: any) => {
    const temp = getValues("imageURLs").filter(
      (i: any, index: number) => index !== e.currentTarget.id >> 0
    );
    setValue("imageURLs", temp);
    trigger("imageURLs");
    setRenderToggle((prev) => !prev);
  };

  const onChangeUploadHandler = (type: string) => (e: any) => {
    const imageURLsArgs = getValues("imageURLs") ? getValues("imageURLs") : []; // 기존 이미지 데이터 urls
    const inputFileArgs = e.target.files || undefined; // input에 넣어준 파일 인자 데이터들
    if (inputFileArgs.length + imageURLsArgs.length > 4) {
      // 기존에 존재하던 파일 + input에 넣어준 파일의 총 갯수
      alert("4개까지만 업로드가 가능합니다.");
    } else if (inputFileArgs !== undefined) {
      if (type === "common") {
        for (let i = 0; i < inputFileArgs.length; i++) {
          imageURLsArgs.push({
            tempPath: URL.createObjectURL(inputFileArgs[i]), // 이미지 미리보기 때문에 임시로 사용되는 URL
            file: inputFileArgs[i],
          });
        }
      } else if (type === "thumbnail") {
        imageURLsArgs.unshift({
          tempPath: URL.createObjectURL(inputFileArgs[0]),
          file: inputFileArgs[0],
        });
      }
      setValue("imageURLs", imageURLsArgs);
      trigger("imageURLs");
      setRenderToggle((prev) => !prev);
    }
  };

  const onClickUploadThumbnail = () => {
    fileThumbnailRef.current?.click();
  };

  const dragDropUploadHandler = (e: any) => {
    const imageURLsArgs = getValues("imageURLs") ? getValues("imageURLs") : [];
    const inputFileArgs = e.dataTransfer.files || undefined;
    if (inputFileArgs.length + imageURLsArgs.length > 4) {
      alert("4개까지만 업로드가 가능합니다.");
    } else if (inputFileArgs !== undefined) {
      for (let i = 0; i < inputFileArgs.length; i++) {
        imageURLsArgs.push({
          tempPath: URL.createObjectURL(inputFileArgs[i]),
          file: inputFileArgs[i],
        });
      }
      setValue("imageURLs", imageURLsArgs);
      trigger("imageURLs");
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
        <UploadThumbnailSpace onClick={onClickUploadThumbnail}>
          <img src="/images/upload/cloud_upload.svg" />
          <div> 썸네일 </div>
        </UploadThumbnailSpace>
        <UploadSpace
          onClick={onClickUploadImage}
          onDragOver={dragOverHandler}
          onDragStart={dragStartHandler}
          onDrop={dragDropHandler}
          onDragEnd={dragEndHandler}
        >
          <img src="/images/upload/cloud_upload.svg" />
          <div> Drag and Drop or Click </div>
        </UploadSpace>
      </CF.RowDiv>
      <ErrorDiv>{formState.errors.imageURLs?.message}</ErrorDiv>
      <ImgList>
        {getValues("imageURLs")?.map((i: any, index: number) => (
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
      <InputTypeFile
        onChange={onChangeUploadHandler("thumbnail")}
        fileRef={fileThumbnailRef}
        display="none"
      />
    </Container>
  );
};

export default UploadTemplate;

const Container = styled.div`
  display: flex;
  flex-flow: nowrap column;
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
  height: 140px;
  border: 1px solid #acebe7;
  border-radius: 10px;
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
const UploadThumbnailSpace = styled.div`
  aspect-ratio: 1;
  height: 140px;
  /* border: dotted 1px black; */
  border: 1px solid #acebe7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: nowrap column;
  font-size: 1rem;
  cursor: pointer;
`;
const ImgList = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  gap: 10px;
  padding-top: 10px;
`;
const ImgItem = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
const ErrorDiv = styled.div`
  color: red;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
