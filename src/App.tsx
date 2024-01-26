import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

type cityQuery = {
  key: string;
  name: string;
};

const App = () => {
  const [cityQuery, setCityQuery] = useState<cityQuery>({} as cityQuery);

  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(
        "/locations/v1/cities/autocomplete?apikey=" +
          apiKey +
          "&q=" +
          cityQuery.name
      )
      .then((res) => {
        const name = res.data[0].LocalizedName;
        setCityQuery({ ...cityQuery, name });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [cityQuery]);

  return (
    <>
      <SearchBar onSearch={(name) => setCityQuery({ ...cityQuery, name })} />
      <Hero city={cityQuery.name} />
      <Box marginTop={28}>
        <WeeklyForecast />
      </Box>
    </>
  );
};

export default App;
