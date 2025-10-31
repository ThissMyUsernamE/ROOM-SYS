import type { Room } from '../types'
import RoomHeader from "./RoomHeader"
export function Index() {
    const occupied = rooms.filter(r => r.occupied).length
return(
 <RoomHeader total={rooms.length} occupied={occupied} />
)
}

export default Index