document.addEventListener('DOMContentLoaded', (event) => {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.transform = 'scale(1.05)';
            feature.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            setTimeout(() => {
                feature.style.transform = '';
                feature.style.boxShadow = '';
            }, 300);
        }, index * 200);
    });
});
