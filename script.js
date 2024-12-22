let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if(started == false) {
    console.log("game is started");
    started = true;

    levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
};

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randmIdx = Math.floor(Math.random() * 3);
    let randmColor = btns[randmIdx];
    let randmbtn = document.querySelector(`.${randmColor}`);
    // console.log(randmbtn);
    gameSeq.push(randmColor);
    console.log(gameSeq);
    btnFlash(randmbtn);
};

function checkAns() {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        } ;    
    }else {
        h2.innerText = `Game Over! Press any key to start.`;
        reset(); 
    };
};

function btnPress() {
    let btn = this;
    btnFlash(btn);

    randmColor = btn.getAttribute("id")
    userSeq.push(randmColor);

    checkAns(userSeq.length-1);
};

    let allBtn = document.querySelectorAll(".btn");
    for(btn of allBtn) {
        btn.addEventListener("click" , btnPress);
    };

    function reset() {
        started = false; 
        gameSeq = [];
        userSeq = [];
        level = 0;
    }