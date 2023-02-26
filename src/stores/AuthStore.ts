import create from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  email: string;
  password: string;
  token: string;
  setUserData: (email: string, password: string, token: string) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      email: '',
      password: '',
      token: '',
      setUserData: (email: string, password: string, token: string) =>
        set({ email, password, token }),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
