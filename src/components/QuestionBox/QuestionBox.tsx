import { useRecoilState } from "recoil";
import { QuestionInput, SendButton, Wrapper } from "./styled";
import { SendPlane } from "@emotion-icons/remix-fill/SendPlane";
import { chatState, contextState } from "../../store";
import { useEffect, useRef, useState } from "react";

const QuestionBox: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [isFile, setIsFile] = useState<boolean>(false);

  // eslint-disable-next-line
  const [chatting, setChatting] = useRecoilState(chatState);
  // eslint-disable-next-line
  const [context, setContext] = useRecoilState(contextState);

  const clickHandler = async () => {
    if (question.trim() !== "") {
      const newMsg = {
        id: Math.random(),
        text: question,
        isUser: true,
      };

      setChatting((prevChatting) => [...prevChatting, newMsg]);

      inputRef.current!.value = "";
      try {
        const res = await fetch("http://127.0.0.1:8000/chat/chatbot/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            question: question,
            context: context,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.answer) {
            const answer = {
              id: Math.random(),
              text: data.answer,
              isUser: false,
            };

            setChatting((prevChatting) => [...prevChatting, answer]);
          } else {
            const answer = {
              id: Math.random(),
              text: "죄송합니다. 질문을 다시 입력해주세요.",
              isUser: false,
            };

            setChatting((prevChatting) => [...prevChatting, answer]);
          }

          setQuestion("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return; // 한글 입력 시 두 번 event 감지하는 것 방지
    if (e.key === "Enter") {
      e.preventDefault();
      clickHandler();
    }
  };

  useEffect(() => {
    if (context.length !== 0) {
      setIsFile(true);
    }
  }, [context]);

  return (
    <Wrapper>
      <QuestionInput
        placeholder={!isFile ? "파일을 업로드 해주세요" : "질문을 입력하세요"}
        ref={inputRef}
        onChange={(e) => setQuestion(e.target.value)}
        disabled={!isFile}
        onKeyDown={handleEnterKey}
      />
      <SendButton onClick={clickHandler}>
        <SendPlane />
      </SendButton>
    </Wrapper>
  );
};

export default QuestionBox;
