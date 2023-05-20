//____
 let xBall = 300;
 let yBall = 200;
 let diameter = 20
 let ray = diameter / 2
 let xBallSpeed = 4
 let yBallSpeed = -4
 //____
 let xRacket = 5
 let yRacket = 150
 let widthRacket = 10
 let heightRacket = 100
 let hit = false 
 //____
 let xRacketBOT = 585
 let yRacketBOT = 150
 let yBOTSpeed;
 let hitBOT = false
 let lose = 0;
 //____
 let playerScore = 0
 let botScore = 0
 //____
 let raquetada
 let ponto
 let trilha 
 
function preload(){
  theme = loadSound ("theme.mp3")
  racketsound = loadSound ("racketsound.mp3")
  scoresound = loadSound ("scoresound.mp3") 
}
 
function setup() {
  createCanvas(600,400);
  //theme.loop();
  
}

function draw(){
  background(0);
  Ball(); 
  Racket();
  ShowRacket(xRacket,yRacket)
  ShowRacket(xRacketBOT,yRacketBOT)
  Collide(xRacket,yRacket)
  Collide(xRacketBOT,yRacketBOT)
  Bot();
  SCORE();
  Goal();
  Midfield();
}
 //__________________________________________

  function ShowRacket(x,y){
    rect(x, y, widthRacket,heightRacket)
   }

 function Collide(x,y){
     hit = collideRectCircle(x,y, widthRacket, heightRacket, xBall, yBall, ray)
   if (hit) {xBallSpeed *= -1; racketsound.play()} 
 }
  
 //__________________________________________ 

function Ball() {
  ShowBall();
  MoveBall();
  //Dontstopmenow();
  
  function ShowBall() {
    circle(xBall, yBall, diameter);
}
  function MoveBall() {
  
  xBall += xBallSpeed;
    yBall += yBallSpeed;
  if ( xBall + ray> width || xBall - ray< 0){
        xBallSpeed *= -1;
      }
  if (yBall + ray> height || yBall - ray< 0){
         yBallSpeed *= -1;  
  }
  
 }
  
  
function Dontstopmenow (){
    if (xBall - ray < 0){
    xBall = 23
    }
}
  
}

//_____________________________________________

function Racket() {
  MoveRacket();
  //Colisão();
    
  function MoveRacket(){  
    if (keyIsDown(UP_ARROW)) {
    yRacket -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRacket += 5;
   }
  }
  
  function Colisão(){
    if (xBall - ray < xRacket + widthRacket && yBall - ray < yRacket + heightRacket && yBall + ray > yRacket){
      xBallSpeed *= -1;}
    }

}
//_______________________________________________

function Bot(){
   MoveBOT();
   Calculatelose();
  
  function MoveBOT(){
    yBOTSpeed = yBall - yRacketBOT - widthRacket/2 -98
    yRacketBOT += yBOTSpeed + lose} 
  
  
  function Calculatelose(){
    if (botScore >= playerScore){lose += 1
     if (lose >= 39){ lose = 40}
    }else{lose -= 1; if (lose <= 35){ lose = 35}}
  }
  
}
//_______________________________________________

function Midfield(){
  rect( 300, 0, 5, 800);

}

//_______________________________________________
 function SCORE(){
   stroke (255)
   textAlign (CENTER)
   textSize (16)
   fill (color (0,0,128))
   rect (130, 10, 40, 20)
   fill (255)
   text (playerScore, 150, 26)
   fill (color (0,0,128))
   rect (430, 10, 40, 20)
   fill (255)
   text (botScore, 450, 26)
 }

  function Goal(){
    if (xBall>590){playerScore += 1; scoresound.play()}
    if (xBall<10){botScore += 1; scoresound.play()}
  }

//Não sei o que fazer;