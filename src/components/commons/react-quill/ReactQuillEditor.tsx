import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React, { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { useFormContext } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }: any) => (
      <RQ ref={forwardedRef} {...props} />
    );
  },
  { ssr: false }
);

const ReactQuillEditor = (props: any) => {
  const quillRef = useRef<any>(null);
  const [uploadFileGQL] = useMutation(UPLOAD_FILE);
  const { setValue, getValues } = useFormContext();
  const onChangeReactQuill = (value: any) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
  };

  const imageHandler = () => {
    try {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      // input.setAttribute("accept", "image/*");
      document.body.appendChild(input);

      input.click();

      input.onchange = async () => {
        const file: any = input.files;
        const fileTemp = [];
        fileTemp.push(file[0]);
        if (file[0] !== null) {
          const result = await uploadFileGQL({
            variables: { files: fileTemp },
          });
          // // S3 Presigned URL로 업로드하고 image url 받아오기
          // 현재 커서 위치에 이미지를 삽입하고 커서 위치를 +1 하기
          console.log(result);
          const range = quillRef.current.getEditorSelection();
          console.log(range);
          console.log(quillRef.current.getEditor());
          quillRef.current
            .getEditor()
            .insertEmbed(
              range.index,
              "image",
              "https://storage.googleapis.com/" + result.data?.uploadFile[0]
            );
          console.log(quillRef.current.getEditor());
          quillRef.current.getEditor().setSelection(range.index + 1);
        }
        input.remove();
        // document.body.querySelector(":scope > input").remove();
      };
    } catch (err) {
      console.log(err);
    }
  };

  // useMemo를 사용한 이유는 modules가 렌더링마다 변하면 에디터에서 입력이 끊기는 버그가 발생
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          [{ direction: ["rtl"] }],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  return (
    <div>
      <ReactQuillStyle
        forwardedRef={quillRef}
        placeholder="본문을 입력하세요..."
        modules={modules}
        formats={formats}
        value={getValues("contents") || props.defaultValue || ""}
        onChange={onChangeReactQuill}
        name="editor"
      />
    </div>
  );
};

export default ReactQuillEditor;

const ReactQuillStyle = styled(ReactQuill)<{ height: string }>`
  overflow-y: scroll;
  width: 100%;
  overflow: auto;
  .ql-container {
    padding: 0px 0px 50px 0px;
    height: ${(props) => props.height || "600px"};
  }

  .ql-toolbar {
  }
`;
