let dice_img = document.querySelector(".dice");
let RoleDice = document.querySelector(".btn--roll");
let ActivePlayer = 0;
let currentPlayer = document.querySelector(`#current--${ActivePlayer}`);
let player = document.querySelectorAll(".player");
let calculate = 0;
let HoldBtn = document.querySelector(".btn--hold");
let playerScore = [0,0];
let newGameBtn = document.querySelector(".btn--new");


console.log(player)
//---------------------Functions ---------------------------

function ply(){
    let randomNumber = Math.floor((Math.random() * 6) + 1 );
    let randomImg = `dice-${randomNumber}.png`;
    RoleDice.classList.remove('hiddin');
    dice_img.setAttribute('src', randomImg);  
    if(randomNumber !== 1){
        console.log(randomImg);
        calculate= document.querySelector(`#current--${ActivePlayer}`).textContent =Number(document.querySelector(`#current--${ActivePlayer}`).textContent)+ Number(randomNumber);

    }
    else{
        SwitchPlayer();
    }

}

function SwitchPlayer(){
    calculate = 0;
    document.querySelector(`#current--${ActivePlayer}`).textContent = calculate;
    let randomNumber = Math.floor((Math.random() * 6));
   
    if(ActivePlayer === 0){
        ActivePlayer = 1;
    }
    else {
        ActivePlayer = 0;
    }
    for( let i = 0 ; i < player.length ; i++){
        player[i].classList.toggle('player--active');
    }
    console.log(ActivePlayer);

}

function ScoreHold(){
    playerScore[ActivePlayer] += calculate ;
    document.querySelector(`#score--${ActivePlayer}`).textContent = playerScore[ActivePlayer] ;
    if(playerScore[ActivePlayer] >= 300){
        document.querySelector(`#score--${ActivePlayer}`).textContent = "Player Winner!"
        console.log("111")
    }
    else{
      SwitchPlayer();  
    }
    
}

// function newGame(){
//     calculate = 0;
//     document.querySelector(`#score--${ActivePlayer}`) = 0;
//     currentPlayer = 0;
// }
//-------------------  Events --------------------------
RoleDice.addEventListener('click',ply);
HoldBtn.addEventListener('click',ScoreHold);
newGameBtn.addEventListener('click',newGame);
