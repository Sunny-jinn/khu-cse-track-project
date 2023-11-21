import { Container, Wrapper, DarkModeIcon } from "./styled";
import { DarkMode } from "@emotion-icons/material-outlined/DarkMode";
import { LightMode } from "@emotion-icons/material/LightMode";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const clickHandle = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <Container>
      <Wrapper>
        <div>뭐든지 물어봐!</div>
        <DarkModeIcon onClick={clickHandle}>
          {isDarkMode ? <DarkMode width={30} /> : <LightMode width={30} />}

          {/* <LightMode width={30} /> */}
        </DarkModeIcon>
      </Wrapper>
    </Container>
  );
};

export default Header;
