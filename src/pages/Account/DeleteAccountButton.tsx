import { useState, useEffect } from 'react'
import useUserStore from '../../store/useUserStore'

const DeleteAccountButton = () => {
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

  const handleDelete = () => {
    if (!user) return

    reset()
    const savedUsers = localStorage.getItem('users')
    const users = savedUsers ? JSON.parse(savedUsers) : {}

    delete users[user.email]
    localStorage.setItem('users', JSON.stringify(users))

    alert('Account deleted successfully!')
    setModalOpen(false)
  }

  if (!user) return null

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition mt-4"
      >
        Delete Account
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
            <p className="mb-6 text-gray-700">Are you sure you want to delete your account?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleDelete}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition"
              >
                Yes, delete
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition"
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

export default DeleteAccountButton
