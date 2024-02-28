import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
