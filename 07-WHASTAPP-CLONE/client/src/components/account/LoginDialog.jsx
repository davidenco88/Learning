import { GoogleLogin } from "@react-oauth/google";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import qrImage from "../../assets/qr_code.png";

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  marginBottom: "12%",
  width: "60%",
  maxWidth: "100%",
  maxheigth: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #41525d;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #41525d;
  }
`;

function LoginDialog() {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1 .Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or Settings and select Linked Devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box>
          <QRCode src={qrImage} alt="qr_code" />
          <GoogleLogin />
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
