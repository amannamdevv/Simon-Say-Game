let gameSeq = [];
let userSeq = [];

let btn = ["yellow", "red", "green", "purple"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;

document.addEventListener("keypress" , function() {
    if(started == false) {
    console.log("game is started");
    started = true;
    levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `level ${level}`;
    let randmIdx = Math.floor(Math.random() * 3);
    let randmColor = btn[randmIdx];
    let randmbtn = document.querySelector(`.${randmColor}`);
    btnFlash(randmbtn);
}