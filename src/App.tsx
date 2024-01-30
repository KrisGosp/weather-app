import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export type cityQuery = {
  key: string;
  name: string;
};

const App = () => {
  const [cityQuery, setCityQuery] = useState<cityQuery>({
    key: "51097",
    name: "Sofia",
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
