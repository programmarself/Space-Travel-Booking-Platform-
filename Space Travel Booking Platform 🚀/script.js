// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const departure = document.getElementById('departure').value;
  const destination = document.getElementById('destination').value;
  const seatClass = document.getElementById('seat-class').value;

  const bookingDetails = `
    <p><strong>Departure:</strong> ${departure}</p>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Seat Class:</strong> ${seatClass}</p>
  `;

  document.getElementById('user-bookings').innerHTML = bookingDetails;
  alert('Booking successful! Check your dashboard for details.');
});

// Countdown Timer
function updateCountdown() {
  const launchDate = new Date('2024-01-01T00:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);