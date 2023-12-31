import styled from "@emotion/styled";

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

export const FileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 700px;
  border-right: 2px solid #e0e0e0;
  color: ${(props) => props.theme.mode.color};
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

export const UploadText = styled.div`
  margin-top: 20px;
  height: 30px;
  color: #3b58e6;
  font-weight: 600;
`;
