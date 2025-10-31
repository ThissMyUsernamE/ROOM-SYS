export interface User {
  id: number;
  username: string;
  full_name: string;
}

export interface RoomType {
  id: number;
  name: string;
  description: string;
}

export interface Room {
  id: number;
  name: string;
  type: string;
  occupied: boolean;
  occupant: {
    name: string;
    username: string;
  } | null;
}