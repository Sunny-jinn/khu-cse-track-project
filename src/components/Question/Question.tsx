import Chatting from "../Chatting/Chatting";
import QuestionBox from "../UI/QuestionBox";
import { Wrapper } from "./styled";

const Question = () => {
  return (
    <Wrapper>
      <Chatting />
      <QuestionBox />
    </Wrapper>
  );
};

export default Question;
