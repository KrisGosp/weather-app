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
  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(`/currentconditions/v1/${key}?apikey=${apiKey}`)
      .then((res) => {
        const result = res.data[0];
        setCurrentConditions(result);
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [key]);
  return { currentConditions };
};

export default useCurrentConditions;
