import { ThemeProvider } from "styled-components";
import { Screen } from "./style";
import { darkTheme, lightTheme } from "./style/theme";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <NavBar />
      </Screen>
    </ThemeProvider>
  );
}

export default App;
