import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./shared/theme/Theme";

import Header from "./layouts/header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h3>By Savage Developers</h3>
    </ThemeProvider>
  );
}

export default App;
