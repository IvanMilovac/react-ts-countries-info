import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";
import { CountryContext } from "../context/CountryContext";
import { ChangeEvent, useState } from "react";

import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import CountryDetails from "./CountryDetails";
import { TailSpin } from "react-loader-spinner";

interface countryData {
  country: string;
  region: string;
}

const MainSection = () => {
  const { state, dispatch } = useContext(CountryContext);
  const [isLoading, setIsLoading] = useState(false);
  const [allData, setAllData] = useState([] as Country[]);
  const [filteredData, setFilteredData] = useState([] as Country[]);
  const [filter, setFilter] = useState<countryData>({
    country: "",
    region: "",
  });

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
        alpha3Code,
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
        alpha3Code,
        languages,
        currencies,
        topLevelDomain,
        name,
      };
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((data) => {
        setAllData(data);
        setFilteredData(data);
        dispatch({ type: "SET_COUNTRIES", payload: data });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!filter?.country && !filter?.region) return setFilteredData(allData);
    let result = allData;
    if (!!filter?.country)
      result = result?.filter((item) =>
        item?.name?.toLowerCase()?.includes(filter?.country?.toLowerCase())
      );
    if (!!filter?.region)
      result = result?.filter(
        (item) => item?.region.toLowerCase() === filter?.region.toLowerCase()
      );
    setFilteredData(result);
  }, [filter?.country, filter?.region]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading)
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "1rem",
        }}
      >
        <TailSpin width="100" height="100" />;
      </Box>
    );

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {!!Object.keys(state?.choosenCountry).length ? (
          <CountryDetails />
        ) : (
          <>
            <MainHeader handleChange={handleChange} filterData={filter} />
            <MainContent countries={filteredData} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default MainSection;
