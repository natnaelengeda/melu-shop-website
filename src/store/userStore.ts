import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: number | null;
  name: string;
  role: string;
  photo_url: string;
  isLoggedIn: boolean;
}

interface UserStore {
  user: User;
  login: (user: User) => void;
  logout: () => void;
}

const initialUser: User = {
  id: null,
  name: "",
  role: "",
  photo_url: "",
  isLoggedIn: false,
};

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: initialUser,
        login: (user) => set({ user }),
        logout: () => set({ user: initialUser }),
      }),
      {
        name: "user", // key in storage
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export const getAdmin = () => useUserStore.getState().user;
export default useUserStore;