import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as loginApi } from '@shared/api/client'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const res = await loginApi({ username, password })
    if ('error' in res) {
      setError(res.error)
    } else {
      login(res.token)
      navigate('/list')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-3xl font-bold text-neutral-500">Login</h1>
      <input
        className="w-full border px-3 py-2 rounded-sm"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="w-full border px-3 py-2 rounded-sm"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="!bg-blue-500 hover:!bg-blue-600 text-white px-4 py-2 rounded-sm">
        Login
      </button>
    </form>
  )
}
