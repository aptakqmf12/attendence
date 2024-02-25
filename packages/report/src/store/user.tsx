import { create } from 'zustand';

interface SessionType {
  id: string;
  name: string;
}

interface Store {
  isLogin: boolean;
  session: SessionType;
  setIsLogin: (isLogin: boolean) => void;
  setSession: (session: SessionType) => void;
}

export const useUserStore = create<Store>((set) => ({
  isLogin: false,
  session: {
    id: '',
    name: '',
  },
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  setSession: (session: SessionType) => set({ session }),
}));
