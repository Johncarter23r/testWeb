document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    const getLocationButton = document.getElementById('getLocation');

    getLocationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            status.textContent = "Geolocation is not supported by this browser.";
        }
    });

    function showPosition(position) {
        const coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };

        status.textContent = `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`;

        // Sending coordinates to the operator
        localStorage.setItem('patientCoordinates', JSON.stringify(coordinates));
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                status.textContent = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                status.textContent = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                status.textContent = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                status.textContent = "An unknown error occurred.";
                break;
        }
    }
});
