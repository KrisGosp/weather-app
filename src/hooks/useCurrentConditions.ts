// import { useEffect, useState } from "react";
import { CityQuery } from "../App";
import apiClient from "../services/api-client";
import useLocation from "./useLocation";
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

const useCurrentConditions = (city: CityQuery) => {
  const { data } = useLocation(city);

  return useQuery({
    queryKey: ["currentConditions"],
    queryFn: () =>
      apiClient
        .get(
          `/currentconditions/v1/${data.Key}?apikey=${
            import.meta.env.VITE_API_KEY
          }`
        )
        .then((res) => res.data[0]),
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
  //         `/currentconditions/v1/${key}?apikey=${import.meta.env.VITE_API_KEY}`
  //       )
  //       .then((res) => {
  //         const result = res.data[0];
  //         setCurrentConditions(result);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }, [key]);
  //   return { currentConditions, error, isLoading };
};

export default useCurrentConditions;
