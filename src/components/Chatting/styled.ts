import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 30px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const commonStyle = `
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    overflow-wrap: break-word;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const UserChatBox = styled.div`
  ${commonStyle}
  margin-left: auto;
  background: #eeeeee;
`;

export const ComChatBox = styled.div`
  ${commonStyle}
  margin-right: auto;
  background: #3b58e6;
  color: #fff;
`;
