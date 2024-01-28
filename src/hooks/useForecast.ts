import { useEffect, useState } from "react";
import { cityQuery } from "../App";
import apiClient from "../services/api-client";

export type Forecast = {
  EpochDate: number;
  Temperature: {
    Maximum: {
      Value: number;
    };
    Minimum: {
      Value: number;
    };
  };
};
// {
//   Day: {
//     Icon: number;
//   };
// }

// type FetchResponse = {
//   data: Forecast[];
// };

const useForecast = ({ key }: cityQuery) => {
  const [data, setData] = useState<Forecast[]>([]);
  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(`/forecasts/v1/daily/5day/${key}?apikey=` + apiKey)
      .then((res) => {
        console.log("Daily: " + res.data);
        const result = res.data.DailyForecasts;
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [key]);

  return { data };
};

export default useForecast;
