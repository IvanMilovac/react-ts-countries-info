import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import Navigation from "./components/Navigation";
import MainSection from "./components/MainSection";
import { CountryContextProvider } from "./context/CountryContext";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          //light bg
          background: {
            default: "hsl(0, 0%, 98%)",
          },
          //light mode element
          element: {
            main: "hsl(0, 0%, 100%)",
          },
          //light input
          inputColor: { main: "hsl(0, 0%, 52%)" },
          //light text
          text: { primary: "hsl(200, 15%, 8%)" },
        }
      : {
          //dark bg
          background: {
            default: "hsl(207, 26%, 17%)",
          },
          //dark mode element
          element: {
            main: "hsl(209, 23%, 22%)",
          },
          //dark text
          text: { primary: "hsl(0, 0%, 100%)" },
        }),
  },
});

const queryClient = new QueryClient();

export default function DarkThemeWithCustomPalette() {
  const [theme, setTheme] = useState<PaletteMode>("dark");
  const darkModeTheme = createTheme(getDesignTokens(theme));
  return (
    <CountryContextProvider>
      <ThemeProvider theme={darkModeTheme}>
        <QueryClientProvider client={queryClient}>
          <Navigation setTheme={setTheme} />
          <MainSection />
        </QueryClientProvider>
      </ThemeProvider>
    </CountryContextProvider>
  );
}
