import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getLocation = () =>
    axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
}

export default APIClient;
