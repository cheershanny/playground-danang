// Event details
const eventDetails = {
  nextEvent: {
    date: "Tối thứ 5, 12/06",
    time: "6:30 - 8:30pm",
    location: "28 Trần Bình Trọng, Hải Châu, Đà Nẵng",
    price: "150.000đ/người",
  }
};

// Update event details
function updateEventDetails() {
  // Update event details
  document.getElementById('event-date').textContent = eventDetails.nextEvent.date;
  document.getElementById('event-time').textContent = eventDetails.nextEvent.time;
  document.getElementById('event-location').textContent = eventDetails.nextEvent.location;
  document.getElementById('event-price').textContent = eventDetails.nextEvent.price;
  
}
// Update event details when the page loads
document.addEventListener('DOMContentLoaded', updateEventDetails);