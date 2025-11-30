let status = document.querySelector("h2");
let addRemBtn = document.querySelector("button");
let isFriend = 0;

addRemBtn.addEventListener("click", ()=> {
    if(isFriend === 0) {
        status.textContent = "Friend";
        addRemBtn.textContent = "Remove Friend";
        status.style.color = "#4ECDC4";
        addRemBtn.style.background = "linear-gradient(45deg, #FF416C, #FF4B2B)";
        isFriend++;
    }
    else{
        status.textContent = "Stranger";
        status.style.color = "#FF6B6B";
        addRemBtn.textContent = "Add Friend";
        addRemBtn.style.background = "linear-gradient(45deg, #00b09b, #96c93d)";
        isFriend--;
    }
});