import styled from "@emotion/styled";
import "./App.css";
import Main from "./components/Main";

const Container = styled.div`
  width: 100%;
  padding-top: 400px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
`;

const App = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
      </Container>
    </>
  );
};

export default App;
