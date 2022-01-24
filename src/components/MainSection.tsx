import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";
import { CountryContext } from "../context/CountryContext";
import { ChangeEvent, useState } from "react";

import MainHeader from "./MainHeader";
import MainContent from "./MainContent";

interface countryData {
  country: string;
  region: string;
}

const MainSection = () => {
  const [headerData, setHeaderData] = useState<countryData>({
    country: "",
    region: "",
  });
  const { state, dispatch } = useContext(CountryContext);
  const { countries } = state;
  const [data, setData] = useState([] as Country[]);

  const fetchData = async () => {
    const result = await (
      await fetch("https://restcountries.com/v2/all")
    ).json();
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

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    dispatch({ type: "SET_COUNTRIES", payload: data });
  }, []);

  useEffect(() => {
    filterData();
  }, [headerData?.country, headerData?.region]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHeaderData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const filterData = () => {
    if (headerData?.country?.toLowerCase().length > 0) {
      const result = countries?.filter((item) =>
        item?.name?.toLowerCase().includes(headerData?.country?.toLowerCase())
      );
      setData(result);
    }
  };

  return (
    <Box
      sx={{
        padding: "2rem 3rem",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <MainHeader handleChange={handleChange} headerData={headerData} />
        <MainContent countries={data} />
      </Box>
    </Box>
  );
};

export default MainSection;
