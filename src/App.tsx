import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useLocation from "./hooks/useLocation";
import useForecast from "./hooks/useForecast";

export type cityQuery = {
  key: string;
  name: string;
};

const App = () => {
  const [cityQuery, setCityQuery] = useState<cityQuery>({
    key: "51097",
    name: "Sofia",
  });

  const { location } = useLocation(cityQuery);
  const { data } = useForecast(location);
  return (
    <>
      <SearchBar onSearch={(name) => setCityQuery({ ...cityQuery, name })} />
      <Hero city={location.name} />
      <Box marginTop={28}>
        <WeeklyForecast forecasts={data} />
      </Box>
    </>
  );
};

export default App;
