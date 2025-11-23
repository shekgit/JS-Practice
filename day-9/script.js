let img = document.querySelector('img');
let heart = document.querySelector('.ri-heart-fill');
img.addEventListener('dblclick', () => {
    heart.style.opacity = '1';
    heart.classList.add("animation");
    setTimeout(() => {
        heart.style.opacity = '0';
    }, 300);
    heart.addEventListener('transitionend', () => {
        heart.classList.remove("animation");
    }, { once: true });
});