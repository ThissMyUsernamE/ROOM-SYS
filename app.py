from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy import create_engine, text
from datetime import datetime

engine = create_engine("sqlite:///school.db")

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def index():
    return jsonify({"Hello": "Room-SYS API (Flask) is running!"})

@app.route('/rooms/status')
def get_room_status():
    try:
        with engine.connect() as conn:
            # Query that joins rooms with room types and users
            query = text("""
                SELECT 
                    r.id,
                    r.name,
                    r.occupied,
                    rt.type_name,
                    u.full_name as occupant_name,
                    u.username as occupant_username
                FROM rooms r
                LEFT JOIN room_types rt ON r.type_id = rt.id
                LEFT JOIN users u ON r.occupant_id = u.id
            """)
            
            result = conn.execute(query)
            rooms = []
            for row in result:
                rooms.append({
                    "id": row.id,
                    "name": row.name,
                    "type": row.type_name,
                    "occupied": bool(row.occupied),
                    "occupant": {
                        "name": row.occupant_name,
                        "username": row.occupant_username
                    } if row.occupant_name else None
                })
            return jsonify(rooms)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/room-types')
def get_room_types():
    try:
        with engine.connect() as conn:
            query = text("SELECT id, type_name, description FROM room_types")
            result = conn.execute(query)
            types = [{"id": row.id, "name": row.type_name, "description": row.description} 
                    for row in result]
            return jsonify(types)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/users')
def get_users():
    try:
        with engine.connect() as conn:
            query = text("SELECT id, username, full_name FROM users")
            result = conn.execute(query)
            users = [{"id": row.id, "username": row.username, "full_name": row.full_name} 
                    for row in result]
            return jsonify(users)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)