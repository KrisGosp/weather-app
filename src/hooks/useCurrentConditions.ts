import { useEffect, useState } from "react";
import { CityQuery } from "../App";
import apiClient from "../services/api-client";

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

const useCurrentConditions = ({ key }: CityQuery) => {
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions>(
    {} as CurrentConditions
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(
        `/currentconditions/v1/${key}?apikey=${import.meta.env.VITE_API_KEY}`
      )
      .then((res) => {
        const result = res.data[0];
        setCurrentConditions(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [key]);
  return { currentConditions, error, isLoading };
};

export default useCurrentConditions;
