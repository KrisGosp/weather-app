import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";

export type CityQuery = {
  key: string;
  name: string;
};

const App = () => {
  return (
    <>
      <SearchBar />
      <Hero />
      <Box marginTop={28}>
        <WeeklyForecast />
      </Box>
    </>
  );
};

export default App;
