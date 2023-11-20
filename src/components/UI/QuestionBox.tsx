import { QuestionInput, SendButton, Wrapper } from "./styled";
import { SendPlane } from "@emotion-icons/remix-fill/SendPlane";

const QuestionBox: React.FC = () => {
  return (
    <Wrapper>
      <QuestionInput placeholder="질문을 입력하세요" />
      <SendButton>
        <SendPlane />
      </SendButton>
    </Wrapper>
  );
};

export default QuestionBox;
