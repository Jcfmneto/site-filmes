interface User {
  username: string
  email: string
  password: string
}
interface UserStore {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User) => void
  setLoggedIn: (status: boolean) => void
  reset: () => void
}
