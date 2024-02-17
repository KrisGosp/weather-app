import apiClient from "../services/api-client";
import { CityQuery } from "../App";
import { useQuery } from "@tanstack/react-query";

const useLocation = (city: CityQuery) =>
  useQuery<CityQuery, Error>({
    queryKey: ["location"],
    queryFn: () =>
      apiClient
        .get(
          "/locations/v1/cities/autocomplete?apikey=" +
            import.meta.env.VITE_API_KEY +
            "&q=" +
            city.name
        )
        .then((res) => res.data[0]),
    initialData: {
      key: 51097,
      name: "Sofia",
    },
  });

export default useLocation;
