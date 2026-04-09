// Add interaction script for the glassmorphism elements
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.glass-card');
    
    // Slight mouse movement effect for 3D card
    document.addEventListener('mousemove', (e) => {
        if(window.innerWidth > 768 && card) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            card.style.transform = `perspective(1000px) rotateY(${xAxis - 15}deg) rotateX(${yAxis + 5}deg)`;
        }
    });

    // Reset on mouse out
    document.addEventListener('mouseleave', () => {
        if(window.innerWidth > 768 && card) {
            card.style.transform = `perspective(1000px) rotateY(-15deg) rotateX(5deg)`;
        }
    });
});
