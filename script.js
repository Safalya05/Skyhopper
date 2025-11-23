// Flight search form submission
document.getElementById('flightSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, this would redirect to search results with query params
    window.location.href = '/search.html';
});

// Simple flight data storage (in a real app, this would be a proper backend)
const flightDB = {
    saveBooking: function(bookingData) {
        let bookings = JSON.parse(localStorage.getItem('flightBookings')) || [];
        bookings.push(bookingData);
        localStorage.setItem('flightBookings', JSON.stringify(bookings));
    },
    getBookings: function() {
        return JSON.parse(localStorage.getItem('flightBookings')) || [];
    }
};

// Expose to window for component access
window.flightDB = flightDB;