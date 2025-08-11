import { useNavigate } from 'react-router-dom'

const AuthCard = ({
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthCardProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 px-4">
      <div className="w-full max-w-xl bg-gray-950/70 backdrop-blur-md text-white rounded-lg shadow-xl p-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>
        {children}
        <p className="text-center text-sm text-gray-400 mt-6">
          {footerText}{' '}
          {footerLinkHref && footerLinkHref && (
            <span
              onClick={() => navigate(footerLinkHref)}
              className="underline cursor-pointer hover:text-white"
            >
              {footerLinkText}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
export default AuthCard
