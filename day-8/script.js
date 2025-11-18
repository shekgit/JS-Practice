let btn = document.querySelector('.btn');
let h2 = document.querySelector('h2');
let grow = 0;
let cardInner = document.querySelector('.card-inner'); 
let range = Math.floor(Math.random()*50) + 50;
let interval = null;

btn.addEventListener('click', ()=>{
    if(interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    btn.style.pointerEvents = 'none';
    
    interval = setInterval(()=>{
        grow++;
        h2.innerHTML = `${grow}%`;
        cardInner.style.width =`${grow}%`;
        btn.innerHTML = 'Downloading...';
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';

        if(grow >= 100) {
            clearInterval(interval);
            interval = null;
            btn.innerHTML = 'Downloaded';
            btn.style.opacity = 0.5;
            grow = 0;
        }
    },range);
});