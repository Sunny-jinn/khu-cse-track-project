import styled from "@emotion/styled";
import { InputBox } from "./InputBox";
import { ChangeEvent, useState } from "react";

const Container = styled.div`
  width: 100%;
  padding-top: 400px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1200px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background: #3b58e6;
  transition: 0.3s;

  &:hover {
    background: #354fcf; // 어두운 색상으로 변경
  }

  &:active {
    background: #17225b; // 어두운 색상으로 변경
  }
`;

const FileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const UploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b58e6;
  width: 200px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #354fcf; // 어두운 색상으로 변경
  }

  &:active {
    background: #17225b; // 어두운 색상으로 변경
  }
`;

const ExampleImg = styled.img`
  width: 100%;
  height: 180px;
`;

const Main: React.FC = () => {
  const [fileName, setFileName] = useState<string>("");

  const fileUploadHandle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const file: File | null = e.target.files[0];
      setFileName(file.name);
    }
  };

  return (
    <Container>
      <Wrapper>
        <FileDiv>
          <div
            style={{
              width: 200,
              height: 200,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            {fileName && (
              <>
                <ExampleImg src="/assets/pdf.png" alt="파일" />
                {fileName}
              </>
            )}
          </div>
          <input
            type="file"
            name="file"
            id="file"
            onChange={fileUploadHandle}
            style={{ display: "none" }}
            accept=".pdf, .docx"
          />
          <UploadLabel htmlFor="file">파일 선택</UploadLabel>
        </FileDiv>
        <div>
          <InputBox placeholder="Context 입력" />
          <InputBox placeholder="Question 입력" />
          <Button>확인</Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Main;
