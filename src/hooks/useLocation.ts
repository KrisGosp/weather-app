import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";

export type CityQuery = {
  Key: string;
  LocalizedName: string;
};

const useLocation = (name: string) =>
  useQuery<CityQuery, Error>({
    queryKey: ["location", name],
    queryFn: () =>
      apiClient
        .get(
          "/locations/v1/cities/autocomplete?apikey=" +
            import.meta.env.VITE_API_KEY +
            "&q=" +
            name
        )
        .then((res) => res.data[0]),
    staleTime: ms("24h"),
    placeholderData: {
      Key: "51097",
      LocalizedName: "Sofia",
    },
  });

export default useLocation;
