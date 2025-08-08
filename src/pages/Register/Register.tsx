import AuthCard from '../../components/auth/AuthCard'
import AuthForm from '../../components/auth/AuthForm'
import AuthHeader from '../../components/auth/AuthHeader'
import banner from '../../../assets/banner.png'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const handleRegister = (data: User) => {
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    }

    const savedUsers = localStorage.getItem('users')
    const users = savedUsers ? JSON.parse(savedUsers) : {}

    if (users[newUser.email]) {
      alert('Usuário já existe!')
      return
    }

    users[newUser.email] = newUser
    localStorage.setItem('users', JSON.stringify(users))

    alert('Usuário registrado com sucesso!')
    navigate('/login')
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <AuthHeader />
      <img
        src={banner}
        alt="Banner com óculos 3D e pipoca"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />
      <div className="grow">
        <AuthCard
          title="Register"
          footerText="Already have an account?"
          footerLinkText="Login"
          footerLinkHref="/login"
        >
          <AuthForm onSubmit={handleRegister} isSubmitting={false} type="register" />
        </AuthCard>
      </div>
    </div>
  )
}

export default Register
