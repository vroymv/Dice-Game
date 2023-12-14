var player1Score = Math.floor((Math.random() * 6) + 1);
var player2Score = Math.floor((Math.random() * 6) + 1);
var header = document.querySelector('div h1');
var play = document.querySelector('.btn');

switch(player1Score){
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        break;
}

switch(player2Score){
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;
}

(function(){
    if(player1Score>player2Score){
        header.textContent="🚩 Player One Wins!";
    }else if(player2Score>player1Score){
        header.textContent= "Player Two Wins! 🚩" ;
    }else{
        header.textContent = "Draw!";
    }
})();


play.addEventListener('click', function(){
    location.reload();
},false);