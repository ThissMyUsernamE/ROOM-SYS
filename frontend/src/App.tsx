import { useState, useEffect } from 'react'
import axios from 'axios'
import type { Room } from './types'
import RoomPanel from './components/RoomPanel'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './components/Index'

function App() {
  const [rooms, setRooms] = useState<Room[]>([])
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const roomsResponse = await axios.get<Room[]>('http://localhost:5000/rooms/status');
      setRooms(roomsResponse.data)
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch data')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return <div className="loading">Loading room status...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/overview" element={<RoomPanel rooms={rooms} />} />
      </Routes>
    </BrowserRouter>
  )

  
}

export default App
