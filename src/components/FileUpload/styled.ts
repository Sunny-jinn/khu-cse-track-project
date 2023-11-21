import styled from "@emotion/styled";

export const FileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 700px;
  border-right: 2px solid #e0e0e0;
`;

const commonStyle = `
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

export const UploadLabel = styled.label`
  ${commonStyle}
`;

export const SendButton = styled.button`
  ${commonStyle}
  margin-top: 10px;
  font-size: 16px;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 180px;
`;
