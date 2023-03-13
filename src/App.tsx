import { ThemeProvider } from "styled-components";
import { Todo } from "./pages/Todo";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Todo />
      <GlobalStyle />
    </ThemeProvider>
  );
};
