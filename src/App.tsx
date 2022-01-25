import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

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
            default: "hsl(0, 0%, 96%)",
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
  typography: {
    h3: {
      fontSize: "1.35rem",
      "@media (max-width:900px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
  },
});

export default function DarkThemeWithCustomPalette() {
  const [theme, setTheme] = useState<PaletteMode>("dark");
  const darkModeTheme = createTheme(getDesignTokens(theme));
  return (
    <CountryContextProvider>
      <ThemeProvider theme={darkModeTheme}>
        <Navigation setTheme={setTheme} />
        <MainSection />
      </ThemeProvider>
    </CountryContextProvider>
  );
}
