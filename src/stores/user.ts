import { create } from "zustand";

export type UserType = {
  name: string;
  email: string;
  age: number;
  address: string;
};

type State = {
  users: UserType[];
  addUser: (user: UserType) => void;
  removeUser: (user: UserType) => void;
};

const useUserStore = create<State>((set) => ({
  users: [],

  addUser: (user: UserType) => {
    set((state) => ({ users: [...state.users, user] }));
  },
  removeUser: (user: UserType) => {
    set((state) => ({ users: state.users.filter((u) => u !== user) }));
  },
}));

export default useUserStore;
