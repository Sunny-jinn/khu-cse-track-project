import styled from "@emotion/styled";
import React from "react";

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 2px solid #3b58e6;
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

type InputBoxProps = {
  placeholder: string;
};

export const InputBox: React.FC<InputBoxProps> = ({ placeholder }) => {
  return <Input placeholder={placeholder} />;
};
