import create from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  email: string;
  password: string;
  name: string;
  token: string;
  idUser: string;
  setUserData: (email: string, password: string, token: string, idUser: string, name: string) => void;
  removeUserData: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      email: '',
      password: '',
      token: '',
      idUser: '',
      name: '',
      setUserData: (email: string, password: string, token: string, idUser: string, name: string) =>
        set({ email, password, token, idUser, name }),
      removeUserData: () =>
        set({ email: '', password: '', token: '', idUser: '', name: '' }),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
