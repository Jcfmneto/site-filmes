import AuthCard from '../../components/auth/AuthCard'
import AuthForm from '../../components/auth/AuthForm'
import AuthHeader from '../../components/auth/AuthHeader'
import banner from '../../../assets/banner.png'
import useUserStore from '../../store/useUserStore'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const setUser = useUserStore((state) => state.setUser)
  const setLoggedIn = useUserStore((state) => state.setLoggedIn)

  const handleLogin = (data: User) => {
    const savedUsers = localStorage.getItem('users')
    const users = savedUsers ? JSON.parse(savedUsers) : {}

    const user = users[data.email]

    if (!user) {
      alert('Usuário não encontrado!')
      return
    }

    if (user.password !== data.password) {
      alert('Senha incorreta!')
      return
    }

    setUser(user)
    setLoggedIn(true)
    alert(`Bem-vindo, ${user.username}!`)
    navigate('/')
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <AuthHeader />
      <img
        src={banner}
        alt="Banner com óculos 3D e pipoca"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />
      <AuthCard
        title="Login"
        footerText="Don't have an account?"
        footerLinkText="Register"
        footerLinkHref="/register"
      >
        <AuthForm onSubmit={handleLogin} isSubmitting={false} type="login" />
      </AuthCard>
    </div>
  )
}

export default Login
