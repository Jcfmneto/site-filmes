interface User {
  username: string
  email: string
  password: string
}
interface UserStore {
  user: User | null
  isLoggedIn: boolean
  favorites: string[]
  setUser: (user: User) => void
  setLoggedIn: (status: boolean) => void
  setFavorites: (movie: string) => void
  reset: () => void
}
