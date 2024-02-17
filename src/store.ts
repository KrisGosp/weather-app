import { create } from "zustand";
import { CityQuery } from "./App";

interface CityQueryStore {
  cityQuery: CityQuery;
  updateKey: (key: string) => void;
  updateName: (name: string) => void;
}

const useCityQueryStore = create<CityQueryStore>((set) => ({
  cityQuery: {
    key: "51097",
    name: "Sofia",
  },
  updateKey: (key) => set((state) => ({ ...state, key })),
  updateName: (name) => set((state) => ({ ...state, name })),
}));

export default useCityQueryStore;
