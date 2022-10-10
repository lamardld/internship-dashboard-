import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./components/theme";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/space-grotesk";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
        {/* <Newcomp /> */}
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
