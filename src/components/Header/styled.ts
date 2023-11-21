import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
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

  &:hover {
    background: #eeeeee;
  }
`;
