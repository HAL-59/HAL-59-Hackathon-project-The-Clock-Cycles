from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample seating data (REPLACE with a database in a real app)
seating_data = {}

# Initialize seating data (example - load from DB in real app)
total_seats = 3000
buildings = 5
seats_per_building = total_seats // buildings  # Integer division
floors_per_building = 5
seats_per_floor = seats_per_building // floors_per_building  # Integer division
seats_per_row = 20

for building in range(1, buildings + 1):
    seating_data[building] = {}
    for floor in range(1, floors_per_building + 1):
        seating_data[building][floor] = {}
        for seat_num in range(1, seats_per_floor + 1):
            seat_id = f"S{(building - 1) * seats_per_building + (floor - 1) * seats_per_floor + seat_num}"
            seating_data[building][floor][seat_id] = {"occupied": False, "user": None}


@app.route('/api/seats/<int:building>/<int:floor>', methods=['GET'])
def get_seats(building, floor):
    if building not in seating_data or floor not in seating_data[building]:
        return jsonify({"error": "Invalid building or floor"}), 404

    return jsonify(seating_data[building][floor])


@app.route('/api/seats/<int:building>/<int:floor>/<string:seat_id>', methods=['PUT'])
def update_seat(building, floor, seat_id):
    if building not in seating_data or floor not in seating_data[building] or seat_id not in seating_data[building][floor]:
        return jsonify({"error": "Invalid building, floor, or seat"}), 404

    data = request.get_json()
    if not data or "occupied" not in data:
        return jsonify({"error": "Missing 'occupied' status in request body"}), 400

    seating_data[building][floor][seat_id]["occupied"] = data["occupied"]
    seating_data[building][floor][seat_id]["user"] = data.get("user")

    return jsonify({"message": "Seat updated successfully"})


if __name__ == '__main__':  # Corrected: __main__
    app.run(debug=True)
    