import { useQuery } from "@tanstack/react-query";
import { CityQuery } from "../App";
import apiClient from "../services/api-client";

const useLocation = (city: CityQuery) =>
  useQuery<CityQuery, Error>({
    queryKey: ["location", city.LocalizedName],
    queryFn: () =>
      apiClient
        .get(
          "/locations/v1/cities/autocomplete?apikey=" +
            import.meta.env.VITE_API_KEY +
            "&q=" +
            city.LocalizedName
        )
        .then((res) => res.data[0]),
    staleTime: 1000 * 60 * 60 * 24,
    placeholderData: {
      Key: "51097",
      LocalizedName: "Sofia",
    },
  });

export default useLocation;
