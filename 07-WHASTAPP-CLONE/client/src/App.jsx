import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./components/Messenger";

function App() {
  //Configurar archivo .env para manejar estas credenciales
  const clientId =
    "415340460413-d0ubl0ntctt7hvu60cn44fsrv8flk1sm.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
