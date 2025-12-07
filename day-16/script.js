const matrix = document.querySelector('h1');
const text = matrix.textContent;
const allAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allAlphabetsArr = allAlphabets.split('');
let iteration = 0;

function randomText(){
    iteration += 1;
    matrix.textContent = text.split('').map((char,index)=>{
        if(index < Math.floor(iteration)){
            return text[index];
        }
        return allAlphabetsArr[Math.floor(Math.random()*allAlphabetsArr.length)];
    }).join('');

    if(iteration >= text.length){
        matrix.textContent = text;
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(randomText, 30);