import { Container, Wrapper, DarkModeIcon, Title } from "./styled";
import { DarkMode } from "@emotion-icons/material-outlined/DarkMode";
import { LightMode } from "@emotion-icons/material/LightMode";
import { useRecoilState } from "recoil";
import { modeState } from "../../store";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(modeState);

  const clickHandle = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <Container>
      <Wrapper>
        <Title>뭐든지 물어봐!</Title>
        <DarkModeIcon onClick={clickHandle}>
          {isDarkMode ? <DarkMode width={30} /> : <LightMode width={30} />}

          {/* <LightMode width={30} /> */}
        </DarkModeIcon>
      </Wrapper>
    </Container>
  );
};

export default Header;
