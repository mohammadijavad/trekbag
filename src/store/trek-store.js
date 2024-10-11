import { create } from "zustand";
import { initialItems } from "../lib/constants";

const useStore = create((set) => ({
  items: initialItems,
  handleAddNewItem: (newItem) => set({ items: [newItem] }),
  handleRemoveAllItems: () => set({ items: [] }),
  handleResetToInitial: () => set({ items: initialItems }),
  handleMarkAllAsComplete: () =>
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: newItems };
    }),
  handleMarkASIncomplete: () =>
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { items: newItems };
    }),
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },
  handleDeleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },
  handleToggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
}));
