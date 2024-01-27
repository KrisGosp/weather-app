import { useEffect, useState } from "react";
import { cityQuery } from "../App";
import apiClient from "../services/api-client";

const useForecast = ({ key }: cityQuery) => {
  const [data, setData] = useState<cityQuery>({} as cityQuery);
  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(`/forecasts/v1/daily/5day/${key}?apikey=` + apiKey)
      .then((res) => {
        const result = res.data.DailyForecasts;
        setData(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [key]);

  return { data };
};

export default useForecast;
