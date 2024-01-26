import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("Sofia");

  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(
        "/locations/v1/cities/autocomplete?apikey=" +
          apiKey +
          "&q=" +
          searchTerm
      )
      .then((res) => console.log(res.data[0].LocalizedName));
  }, [searchTerm]);

  return (
    <>
      <SearchBar onSearch={setSearchTerm} />
      <Hero />
      <Box marginTop={28}>
        <WeeklyForecast />
      </Box>
    </>
  );
};

export default App;
