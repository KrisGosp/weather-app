import { create } from "zustand";

type State = {
  key: string;
  name: string;
};

type Action = {
  updateKey: (key: string) => void;
  updateName: (name: string) => void;
};

const useCityQueryStore = create<State & Action>((set) => ({
  key: "51097",
  name: "Sofia",
  updateKey: (key: string) => set({ key }),
  updateName: (name: string) => set({ name }),
}));

export default useCityQueryStore;
