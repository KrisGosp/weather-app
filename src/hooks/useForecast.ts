import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import useCityQueryStore from "../store";
import useLocation from "./useLocation";

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

const useForecast = () => {
  const { name } = useCityQueryStore();
  const { data } = useLocation(name);
  return useQuery<Forecast[], Error>({
    queryKey: ["forecast", data?.Key],
    queryFn: () =>
      apiClient
        .get(
          `/forecasts/v1/daily/5day/${data?.Key}?apikey=` +
            import.meta.env.VITE_API_KEY
        )
        .then((res) => res.data.DailyForecasts),
  });
};

export default useForecast;
