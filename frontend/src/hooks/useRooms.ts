import { useState, useEffect, useCallback } from 'react'
import type { Room } from '../types'
import { getRooms } from '../services/api'

export function useRooms(pollInterval = 30000) {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetch = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getRooms()
      setRooms(data)
      setError('')
    } catch (e) {
      setError('Failed to fetch rooms')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetch()
    const id = setInterval(fetch, pollInterval)
    return () => clearInterval(id)
  }, [fetch, pollInterval])

  return { rooms, loading, error, refresh: fetch }
}

export default useRooms
