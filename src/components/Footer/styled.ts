import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: auto;
  width: 100%;
  height: 250px;
  background: ${(props) => props.theme.mode.footerBack};
  color: ${(props) => props.theme.mode.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
`;

export const Wrapper = styled.div`
  width: 1200px;
`;

export const Developers = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  width: 100%;
`;

export const Part = styled.div`
  width: 100px;
  font-weight: 600;
  line-height: 2;
`;

export const Name = styled.div`
  line-height: 2;
`;
