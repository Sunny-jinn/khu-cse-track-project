import "./App.css";
import Main from "./components/Main";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
};

export default App;
