import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SessionType {
  id: string;
  name: string;
}

interface Store {
  isLogin: boolean;
  session: SessionType | null;
  setIsLogin: (isLogin: boolean) => void;
  setSession: (session: SessionType | null) => void;
}

export const useUserStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        isLogin: false,
        session: null,
        setIsLogin: (isLogin: boolean) => set({ isLogin }),
        setSession: (session: SessionType | null) => set({ session }),
      }),
      {
        name: 'user store',
      },
    ),
  ),
);
