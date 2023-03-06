import create from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  email: string;
  password: string;
  token: string;
  idUser: string;
  setUserData: (email: string, password: string, token: string, idUser: string) => void;
  removeUserData: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      email: '',
      password: '',
      token: '',
      idUser: '',
      setUserData: (email: string, password: string, token: string, idUser: string) =>
        set({ email, password, token, idUser }),
      removeUserData: () =>
        set({ email: '', password: '', token: '', idUser: '' }),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
