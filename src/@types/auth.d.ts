interface AuthCardProps {
  title: string
  children: ReactNode
  footerText: string
  footerLinkText: string
  footerLinkHref: string
}

interface AuthFormProps {
  onSubmit: (data: FormData) => void
  isSubmitting: boolean
  type: 'login' | 'register'
}

interface FormData {
  username: string
  email: string
  password: string
}
