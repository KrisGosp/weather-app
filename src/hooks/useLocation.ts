import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { cityQuery } from "../App";

const useLocation = (city: cityQuery) => {
  const [data, setData] = useState<cityQuery>({} as cityQuery);
  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(
        "/locations/v1/cities/autocomplete?apikey=" + apiKey + "&q=" + city.name
      )
      .then((res) => {
        const name = res.data[0].LocalizedName;
        const key = res.data[0].Key;
        setData({ name, key });
        console.log(name, key);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city.name]);

  return { data };
};

export default useLocation;
