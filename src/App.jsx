import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";
import Card from "./components/Card";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card />
    </ThemeProvider>
  );
}
