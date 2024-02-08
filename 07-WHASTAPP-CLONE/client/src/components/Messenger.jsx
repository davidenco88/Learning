import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { AppBar, Toolbar, Box, styled } from "@mui/material";

import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginHeader = styled(AppBar)`
  height: 222px;
  background-color: #00a884;
  box-shadow: none;
`;

const ChatHeader = styled(AppBar)`
  height: 127px;
  background-color: #00a884;
  box-shadow: none;
`;

function Messenger() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        {account ? (
          <>
            <ChatHeader>
              <Toolbar></Toolbar>
            </ChatHeader>
            <ChatDialog />
          </>
        ) : (
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
        )}
      </Component>
    </>
  );
}

export default Messenger;
