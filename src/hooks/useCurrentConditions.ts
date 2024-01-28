import { useEffect, useState } from "react";
import { cityQuery } from "../App";
import apiClient from "../services/api-client";
// import { Forecast } from "./useForecast";

export type CurrentConditions = {
  IsDayTime?: boolean;
  LocalObservationDateTime?: string;
  Temperature: {
    Metric: {
      Value: number;
    };
  };
  WeatherIcon: number;
  WeatherText: string;
};

// type FetchResponse = {
//   data: Forecast[];
// };

const useCurrentConditions = ({ key }: cityQuery) => {
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions>(
    {
      Temperature: {
        Metric: {
          Value: 2,
        },
      },
      WeatherIcon: 1,
      WeatherText: "Cloudy",
    }
  );
  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(`/currentconditions/v1/${key}?apikey=${apiKey}`)
      .then((res) => {
        const result = res.data[0];
        setCurrentConditions(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [key]);
  // console.log("aaa:  " + currentConditions.Temperature.Metric.Value);
  return { currentConditions };
};

export default useCurrentConditions;
