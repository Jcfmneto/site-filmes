import { create } from 'zustand'

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoggedIn: false,
  favorites: [],
  setUser: (user) => set({ user }),
  setFavorites: (movie) =>
    set((state) => ({
      favorites: [...state.favorites, movie],
    })),
  setLoggedIn: (status) => set({ isLoggedIn: status }),
  reset: () => set({ user: null, isLoggedIn: false, favorites: [] }),
}))

export default useUserStore
