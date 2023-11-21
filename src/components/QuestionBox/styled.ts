import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const QuestionInput = styled.input`
  border: 0;
  border-top: 1px solid #cccccc;
  width: 100%;
  height: 50px;
  font-size: 16px;
  outline: none;
  padding-top: 20px;
  padding-right: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.mode.color};

  background: none;
  &:disabled {
    color: red;
  }
`;

export const SendButton = styled.button`
  background: none;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: none;
  position: absolute;
  right: 0;
  top: 17px;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.mode.color};

  &:hover {
    background: #dddddd;
  }
`;
