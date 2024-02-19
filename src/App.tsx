import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export type CityQuery = {
  Key: string;
  LocalizedName: string;
};

const App = () => {
  const [cityQuery, setCityQuery] = useState<CityQuery>({
    Key: "51097",
    LocalizedName: localStorage.getItem("city") || "Sofia",
  });

  return (
    <>
      <SearchBar
        onSearch={(LocalizedName) =>
          setCityQuery({ ...cityQuery, LocalizedName })
        }
      />
      <Hero cityQuery={cityQuery} />
      <Box marginTop={28}>
        <WeeklyForecast cityQuery={cityQuery} />
      </Box>
    </>
  );
};

export default App;
