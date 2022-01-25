import { useContext } from "react";
import { Box, Grid, Button, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CountryContext } from "../context/CountryContext";

const CountryDetails = () => {
  const {
    state: { choosenCountry, countries },
    dispatch,
  } = useContext(CountryContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ marginBlock: "1rem" }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() =>
            dispatch({ type: "SET_CHOOSEN_COUNTRY", payload: {} as Country })
          }
        >
          Back
        </Button>
      </Box>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={5}>
          <img
            src={choosenCountry?.flags?.svg}
            alt="flag"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">{choosenCountry?.name}</Typography>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} sx={{ marginBlock: "1rem" }}>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Native Name:
                </Typography>{" "}
                {choosenCountry?.nativeName}
              </Box>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Population:
                </Typography>{" "}
                {choosenCountry?.population?.toLocaleString()}
              </Box>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Region:
                </Typography>{" "}
                {choosenCountry?.region}
              </Box>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Subregion:
                </Typography>{" "}
                {choosenCountry?.subregion}
              </Box>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Capital:
                </Typography>{" "}
                {choosenCountry?.capital}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginBlock: "1rem" }}>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Top Level Domain:
                </Typography>{" "}
                {choosenCountry?.topLevelDomain?.join(", ")}
              </Box>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Currencies:
                </Typography>{" "}
                {choosenCountry?.currencies?.map((currency, index) =>
                  index !== choosenCountry?.currencies?.length - 1
                    ? `${currency?.name}, `
                    : `${currency?.name}`
                )}
              </Box>
              <Box sx={{ marginBottom: "0.25rem" }}>
                <Typography sx={{ fontWeight: "600", display: "inline-block" }}>
                  Languages:
                </Typography>{" "}
                {choosenCountry?.languages?.map((language, index) =>
                  index !== choosenCountry?.languages?.length - 1
                    ? `${language?.name}, `
                    : `${language?.name}`
                )}
              </Box>
            </Grid>
          </Grid>
          <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Border countries:
            </Box>
            {choosenCountry?.borders !== undefined ? (
              choosenCountry?.borders?.map((borderCountry) => (
                <Box
                  key={borderCountry}
                  sx={{
                    display: "inline",
                    padding: "0.5rem 1rem",
                    margin: "0.2rem 0.5rem",
                    bgcolor: "element.main",
                  }}
                >
                  {
                    countries?.filter((c) => c?.alpha3Code === borderCountry)[0]
                      ?.name
                  }
                </Box>
              ))
            ) : (
              <Box sx={{ marginInline: "0.5rem" }}>-</Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CountryDetails;
