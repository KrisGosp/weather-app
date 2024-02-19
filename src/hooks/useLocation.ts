// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { CityQuery } from "../App";
import apiClient from "../services/api-client";

const useLocation = (city: CityQuery) =>
  useQuery<CityQuery, Error>({
    queryKey: ["location", city.name],
    queryFn: () =>
      apiClient
        .get(
          "/locations/v1/cities/autocomplete?apikey=" +
            import.meta.env.VITE_API_KEY +
            "&q=" +
            city.name
        )
        .then((res) => res.data[0]),
    staleTime: 1000 * 60 * 60 * 24,
    initialData: {
      key: "51097",
      name: "Sofia",
    },
  });

// const [location, setLocation] = useState<CityQuery>({
//   key: "51097",
//   name: "Sofia",
// });
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState("");

// useEffect(() => {
//   setIsLoading(true);
//
//     .catch((err) => {
//       setError(err.message);
//     })
//     .finally(() => setIsLoading(false));
// }, [city.name]);

// return { location, error, isLoading };
export default useLocation;
