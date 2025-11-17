let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", ()=> {
    let el = document.createElement("div");
    let size = Math.floor(Math.random() * 8) + 3; 
    el.style.width = `${size}%`;
    el.style.height = `${size}%`;
    let x = Math.floor(Math.random()*90);
    let y = Math.floor(Math.random()*90);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    el.style.backgroundColor = `rgb(${r},${g},${b})`;
    el.style.position = "absolute";
    el.style.left = x + "%";
    el.style.top = y + "%";
    main.appendChild(el);
    setTimeout(() => {
        el.style.transition = "transform 0.3s";
        el.style.transform = "scale(0)";
        setTimeout(() => el.remove(), 300);
    }, Math.random() * 10000);
});
