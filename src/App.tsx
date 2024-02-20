import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";

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
