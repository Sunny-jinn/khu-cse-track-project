import styled from "@emotion/styled";
import { InputBox } from "./InputBox";

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

const Main = () => {
  return (
    <>
      <InputBox placeholder="Context 입력" />
      <InputBox placeholder="Question 입력" />
      <Button>확인</Button>
    </>
  );
};

export default Main;
