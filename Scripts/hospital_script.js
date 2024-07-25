document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const hospitalInfo = button.nextElementSibling;
            if (hospitalInfo.style.display === 'block') {
                hospitalInfo.style.display = 'none';
            } else {
                hospitalInfo.style.display = 'block';
            }
        });
    });
});
