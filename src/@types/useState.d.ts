interface User {
  username: string
  email: string
  password: string
}
interface UserStore {
  user: User | null
  isLoggedIn: boolean
  favorites: number[]
  setUser: (user: User) => void
  setLoggedIn: (status: boolean) => void
  setFavorites: (movie: number) => void
  reset: () => void
}
