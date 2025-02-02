// script.js
const buildingDropdown = document.getElementById('building-dropdown');
const planContainer = document.getElementById('plan-container');

const seatingPlans = {
    building1: {
        rows: 5,
        cols: 10,
        occupiedSeats: [[2, 3], [4, 7], [1, 9]] // Example occupied seats
    },
    building2: {
        rows: 8,
        cols: 12,
        occupiedSeats: [[3, 5], [6, 2], [7, 11]]
    },
    building3: {
        rows: 6,
        cols: 8,
        occupiedSeats: [[1, 2], [3, 6], [5, 4]]
    },
    building4: {
        rows: 4,
        cols: 6,
        occupiedSeats: [[2, 1], [3, 5]]
    },
    building5: {
        rows: 10,
        cols: 15,
        occupiedSeats: [[4, 8], [7, 3], [9, 12]]
    }
};


function generateSeatingPlan(building) {
    planContainer.innerHTML = ''; // Clear previous plan

    const plan = seatingPlans[building];
    const numRows = plan.rows;
    const numCols = plan.cols;
    const occupied = plan.occupiedSeats;

    for (let i = 0; i < numRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('seat-row');
        for (let j = 0; j < numCols; j++) {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');
            if (occupied.some(seat => seat[0] === i + 1 && seat[1] === j + 1)) {
                seatDiv.classList.add('occupied');
            }
            seatDiv.style.left = (j * 35) + 'px'; // Adjust spacing as needed
            seatDiv.style.top = (i * 35) + 'px';
            rowDiv.appendChild(seatDiv);
        }
        planContainer.appendChild(rowDiv);
    }
}


buildingDropdown.addEventListener('change', function() {
    const selectedBuilding = this.value;
    generateSeatingPlan(selectedBuilding);
});

// Initial plan load
generateSeatingPlan(buildingDropdown.value);