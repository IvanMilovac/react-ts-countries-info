import { Dispatch, FC, SetStateAction } from "react";
import { PaletteMode } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface INavigationProps {
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

const Navigation: FC<INavigationProps> = ({ setTheme }) => {
  const theme = useTheme();
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          p: "1rem 3rem",
          bgcolor: "element.main",
          color: "text.primary",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        elevation={0}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "600",
            letterSpacing: "1px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Where in the world?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "0.25rem",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          <Typography variant="h3">
            {theme.palette.mode === "light" ? "Dark" : "Light"} mode{" "}
          </Typography>
          {theme.palette.mode === "light" ? (
            <Brightness4Icon fontSize="small" />
          ) : (
            <Brightness7Icon fontSize="small" />
          )}
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navigation;
