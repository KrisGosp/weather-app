import { useEffect, useState } from "react";
import { CityQuery } from "../App";
import apiClient from "../services/api-client";

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

const useForecast = ({ key }: CityQuery) => {
  const [data, setData] = useState<Forecast[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      apiClient
        .get(
          `/forecasts/v1/daily/5day/${key}?apikey=` +
            import.meta.env.VITE_API_KEY
        )
        .then((res) => {
          console.log(res.data.DailyForecasts[0]);
          const result = res.data.DailyForecasts;
          setData(result);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [key]);

  return { data, error, isLoading };
};

export default useForecast;
