var hatPoofDegNum = 15;
var armDegNum = -135;
var direction = 0.75;
var sleighVel = 2; 
var mosleighVeleft = true;
var moveRight = false;
var sleighX = window.innerWidth;
var beardTop = 50;
var beardDir = 2;
const sleigh = document.getElementById('sleigh');
const santa = document.getElementById('santa');


function santaHat() {
    const hatPoof = document.getElementById('hatPoof');
    
    if(hatPoofDegNum >= 30){
        direction *= -1;
    }
    else if(hatPoofDegNum <= 0){
        direction *= -1;
    }
    hatPoofDegNum += direction;
    hatPoof.style.transform = `rotate(${hatPoofDegNum}deg)`;
    // console.log(degNum);

}

function santaWave() {
    const arm = document.getElementById('arm');

    armDegNum += direction;
    arm.style.transform = `rotateZ(${armDegNum}deg)`;
}

function sleighMove(){
    sleighX -= sleighVel;
    // update position
    sleigh.style.left = `${sleighX}`;

    if (sleighX > -300 && mosleighVeleft) {
    }
    // else if(sleighX > 50 && mosleighVeleft){
    //     sleighVel = (sleighX/window.innerWidth)*15;
    // }
    else if (sleighX <= 50 && mosleighVeleft){
        mosleighVeleft = false;
        moveRight = true;
        sleighVel = -2;
        sleigh.style.transform = `rotateY(180deg)`;
    }

    else if (sleighX < (window.innerWidth + (100)) && moveRight) {
    }
    // else if(sleighX < (window.innerWidth + 100) && moveRight){
    //     sleighVel = -5/Math.log(sleighX); 
    //     console.log(sleighVel);
    // }
    else{
        mosleighVeleft = true;
        moveRight = false;
        sleighVel = 2;
        sleigh.style.transform = `rotateY(0deg)`;
    }
}

function santaLaugh() {
    const beard = document.getElementById('beard');

 
    beardTop = Math.sin(beardTop);

    beard.style.top = `${beardTop}`;
}



function updateSanta() {
    
    
    
    var sleighY = 0;
    // console.log(sleigh.style.left);

    
    if (sleigh.style.left <= 100) {
        // rotate and change direction
    }
    else if (sleighX > window.innerWidth){
        // rotate and change direction
    }

    sleighMove();
    // setInterval(santaLaugh, 500);
    santaHat();
    santaWave();
    requestAnimationFrame(updateSanta);

}

requestAnimationFrame(updateSanta);


// not related to santa... meant for scroll
window.addEventListener("keypress", function () {
    const div = document.querySelector('#myCanvas1');

    div.scrollIntoView({ behavior: 'smooth' });
});