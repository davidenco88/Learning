import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./components/Messenger";

function App() {
  return (
    <GoogleOAuthProvider>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
