import { CityQuery } from "../App";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export type Forecast = {
  Date: Date;
  EpochDate: number;
  Temperature: {
    Maximum: {
      Value: number;
    };
    Minimum: {
      Value: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
  };
};

const useForecast = ({ Key }: CityQuery) =>
  useQuery<Forecast[], Error>({
    queryKey: ["forecast", Key],
    queryFn: () =>
      apiClient
        .get(
          `/forecasts/v1/daily/5day/${Key}?apikey=` +
            import.meta.env.VITE_API_KEY
        )
        .then((res) => res.data.DailyForecasts),
  });

export default useForecast;
