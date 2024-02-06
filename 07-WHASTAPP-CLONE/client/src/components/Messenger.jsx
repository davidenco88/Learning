import { AppBar, Toolbar, Box, styled } from "@mui/material";

import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #f0f2f5;
`;

const Header = styled(AppBar)`
  height: 222px;
  background-color: #00a884;
  box-shadow: none;
`;

function Messenger() {
  return (
    <>
      <Component>
        <Header>
          <Toolbar></Toolbar>
        </Header>
        <LoginDialog />
      </Component>
    </>
  );
}

export default Messenger;
