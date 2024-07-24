document.addEventListener('DOMContentLoaded', () => {
    const operatorLocation = document.getElementById('operator-location');

    const storedCoordinates = localStorage.getItem('patientCoordinates');
    if (storedCoordinates) {
        const coordinates = JSON.parse(storedCoordinates);
        const lat = coordinates.latitude;
        const lng = coordinates.longitude;
        operatorLocation.innerHTML = `Patient's Location: <a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank">View on Google Maps</a>`;
    } else {
        operatorLocation.textContent = "No coordinates received.";
    }
});
