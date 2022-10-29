import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";
import Card from "./components/Card";
import Photo from "./components/Photo";
import InfoContainer from "./components/InfoContainer";
import Info from "./components/Info";
import Article from "./components/Article";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card>
        <Photo />
        <InfoContainer>
          <Info />
          <Article type="about" />
          <Article type="interests" />
        </InfoContainer>
        <Footer />
      </Card>
    </ThemeProvider>
  );
}
