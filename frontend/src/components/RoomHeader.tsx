interface RoomHeaderProps {
  total: number
  occupied: number
}

export function RoomHeader({ total, occupied }: RoomHeaderProps) {
  return (
    <header className="header">
      <h1>Room Management System</h1>
      <p className="rooms-summary">
        {occupied} of {total} rooms occupied
      </p>
    </header>
  )
}

export default RoomHeader
