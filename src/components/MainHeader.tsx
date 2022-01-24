import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { ChangeEvent, useState } from "react";

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

interface countryData {
  country: string;
  region: string;
}

const MainHeader = () => {
  const [data, setData] = useState<countryData>({ country: "", region: "" });
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
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
        value={data.country}
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
        value={data.region}
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
