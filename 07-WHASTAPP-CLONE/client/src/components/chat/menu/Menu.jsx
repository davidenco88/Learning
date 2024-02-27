//import { useState } from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

function Menu() {
  // const [text, setText] = useState('');
  return (
    <Box>
      <Header />
      <Search />
      <Conversations />
    </Box>
  );
}

export default Menu;
