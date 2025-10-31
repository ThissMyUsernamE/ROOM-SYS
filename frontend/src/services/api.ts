import axios from 'axios'
import type { Room, User } from '../types'

const API_BASE = 'http://localhost:5000'

export async function getRooms(): Promise<Room[]> {
  const res = await axios.get<Room[]>(`${API_BASE}/rooms/status`)
  return res.data
}

export async function getUsers(): Promise<User[]> {
  const res = await axios.get<User[]>(`${API_BASE}/users`)
  return res.data
}

export async function updateRoomStatus(roomId: number, payload: { occupied: boolean; occupant_id: number | null }) {
  const res = await axios.put(`${API_BASE}/rooms/${roomId}/status`, payload)
  return res.data
}
