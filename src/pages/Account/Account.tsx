import AuthCard from '../../components/auth/AuthCard'
import AuthForm from '../../components/auth/AuthForm'
import AuthHeader from '../../components/auth/AuthHeader'
import useUserStore from '../../store/useUserStore'
import ConfirmationButton from './DeleteAccountButton'

const Account = () => {
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)

  const handleChangeCredentials = (data: FormData) => {
    if (!user) return

    const updatedUser = {
      ...user,
      ...data,
      username: data.username ?? user.username,
      email: data.email ?? user.email,
      password: data.password ?? user.password,
    }

    setUser(updatedUser)

    const savedUsers = localStorage.getItem('users')
    const users = savedUsers ? JSON.parse(savedUsers) : {}

    if (user.email !== updatedUser.email) {
      delete users[user.email]
    }

    users[updatedUser.email] = updatedUser

    localStorage.setItem('users', JSON.stringify(users))

    alert('Credenciais atualizadas com sucesso!')
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <AuthHeader />

      <AuthCard title="Change Credentials" footerText="" footerLinkText="" footerLinkHref="">
        <AuthForm
          onSubmit={handleChangeCredentials}
          isSubmitting={false}
          type="changeCredentials"
        />
        <div className="flex flex-wrap gap-4 mt-4">
          <ConfirmationButton type="delete" />
          <ConfirmationButton type="logout" />
        </div>
      </AuthCard>
    </div>
  )
}

export default Account
