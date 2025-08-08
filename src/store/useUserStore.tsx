import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      favorites: [],
      setUser: (user) => set({ user }),
      setFavorites: (movieId) =>
        set((state) => ({
          favorites: state.favorites.includes(movieId)
            ? state.favorites.filter((id) => id !== movieId)
            : [...state.favorites, movieId],
        })),
      setLoggedIn: (status) => set({ isLoggedIn: status }),
      reset: () => set({ user: null, isLoggedIn: false, favorites: [] }),
    }),
    {
      name: 'user-storage',
    }
  )
)

export default useUserStore
