import { ChangeEvent, useState } from "react";
import { FileDiv, PreviewImg, UploadLabel } from "./styled";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>();
  const [fileExtension, setFileExtension] = useState<string | null>();

  const fileUploadHandle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);

      const fileNameParts = e.target.files[0].name.split(".");
      if (fileNameParts.length > 1) {
        const extension = fileNameParts.pop()!.toLowerCase(); // 소문자로 변환
        setFileExtension(extension);
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
            {file.name}
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
    </FileDiv>
  );
};

export default FileUpload;
