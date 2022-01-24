import { ChangeEvent, FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";

const continets = [
  {
    value: "africa",
    label: "Africa",
  },
  {
    value: "america",
    label: "America",
  },
  {
    value: "asia",
    label: "Asia",
  },
  {
    value: "europe",
    label: "Europe",
  },
];

interface HeaderProps {
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  headerData: { country: string; region: string };
}

const MainHeader: FC<HeaderProps> = ({ handleChange, headerData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        width: "100%",
      }}
    >
      <TextField
        id="search-countries"
        name="country"
        placeholder="Search for a country..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={headerData.country}
        sx={{ width: "350px", maxWidth: "100%", bgcolor: "element.main" }}
      />
      <TextField
        id="outlined-select-currency"
        name="region"
        select
        label="Filter by region"
        sx={{
          width: "300px",
          bgcolor: "element.main",
        }}
        onChange={handleChange}
        value={headerData.region}
      >
        {continets.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ bgcolor: "element.main" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default MainHeader;
