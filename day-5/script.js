let counter = document.querySelector("section:nth-child(1) h2");
let btnInc = document.querySelector("section:nth-child(2) button:nth-child(1)");
let btnDec = document.querySelector("section:nth-child(2) button:nth-child(2)");
let reset = document.querySelector("section:nth-child(3) button");

btnInc.addEventListener("click", ()=>{
   counter.textContent = Number(counter.textContent) + 1;
});

btnDec.addEventListener("click", ()=>{
    let newValue = Number(counter.textContent) - 1;
    if(newValue >= 0){
        counter.textContent = newValue;
    }
});

reset.addEventListener("click", ()=>{
    counter.textContent = 0;
});