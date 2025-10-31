import type { Room } from '../types'
import { RoomCard } from './RoomCard'

interface RoomGridProps {
  rooms: Room[]
}

export function RoomGrid({ rooms }: RoomGridProps) {
  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </div>
  )
}

export default RoomGrid
