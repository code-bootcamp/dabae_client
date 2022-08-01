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

const ReactQuillEditor = (description: any, setDescription: any) => {
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
          const range = quillRef.current.getEditorSelection();
          console.log("range", range);
          console.log("quillRef.current", quillRef.current);
          console.log("result", result);
          quillRef.current
            .getEditor()
            .insertEmbed(
              range.index,
              "image",
              "https://storage.googleapis.com/" + result.data?.uploadFile[0]
            );
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
        value={getValues("contents") || ""}
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

// interface IReactQuillEditorProps {
//   placeholder?: string;
//   register?: any;
//   height?: any;
//   title1?: string;
//   errors?: string;
//   defaultValue?: string;
//   editorOnchange?: any;
// }

// const ReactQuillEditor = ({
//   title1,
//   errors,
//   height,
//   editorOnchange,
//   defaultValue,
// }: IReactQuillEditorProps) => {
//   const modules = useMemo(
//     () => ({
//       toolbar: {
//         container: [
//           ["bold", "italic", "underline", "strike"], // toggled buttons
//           [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//           [{ header: [1, 2, 3, 4, 5, 6, false] }],
//           [{ font: [] }],
//           [{ align: [] }],
//           [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//           [{ header: 1 }, { header: 2 }], // custom button values
//           [{ list: "ordered" }, { list: "bullet" }],
//           [{ script: "sub" }, { script: "super" }], // superscript/subscript
//           [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//           [{ direction: "rtl" }], // text direction
//           ["clean"], // remove formatting button
//           ["blockquote", "link", "code-block", "formula", "image", "video"], // media
//         ],
//         handlers: {
//           imageUploader: imageHandler,
//         },
//       },
//     }),
//     []
//   );

//   const imageHandler = (e: any) => {
//     console.log("ReactQuillEditor.tsx", "?????");
//   };

//   const { setValue } = useFormContext();

//   const onChangeContents = (value: string) => {
//     setValue("contents", value === "<p><br></p>" ? "" : value);
//     // trigger("contents");
//   };

//   console.log("defaultValue : " + defaultValue);

//   return (
//     <Container>
//       {title1 && <Title1Div> {title1} </Title1Div>}
//       <ReactQuillStyle
//         id="editor"
//         onChange={onChangeContents}
//         modules={modules}
//         theme="snow"
//         height={"600px"}
//         placeholder="내용을 입력해주세요."
//         defaultValue={defaultValue}
//       />
//       <Error> {errors} </Error>
//     </Container>
//   );
// };
// export default ReactQuillEditor;

// const Container = styled.div`
//   resize: none;
//   width: 100%;
//   height: 400px;
//   gap: 16px;
//   margin-bottom: 40px;
// `;
// const ReactQuillStyle = styled(ReactQuill)<{ height: string }>`
//   overflow-y: scroll;
//   .ql-container {
//     height: ${(props) => props.height || "300px"};
//   }
//   .ql-toolbar {
//   }
// `;

// const Title1Div = styled.div`
//   font-weight: 800;
//   font-size: 1.4em;
// `;
// const Error = styled.span`
//   color: red;
//   font-size: 0.9em;
// `;
