import { useRecoilValue } from "recoil";
import { chatMsgState } from "../../store";
import { ComChatBox, UserChatBox, Wrapper } from "./styled";

const Chatting = () => {
  const chatMsg = useRecoilValue(chatMsgState);

  return (
    <Wrapper>
      {chatMsg.map((chat, idx) =>
        chat.isUser ? (
          <UserChatBox key={idx}>{chat.text}</UserChatBox>
        ) : (
          <ComChatBox key={idx}>{chat.text}</ComChatBox>
        )
      )}
    </Wrapper>
  );
};

export default Chatting;
