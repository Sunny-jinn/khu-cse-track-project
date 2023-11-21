import { atom, selector } from "recoil";

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
}

export const chatState = atom<ChatMessage[]>({
  key: "chatState",
  default: [
    {
      id: 0,
      text: "김진우는 몇실인가요?",
      isUser: true,
    },
    {
      id: 1,
      text: "김진우는 25살이다.",
      isUser: false,
    },
    {
      id: 2,
      text: "ㄱㅅㄱㅅ",
      isUser: true,
    },
  ],
});

export const chatMsgState = selector<ChatMessage[]>({
  key: "chatMsgState",
  get: ({ get }) => {
    const msgList = get(chatState);

    return msgList;
  },
});
