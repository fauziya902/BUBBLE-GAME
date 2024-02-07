  
  
var timer = 5;

var score = 0;

var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
  hitrn=  Math.floor(Math.random()*10);
  document.querySelector("#HitVal").textContent = hitrn;
}


function makeBubble(){
    var clutter = "";
    
    for(var i=1;i<103;i++){
        var rn = Math.floor( Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
  }


function runTimer(){
    var stop= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(stop);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over !</h1>`;

        }
    },1000);

}

document.querySelector("#pbtm").addEventListener("click",
function(details){
 var clickedNum = Number(details.target.textContent)// button which was clicked !
 if(clickedNum === hitrn){
    increaseScore()
    // makeBubble();
    // getNewHit();
    document.querySelector("#pbtm").innerHTML = `<h1>You Win !</h1>`;
 }
})


runTimer();
makeBubble();
getNewHit();
