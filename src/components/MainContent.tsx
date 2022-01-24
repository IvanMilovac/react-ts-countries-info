import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IMainContentProps {
  countries: Country[];
}

const MainContent = ({ countries }: IMainContentProps) => {
  return (
    <Grid container spacing={3} sx={{ p: "2rem" }}>
      {countries?.map((country) => (
        <Grid key={country?.nativeName} item xs={12} sm={6} md={4} lg={3}>
          <Card elevation={0}>
            <CardContent
              sx={{ p: "0", paddingBottom: 0, bgcolor: "element.main" }}
            >
              <CardMedia image={country?.flags?.svg} sx={{ height: "150px" }} />
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
      ))}
    </Grid>
  );
};

export default MainContent;
