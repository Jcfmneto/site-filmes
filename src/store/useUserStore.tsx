import { create } from 'zustand'

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoggedIn: false,
  favorites: [],
  setUser: (user) => set({ user }),
  setFavorites: (movieId: number) =>
    set((state) => ({
      favorites: state.favorites.includes(movieId)
        ? state.favorites.filter((id) => id !== movieId)
        : [...state.favorites, movieId],
    })),
  setLoggedIn: (status) => set({ isLoggedIn: status }),
  reset: () => set({ user: null, isLoggedIn: false, favorites: [] }),
}))

export default useUserStore
