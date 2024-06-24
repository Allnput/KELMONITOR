document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
        });

        service.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#fff';
        });
    });
});
