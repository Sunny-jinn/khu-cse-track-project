import { RecoilState, atom } from "recoil";

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
}

export const chatState: RecoilState<ChatMessage[]> = atom({
  key: "chatState",
  default: [],
});
