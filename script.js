document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.querySelector('.seats-container');
    const datePicker = document.getElementById('datePicker');
    const selectedSeatsDiv = document.getElementById('selectedSeats');

    const totalSeats = 50; // Total number of seats on the bus
    let bookedSeats = [];  // Array to store booked seats

    // Function to create the seats
    function createSeats() {
        seatsContainer.innerHTML = ''; // Clear previous seats
        for (let i = 1; i <= totalSeats; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.textContent = i;

            // Check if the seat is booked
            if (bookedSeats.includes(i)) {
                seat.classList.add('booked');
            } else {
                seat.addEventListener('click', () => bookSeat(seat, i));
            }

            seatsContainer.appendChild(seat);
        }
    }

    // Function to handle booking a seat
    function bookSeat(seat, seatNumber) {
        if (!seat.classList.contains('booked')) {
            seat.classList.add('booked');
            bookedSeats.push(seatNumber);
            updateSelectedSeats();
        }
    }

    // Function to update the selected seats
    function updateSelectedSeats() {
        if (bookedSeats.length > 0) {
            selectedSeatsDiv.innerHTML = `Забронированные места: ${bookedSeats.join(', ')}`;
        } else {
            selectedSeatsDiv.innerHTML = 'Нет забронированных мест';
        }
    }

    // Event listener to create seats when the date is selected
    datePicker.addEventListener('change', () => {
        createSeats();
        bookedSeats = []; // Reset booked seats when date changes
        updateSelectedSeats();
    });

    // Initial call to create seats
    createSeats();
});
