import { useRecoilValue } from "recoil";
import { chatMsgState } from "../../store";
import { ComChatBox, UserChatBox, Wrapper } from "./styled";
import ReactTyped from "react-typed";
import { useEffect, useRef } from "react";

const Chatting = () => {
  const chatMsg = useRecoilValue(chatMsgState);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatMsg]);

  return (
    <Wrapper ref={containerRef}>
      {chatMsg.map((chat, idx) =>
        chat.isUser ? (
          <UserChatBox key={idx}>{chat.text}</UserChatBox>
        ) : (
          <ComChatBox key={idx}>
            <ReactTyped
              strings={[chat.text]}
              typeSpeed={60}
              backSpeed={40}
              showCursor={false}
            />
          </ComChatBox>
        )
      )}
    </Wrapper>
  );
};

export default Chatting;
