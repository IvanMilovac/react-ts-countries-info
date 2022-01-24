import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { Oval } from "react-loader-spinner";
import { CountryContext } from "../context/CountryContext";

import MainHeader from "./MainHeader";
import MainContent from "./MainContent";

const fetchData = async () => {
  const result = await (await fetch("https://restcountries.com/v2/all")).json();
  return result?.map((item: Country) => {
    const {
      name,
      nativeName,
      region,
      subregion,
      population,
      capital,
      flags,
      borders,
      alpha3code,
      languages,
      currencies,
      topLevelDomain,
    } = item;
    return {
      nativeName,
      region,
      subregion,
      population,
      capital,
      flags,
      borders,
      alpha3code,
      languages,
      currencies,
      topLevelDomain,
      name,
    };
  });
};

const MainSection = () => {
  const { dispatch } = useContext(CountryContext);

  const { isLoading, error, data } = useQuery("countries", fetchData);

  useEffect(() => {
    console.log(data);
    if (!isLoading) dispatch({ type: "SET_COUNTRIES", payload: data });
  }, [data]);

  return (
    <Box
      sx={{
        padding: "2rem 3rem",
        height: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <Oval height="200" width="200" />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <MainHeader />
          <MainContent countries={data} />
        </Box>
      )}
    </Box>
  );
};

export default MainSection;
