let gameQuery = [];
let userQuery = [];
let colors = ['brown','green','yellow','blue'];

let body = document.querySelector('body');
let h3 = document.querySelector('h3');
let allBtns = document.querySelectorAll('.button');

let started = false;
let level = 0;

document.addEventListener('keypress', function() {
    if (started==false) {
        console.log('Game started');
        started=true;
        levelUp();
        
        
    } 
});
function levelUp() {
    userQuery=[];
    level++;
    h3.innerText = `Level ${level}`;
    let randomColor = colors[Math.floor(Math.random() * 4)];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameQuery.push(randomColor);
    console.log(gameQuery);
    gameFlash(randBtn);

};


function CheckQuery(idx) {
    if( userQuery[idx]=== gameQuery[idx]){
        if(userQuery.length-1 === gameQuery.length-1){
            setTimeout(levelUp,850);
        }
    }else {
        gameOver();
    }
}



function gameFlash(btn) {
    btn.classList.add('gameflash');
    setTimeout(()=> {
        btn.classList.remove('gameflash');
    },550);};
function btnPress () {
    userQuery.push(this.getAttribute('id'));
    userFlash(this);
    console.log(userQuery);

    CheckQuery(userQuery.length-1);
};
    
function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(()=> {
        btn.classList.remove('userflash');
    },250);};


function gameOver() {
    h3.innerText = 'Game Over !! Press any key to Start';
    body.classList.add('endflash');
    setTimeout(()=> {
        body.classList.remove('endflash')
    },250);
    started=false;
    level=0;
    gameQuery = [];
    userQuery = [];
}


for (btn of allBtns) {
    btn.addEventListener('click',btnPress)
}
