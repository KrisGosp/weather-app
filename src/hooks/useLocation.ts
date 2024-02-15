import APIClient from "../services/api-client";
import { CityQuery } from "../App";
import { useQuery } from "@tanstack/react-query";

const useLocation = (city: CityQuery) => {
  // const [location, setLocation] = useState<CityQuery>({
  //   key: "51097",
  //   name: "Sofia",
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const apiClient = new APIClient(
    `/locations/v1/cities/autocomplete?apikey="${
      import.meta.env.VITE_API_KEY
    }&q=${city.name}`
  );
  return useQuery({
    queryKey: ["location", city.name],
    queryFn: apiClient.getLocation,
  });
  //     .get(
  //       "/locations/v1/cities/autocomplete?apikey=" +
  //         import.meta.env.VITE_API_KEY +
  //         "&q=" +
  //         city.name
  //     )
  //     .then((res) => {
  //       // const name = res.data[0].LocalizedName;
  //       const key = res.data[0].Key;
  //       setLocation({ name, key });
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, [city.name]);

  // return { location, error, isLoading };
};

export default useLocation;
