let elems = document.querySelectorAll('.elem');

elems.forEach(elem => {
    elem.addEventListener('mouseenter', e => {
        elem.querySelector('img').style.opacity = 1;
    });
    elem.addEventListener('mouseleave', e => {
        elem.querySelector('img').style.opacity = 0;
    });
    elem.addEventListener('mousemove', e => {
        let rect = elem.getBoundingClientRect();
        let img = elem.querySelector('img');
        elem.querySelector('img').style.left = (e.x - rect.left) + "px";
        elem.querySelector('img').style.top = (e.y - rect.top) + "px";
        img.style.transform = "translate(-50%, -50%)";
    });
});