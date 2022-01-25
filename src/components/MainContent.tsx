import { useState, useContext, FC } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import Typography from "@mui/material/Typography";
import { CountryContext } from "../context/CountryContext";

interface IMainContentProps {
  countries: Country[];
}

const MainContent: FC<IMainContentProps> = ({ countries }) => {
  const [visible, setVisible] = useState(12);
  const { dispatch } = useContext(CountryContext);

  const handleLoadMore = () => {
    if (visible < countries?.length) setVisible((prev) => prev + 12);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ paddingBlock: "1.5rem", maxWidth: "1440px", margin: "0 auto" }}
      >
        {!!countries?.length ? (
          countries?.slice(0, visible)?.map((country) => (
            <Grid
              key={country?.nativeName}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() =>
                dispatch({ type: "SET_CHOOSEN_COUNTRY", payload: country })
              }
            >
              <Card elevation={0}>
                <CardContent
                  sx={{
                    p: "0",
                    paddingBottom: 0,
                    bgcolor: "element.main",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    image={country?.flags?.svg}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "250px",
                    }}
                  />
                  <Box sx={{ p: "1rem" }}>
                    <Typography variant="h6" sx={{ mb: "0.5rem" }}>
                      {country?.name}
                    </Typography>
                    <Box sx={{ marginBottom: "0.25rem" }}>
                      <Typography
                        sx={{ fontWeight: "600", display: "inline-block" }}
                      >
                        Population:
                      </Typography>{" "}
                      {country?.population?.toLocaleString()}
                    </Box>
                    <Box sx={{ mb: "0.5rem" }}>
                      <Typography
                        sx={{ fontWeight: "600", display: "inline-block" }}
                      >
                        Region:
                      </Typography>{" "}
                      {country?.region}
                    </Box>
                    <Box sx={{ mb: "0.5rem" }}>
                      <Typography
                        sx={{ fontWeight: "600", display: "inline-block" }}
                      >
                        Capital:
                      </Typography>{" "}
                      {country?.capital}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              m: "2rem",
            }}
          >
            No data to display
          </Box>
        )}
      </Grid>
      {countries?.length > visible && (
        <Grid item sx={{ maxWidth: "1440px", margin: "0 auto" }}>
          <Button variant="contained" onClick={handleLoadMore} color="primary">
            Load more
          </Button>
        </Grid>
      )}
    </>
  );
};

export default MainContent;
