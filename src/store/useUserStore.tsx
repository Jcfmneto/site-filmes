import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      setUser: (user) => set({ user }),
      setLoggedIn: (status) => set({ isLoggedIn: status }),
      reset: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'user-storage',
    }
  )
)

export default useUserStore
