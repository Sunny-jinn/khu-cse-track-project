import { atom, selector } from "recoil";

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
}

export const chatState = atom<ChatMessage[]>({
  key: "chatState",
  default: [],
});

export const chatMsgState = selector<ChatMessage[]>({
  key: "chatMsgState",
  get: ({ get }) => {
    const msgList = get(chatState);
    return msgList;
  },
});

export const contextState = atom<string>({
  key: "contextState",
  default: "",
});
