import { useRecoilState } from "recoil";
import { QuestionInput, SendButton, Wrapper } from "./styled";
import { SendPlane } from "@emotion-icons/remix-fill/SendPlane";
import { chatState } from "../../store";
import { useEffect, useRef, useState } from "react";

const QuestionBox: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [question, setQuestion] = useState<string>("");

  const [chatting, setChatting] = useRecoilState(chatState);

  const clickHandler = () => {
    if (question.trim() !== "") {
      const newMsg = {
        id: Math.random(),
        text: question,
        isUser: true,
      };

      setChatting([...chatting, newMsg]);

      inputRef.current!.value = "";

      setQuestion("");
    }
  };

  useEffect(() => {
    console.log(chatting);
  }, [chatting]);

  return (
    <Wrapper>
      <QuestionInput
        placeholder="질문을 입력하세요"
        ref={inputRef}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <SendButton onClick={clickHandler}>
        <SendPlane />
      </SendButton>
    </Wrapper>
  );
};

export default QuestionBox;
