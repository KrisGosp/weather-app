import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const api =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy&q=";

  useEffect(() => {
    axios
      .get(api + searchTerm)
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
