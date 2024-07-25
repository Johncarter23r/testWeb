document.addEventListener('DOMContentLoaded', () => {
    const getLocationButton = document.getElementById('getLocation');
    const operatorLocation = document.getElementById('operator-location');

    if (getLocationButton) {
        getLocationButton.addEventListener('click', () => {
            const status = document.getElementById('status');

            function success(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                status.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

                // Simulating sending the coordinates to the operator
                setTimeout(() => {
                    localStorage.setItem('coordinates', JSON.stringify({ latitude, longitude }));
                    alert('Coordinates sent to the operator');
                }, 1000);
            }

            function error() {
                status.textContent = 'Unable to retrieve your location';
            }

            if (!navigator.geolocation) {
                status.textContent = 'Geolocation is not supported by your browser';
            } else {
                status.textContent = 'Locating…';
                navigator.geolocation.getCurrentPosition(success, error);
            }
        });
    }

    if (operatorLocation) {
        const storedCoordinates = JSON.parse(localStorage.getItem('coordinates'));
        if (storedCoordinates) {
            const { latitude, longitude } = storedCoordinates;
            operatorLocation.innerHTML = `
                Received Coordinates: 
                <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">
                    Latitude: ${latitude}, Longitude: ${longitude}
                </a>
            `;
        }
    }
});
