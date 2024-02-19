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
// type FetchResponse = {
//   data: Forecast[];
// };

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
// const [data, setData] = useState<Forecast[]>([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState("");

// useEffect(() => {
//   setIsLoading(true);
//   apiClient
//     .get(
//       `/forecasts/v1/daily/5day/${key}?apikey=` + import.meta.env.VITE_API_KEY
//     )
//     .then((res) => {
//       console.log(res.data.DailyForecasts[0]);
//       const result = res.data.DailyForecasts;
//       setData(result);
//     })
//     .catch((err) => {
//       setError(err.message);
//     })
//     .finally(() => setIsLoading(false));
// }, [key]);

// return { data, error, isLoading };

export default useForecast;
