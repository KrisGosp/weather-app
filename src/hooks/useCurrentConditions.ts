import { CityQuery } from "./useLocation";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export type CurrentConditions = {
  IsDayTime?: boolean;
  LocalObservationDateTime: string;
  Temperature: {
    Metric: {
      Value: number;
    };
  };
  WeatherIcon: number;
  WeatherText: string;
};

const useCurrentConditions = ({ Key }: CityQuery) =>
  useQuery<CurrentConditions, Error>({
    queryKey: ["currentConditions", Key],
    queryFn: () =>
      apiClient
        .get(
          `/currentconditions/v1/${Key}?apikey=${import.meta.env.VITE_API_KEY}`
        )
        .then((res) => res.data[0]),
    staleTime: ms("24h"),
  });

export default useCurrentConditions;
