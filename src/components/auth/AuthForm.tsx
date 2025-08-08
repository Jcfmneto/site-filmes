import { useForm } from 'react-hook-form'

const AuthForm = ({ onSubmit, isSubmitting, type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {type === 'register' && (
        <div>
          <label htmlFor="username" className="block text-sm mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter your username"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 2, message: 'Minimum 2 characters' },
              maxLength: { value: 120, message: 'Maximum 120 characters' },
            })}
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
          )}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4  py-2 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="Enter your email"
          {...register('email', {
            required: 'Email is required',
            minLength: { value: 6, message: 'Minimum 6 characters' },
            maxLength: { value: 120, message: 'Maximum 120 characters' },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="Enter your password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum 6 characters' },
            maxLength: { value: 20, message: 'Maximum 20 characters' },
          })}
        />
        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-700 hover:bg-gray-600 hover:cursor-pointer text-white py-2 rounded-md font-semibold transition disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  )
}

export default AuthForm
