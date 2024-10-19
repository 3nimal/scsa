import React, { useEffect, useState } from 'react'

interface LoginPopupProps {
  onClose: () => void
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate login failure
    setMessage('Login failed. Please check your credentials.')
  }

  // Prevent background scroll when the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mt-48 text-blue-500">
      <div className="bg-gray-200 p-8 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
      </div>
    </div>
  )
}

export default LoginPopup
