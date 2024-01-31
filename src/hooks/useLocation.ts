import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CityQuery } from "../App";

const useLocation = (city: CityQuery) => {
  const [location, setLocation] = useState<CityQuery>({
    key: "51097",
    name: "Sofia",
  });
  const apiKey = "TpUdCDrA7t6MZK4QCv65u4h1ecFPLHJy";

  useEffect(() => {
    apiClient
      .get(
        "/locations/v1/cities/autocomplete?apikey=" + apiKey + "&q=" + city.name
      )
      .then((res) => {
        const name = res.data[0].LocalizedName;
        const key = res.data[0].Key;
        setLocation({ name, key });
        // console.log("LocalizedName: " + name, key);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city.name]);

  return { location };
};

export default useLocation;
