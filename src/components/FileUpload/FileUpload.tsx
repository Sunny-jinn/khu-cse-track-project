import { ChangeEvent, useState } from "react";
import { FileDiv, PreviewImg, SendButton, UploadLabel } from "./styled";

const FileUpload = () => {
  const [file, setFile] = useState<FileList | null>();
  const [fileExtension, setFileExtension] = useState<string | null>();

  const fileUploadHandle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files);

      const fileNameParts = e.target.files[0].name.split(".");
      if (fileNameParts.length > 1) {
        const extension = fileNameParts.pop()!.toLowerCase(); // 소문자로 변환
        setFileExtension(extension);
      }
    }
  };

  const clickHandle = async () => {
    if (file) {
      const formData = new FormData();
      for (let i = 0; i < file.length; i++) {
        formData.append("files", file[i]);
      }

      try {
        const res = await fetch("http://localhost:8000/conv/upload/", {
          method: "POST",
          body: formData,
        });
        if (res.ok) {
          console.log("업로드 성공");
        } else {
          console.log("업로드 실패");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <FileDiv>
      <div
        style={{
          width: 200,
          height: 200,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        {file && (
          <>
            <PreviewImg
              src={`/assets/${fileExtension === "pdf" ? "pdf" : "docx"}.png`}
              alt="파일"
            />
            {file[0].name}
          </>
        )}
      </div>
      <input
        type="file"
        name="file"
        id="file"
        onChange={fileUploadHandle}
        style={{ display: "none" }}
        accept=".pdf, .docx, .doc"
      />
      <UploadLabel htmlFor="file">파일 선택</UploadLabel>
      <SendButton onClick={clickHandle}>업로드</SendButton>
    </FileDiv>
  );
};

export default FileUpload;
