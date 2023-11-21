import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Main from "./components/Main";
import { useRecoilValue } from "recoil";
import { DarkTheme, LightTheme } from "./styles/theme";
import { modeCurrentState } from "./store";

const App = () => {
  const currentMode = useRecoilValue(modeCurrentState);

  return (
    <ThemeProvider theme={currentMode ? LightTheme : DarkTheme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
