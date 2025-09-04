import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ILoginModal {
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleOpen: () => void;
}

const useLoginModalStore = create<ILoginModal>()(
  devtools(
    (set) => ({
      open: false,
      setOpen: (value) =>
        set(
          (state) => ({
            open: typeof value === "function" ? value(state.open) : value,
          }),
          false,
          "loginModal/setOpen"
        ),
      toggleOpen: () =>
        set(
          (state) => ({ open: !state.open }),
          false,
          "loginModal/toggleOpen"
        ),
    }),
    { name: "LoginModalStore" } // shows up in Redux DevTools
  )
);

export default useLoginModalStore;
