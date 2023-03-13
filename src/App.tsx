import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>=D Olá Karol</div>
    </ThemeProvider>
  );
};
