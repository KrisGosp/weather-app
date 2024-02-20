import { CityQuery } from "../App";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

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
    staleTime: 1000 * 60 * 60 * 24,
  });
//   const [currentConditions, setCurrentConditions] = useState<CurrentConditions>(
//     {} as CurrentConditions
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setIsLoading(true);
//     apiClient
//       .get(
//         `/currentconditions/v1/${Key}?apikey=${import.meta.env.VITE_API_KEY}`
//       )
//       .then((res) => {
//         const result = res.data[0];
//         setCurrentConditions(result);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => setIsLoading(false));
//   }, []);
//   return { currentConditions, error, isLoading };
// };

export default useCurrentConditions;
