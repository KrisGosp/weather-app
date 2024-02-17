// import { CityQuery } from "../App";
import apiClient from "../services/api-client";
import useLocation from "./useLocation";
import { CityQuery } from "../App";
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
// type FetchResponse = {
//   data: Forecast[];
// };

const useForecast = (city: CityQuery) => {
  const { data } = useLocation(city);
  console.log("dataa" + data.Key);
  return useQuery<Forecast[], Error>({
    queryKey: ["forecast"],
    queryFn: () =>
      apiClient
        .get(
          `/forecasts/v1/daily/5day/${parseInt(data.Key)}?apikey=` +
            import.meta.env.VITE_API_KEY
        )
        .then((res) => res.data.DailyForecasts),
  });
};
export default useForecast;
