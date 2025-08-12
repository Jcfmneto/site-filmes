import { useState, useEffect } from 'react'
import useUserStore from '../../store/useUserStore'

interface Props {
  type: 'delete' | 'logout'
}

const ConfirmationButton = ({ type }: Props) => {
  const user = useUserStore((state) => state.user)
  const reset = useUserStore((state) => state.reset)
  const [modalOpen, setModalOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (modalOpen) {
      setShowModal(true)
    } else {
      const timeout = setTimeout(() => setShowModal(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [modalOpen])

  const handleConfirm = () => {
    if (!user) return

    if (type === 'delete') {
      const savedUsers = localStorage.getItem('users')
      const users = savedUsers ? JSON.parse(savedUsers) : {}

      delete users[user.email]
      localStorage.setItem('users', JSON.stringify(users))

      alert('Account deleted successfully!')
    } else if (type === 'logout') {
      alert('Logged out successfully!')
    }

    reset()
    setModalOpen(false)
  }

  if (!user) return null

  const messages = {
    delete: {
      buttonText: 'Delete Account',
      modalMessage: 'Are you sure you want to delete your account?',
      confirmText: 'Yes, delete',
    },
    logout: {
      buttonText: 'Logout',
      modalMessage: 'Are you sure you want to log out?',
      confirmText: 'Yes, logout',
    },
  }

  const { buttonText, modalMessage, confirmText } = messages[type]

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={`${
          type === 'delete' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
        } text-white font-bold py-2 px-4 rounded transition mt-4`}
      >
        {buttonText}
      </button>

      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50
            bg-gray-950 bg-opacity-40 backdrop-blur-sm
            transition-opacity duration-300
            ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={`bg-gray-100 rounded p-6 max-w-sm w-full shadow-lg
              transform transition-transform duration-300
              ${modalOpen ? 'scale-100' : 'scale-95'}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Confirmation</h2>
            <p className="mb-6 text-gray-700">{modalMessage}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleConfirm}
                className={`${
                  type === 'delete'
                    ? 'bg-red-700 hover:cursor-pointer hover:bg-red-800'
                    : 'bg-blue-700 hover:cursor-pointer hover:bg-blue-800'
                } text-white  font-bold py-2 px-4 rounded transition`}
              >
                {confirmText}
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 hover:cursor-pointer text-gray-800 font-bold py-2 px-4 rounded transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ConfirmationButton
