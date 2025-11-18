let btn = document.querySelector('.btn');
let h2 = document.querySelector('h2');
let grow = 0;
let cardInner = document.querySelector('.card-inner'); 
let range = Math.floor(Math.random()*50) + 50;

btn.addEventListener('click', ()=>{
   btn.style.pointerEvents = 'none';
    let interval = setInterval(()=>{
        grow++;
        h2.innerHTML = `${grow} %`;
        cardInner.style.width =`${grow}%`;
        btn.innerHTML = 'Downloading...';
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
    },range);
    
    setTimeout(()=>{
        clearInterval(interval);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
    }, range * 100);
});