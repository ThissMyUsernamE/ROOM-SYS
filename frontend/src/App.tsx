import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

interface RoomStatus {
  [key: string]: string
}

function App() {
  const [roomStatus, setRoomStatus] = useState<RoomStatus>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRoomStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rooms/status')
        setRoomStatus(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch room status')
        setLoading(false)
      }
    }

    fetchRoomStatus()
    // Refresh every 30 seconds
    const interval = setInterval(fetchRoomStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return <div>Loading room status...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="container">
      <h1>Room Management System</h1>
      <div className="room-grid">
        {Object.entries(roomStatus).map(([room, status]) => (
          <div key={room} className={`room-card ${status.toLowerCase().includes('occupied') ? 'occupied' : 'free'}`}>
            <h3>{room}</h3>
            <p>{status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
