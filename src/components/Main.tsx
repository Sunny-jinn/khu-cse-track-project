import styled from "@emotion/styled";
import FileUpload from "./FileUpload/FileUpload";
import Question from "./Question/Question";

const Container = styled.div`
  width: 100%;
  padding-top: 200px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <FileUpload />
        <Question />
      </Wrapper>
    </Container>
  );
};

export default Main;
