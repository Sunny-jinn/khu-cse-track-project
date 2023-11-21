import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserChatBox = styled.div`
  margin-left: auto;
  padding: 20px;
  border-radius: 10px;
  background: #eeeeee;
  max-width: 600px;
  overflow-wrap: break-word;
  margin-bottom: 20px;
`;

export const ComChatBox = styled.div`
  margin-right: auto;
  padding: 20px;
  border-radius: 10px;
  background: #3b58e6;
  color: #fff;
  max-width: 600px;
  overflow-wrap: break-word;
  margin-bottom: 20px;
`;
