import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useLocation from "./hooks/useLocation";

export type cityQuery = {
  key: string;
  name: string;
};

const App = () => {
  const [cityQuery, setCityQuery] = useState<cityQuery>({
    key: "51097",
    name: "Sofia",
  });

  useLocation(cityQuery);

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
