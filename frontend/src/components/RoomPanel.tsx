import type { Room } from '../types'
import RoomHeader from './RoomHeader'
import RoomGrid from './RoomGrid'
import './RoomPanel.css'

interface RoomPanelProps {
  rooms: Room[]
}

export function RoomPanel({ rooms }: RoomPanelProps) {
  const occupied = rooms.filter(r => r.occupied).length

  return (
    <div className="container">
      <RoomHeader total={rooms.length} occupied={occupied} />
      <RoomGrid rooms={rooms} />
    </div>
  )
}

export default RoomPanel
