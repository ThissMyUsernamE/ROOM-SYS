interface RoomCardProps {
  name: string;
  type: string;
  occupied: boolean;
  occupant: { name: string; username: string; } | null;
}

export function RoomCard({ name, type, occupied, occupant }: RoomCardProps) {
  return (
    <div className={`room-card ${occupied ? 'occupied' : 'free'}`}>
      <div className="room-header">
        <h3>{name}</h3>
        <span className="room-type">{type}</span>
      </div>
      <div className="room-status">
        <span className={`status-indicator ${occupied ? 'occupied' : 'free'}`}>
          {occupied ? 'Occupied' : 'Free'}
        </span>
      </div>
      {occupied && occupant && (
        <div className="occupant-info">
          <span>Occupied by: {occupant.name}</span>
        </div>
      )}
    </div>
  );
}