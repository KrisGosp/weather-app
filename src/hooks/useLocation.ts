import apiClient from "../services/api-client";
import { CityQuery } from "../App";
import { useQuery } from "@tanstack/react-query";

type FetchResponse = {
  Key: string;
  LocalizedName: string;
};

const useLocation = (city: CityQuery) => {
  return useQuery<FetchResponse, Error>({
    queryKey: ["location"],
    queryFn: () =>
      apiClient
        .get<FetchResponse[]>(
          "/locations/v1/cities/autocomplete?apikey=" +
            import.meta.env.VITE_API_KEY +
            "&q=" +
            city.name
        )
        .then((res) => res.data[0]),
    initialData: {
      Key: "51097",
      LocalizedName: "Sofia",
    },
  });
};

export default useLocation;
