import { ChangeEvent, FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";

const continents = [
  {
    value: "",
    label: "All",
  },
  {
    value: "africa",
    label: "Africa",
  },
  {
    value: "americas",
    label: "Americas",
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
  filterData: { country: string; region: string };
}

const MainHeader: FC<HeaderProps> = ({ handleChange, filterData }) => {
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
        paddingBlock: "1rem 2rem",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <TextField
        id="search-countries"
        name="country"
        placeholder="Search for a country..."
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={filterData.country}
        sx={{
          width: "350px",
          maxWidth: "100%",
          bgcolor: "element.main",
          cursor: "pointer",
        }}
      />
      <TextField
        id="region-select"
        select
        label="Filter by region"
        name="region"
        sx={{
          width: "350px",
          bgcolor: "element.main",
        }}
        value={filterData?.region}
        onChange={handleChange}
      >
        {continents?.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              padding: "1rem !important",
              display: "block !important",
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default MainHeader;
