from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"Hello": "Room-SYS API (Flask) is running!"})

@app.route('/rooms/status')
def get_room_status():
    # Temporary data structure for MVP check
    return jsonify({
        "Room A101": "Occupied",
        "Room B205": "Free",
        "Room C300": "Occupied (Reserved by Mr. Smith)"
    })

if __name__ == '__main__':
    app.run(debug=True)