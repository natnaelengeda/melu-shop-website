import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartType {
  id: number | null;
  name: string;
  description: string;
  price: number;
  imageUrl: any;
  quantity: number;
}

interface CartStore {
  cart: CartType[] | [],
  addProduct: (item: Omit<CartType, "quantity">) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  addQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
  getItemQuantity: (id: number) => number;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getById: (id: number) => boolean;
  clear: () => void;
}

const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addProduct: (item) => {
          const existing = get().cart.find((i) => i.id === item.id);
          if (existing) {
            set({
              cart: get().cart.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 } : i
              )
            });
          } else {
            set({
              cart: [
                ...get().cart,
                { ...item, quantity: 1 },
              ]
            })
          }
        },
        removeProduct: (id) => {
          set({
            cart: get().cart.filter((item) => item.id !== id)
          })
        },

        updateQuantity: (id, quantity) =>
          set({
            cart: get().cart.map((item) =>
              item.id === id ? { ...item, quantity } : item)
          }),

        addQuantity: (id) => {
          const item = get().cart.find((i) => i.id === id);
          if (!item) return; // optionally handle the error

          const quantity = (item.quantity ?? 1) + 1;

          set({
            cart: get().cart.map((i) =>
              i.id === id ? { ...i, quantity } : i
            ),
          });
        },
        removeQuantity: (id) => {
          const item = get().cart.find((i) => i.id === id);
          if (!item) return; // optionally handle the error

          const quantity = (item.quantity ?? 1) - 1;

          if (item.quantity == 1) return;
          set({
            cart: get().cart.map((i) =>
              i.id === id ? { ...i, quantity } : i
            ),
          });
        },
        clear: () => set({ cart: [] }),
        getTotalItems: () =>
          get().cart.reduce((sum, item) => sum + item.quantity, 0),

        getTotalPrice: () =>
          get().cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        getItemQuantity: (id: number) => {
          const item = get().cart.find((i) => i.id === id);
          const quantity = item?.quantity ?? 1;

          return quantity;
        },
        getById: (id: number) => {
          const existing = get().cart.find((i) => i.id === id)
          if (existing) {
            return true;
          } else {
            return false;
          }
        }
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
      }

    )
  )
)

export default useCartStore;