var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var bgImg
var bgMusic
function preload(){
    // load sound here
    music = loadSound("music.mp3");
    bgImg = loadImage("8bit.png");

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(800,580,360,30);
    block4.shapeColor = "lime";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    
}

function draw() {
    background(bgImg);
  
    ball.velocityX = -4;
    ball.velocityY = 9;
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to set velocityX and velocityY of ball as 0
music.stop();
        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "lime";

    }

    //write code to bounce off ball from the block4

    drawSprites();
}
