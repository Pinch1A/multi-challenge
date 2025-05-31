import { useEffect, useState } from 'react'
import { fetchList } from '@shared/api/client'
import type { ListItem, UserListItem, BotListItem } from '@types'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import SkeletonItem from '../components/ItemSkeleton'
import ItemCard from '../components/ItemCard'

export default function ListPage() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const [items, setItems] = useState<ListItem[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      setError('Not authenticated')
      setLoading(false)
      return
    }

    setLoading(true)
    fetchList('react')
      .then((res) => {
        if ('error' in res) {
          setError(res.error)
          setItems(null)
        } else {
          setItems(res)
          setError(null)
        }
      })
      .catch((err) => {
        setError('Unexpected error')
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [token])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full rounded-md border border-gray-200 ">
      {/* Header */}
      <div className="w-full flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <h1 className="text-2xl font-bold">Items List</h1>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-6 w-full p-4 flex-1">
        {loading && (
          <>
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
          </>
        )}

        {!loading && error && (
          <p className="text-red-500">{error}</p>
        )}

        {!loading && items && items.length === 0 && (
          <p>No items found</p>
        )}

        {!loading && items && items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
