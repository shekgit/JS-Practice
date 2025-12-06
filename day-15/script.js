function updateSpotlightPosition(x, y) {
    document.body.style.setProperty('--x', x + 'px');
    document.body.style.setProperty('--y', y + 'px');
}

addEventListener('mousemove', (e) => {
    updateSpotlightPosition(e.clientX, e.clientY);
});

addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    updateSpotlightPosition(touch.clientX, touch.clientY);
}, { passive: false });

addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    updateSpotlightPosition(touch.clientX, touch.clientY);
});