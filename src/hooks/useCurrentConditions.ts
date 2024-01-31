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
  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(`/currentconditions/v1/${key}?apikey=${apiKey}`)
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
