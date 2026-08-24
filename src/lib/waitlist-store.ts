import { create } from "zustand";

export type WaitlistIntent = "sender" | "business" | "institution";

type WaitlistState = {
  open: boolean;
  intent: WaitlistIntent;
  setOpen: (open: boolean) => void;
  openWith: (intent: WaitlistIntent) => void;
};

export const useWaitlist = create<WaitlistState>((set) => ({
  open: false,
  intent: "sender",
  setOpen: (open) => set({ open }),
  openWith: (intent) => set({ open: true, intent }),
}));
