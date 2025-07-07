// Countdown Timer
const timer = document.getElementById('timer');
const weddingDate = new Date("2025-12-01 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    timer.textContent = "Today is the big day!";
  }
}, 1000);

// RSVP Form
document.getElementById('rsvp-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your RSVP! We look forward to celebrating with you.');
  e.target.reset();
});
