import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid ${(props) => props.theme.mode.border};
  color: ${(props) => props.theme.mode.color};
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: "Black Han Sans", sans-serif;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
`;

export const DarkModeIcon = styled.div`
  margin-left: auto;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #eeeeee;
    color: #000;
  }
`;
