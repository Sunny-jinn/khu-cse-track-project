import styled from "@emotion/styled";
import FileUpload from "./FileUpload/FileUpload";
import Question from "./Question/Question";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.mode.background};
  transition: 0.3s ease-in-out;
  /* padding-top: 200px; */
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: 85vh;
  justify-content: space-between;
  align-items: center;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <FileUpload />
        <Question />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Main;
