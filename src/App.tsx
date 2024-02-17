import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export type CityQuery = {
  key: number;
  name: string;
};

const App = () => {
  const [cityQuery, setCityQuery] = useState<CityQuery>({
    key: 51097,
    name: localStorage.getItem("city") || "Sofia",
  });

  return (
    <>
      <SearchBar onSearch={(name) => setCityQuery({ ...cityQuery, name })} />
      <Hero cityQuery={cityQuery} />
      <Box marginTop={28}>
        <WeeklyForecast cityQuery={cityQuery} />
      </Box>
    </>
  );
};

export default App;
