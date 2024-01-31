import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CityQuery } from "../App";

const useLocation = (city: CityQuery) => {
  const [location, setLocation] = useState<CityQuery>({
    key: "51097",
    name: "Sofia",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(
        "/locations/v1/cities/autocomplete?apikey=" +
          import.meta.env.VITE_API_KEY +
          "&q=" +
          city.name
      )
      .then((res) => {
        const name = res.data[0].LocalizedName;
        const key = res.data[0].Key;
        setLocation({ name, key });
        // console.log("LocalizedName: " + name, key);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [city.name]);

  return { location, error, isLoading };
};

export default useLocation;
