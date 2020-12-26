var Maze;
function preload() {
	Maze = loadImage("MAZE.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  wall1 = createSprite(70,height/2,10,height-100); 
  wall2 = createSprite(width/4-20,50,width/3+80,10);
  wall3 = createSprite(width/4+30,height-50,width/3+170,10);
  wall4 = createSprite(width-80,height/2,10,height-100); 
  wall5 = createSprite(width-370,height-50,width/3+80,10);
  wall6 = createSprite(width-430,50,width/3+170,10);
  wall7 = createSprite(270,135,200,7)
  wall8 = createSprite(270,height/2,200,7)
  wall9 = createSprite(270,height/2+85,200,7)
  wall10 = createSprite(270,height/2+220,200,7)
  wall11 = createSprite(425,height/4,300,7)
  wall12 = createSprite(520,height/4+47,290,7)
  wall13 = createSprite(520,height/4+90,290,7)
  wall14 = createSprite(325,height/2-40,300,7)
  wall15 = createSprite(425,height/4,300,7)
  wall16 = createSprite(470,90,200,7);
  wall17 = createSprite(470,height/2+130,200,7)
  wall18 = createSprite(570,height/2+175,200,7)
  wall19 = createSprite(175,height/2+130,200,7)
  wall20 = createSprite(375,height-85,200,7)
  wall21 = createSprite(width/2+150,height-85,100,7)
  wall22 = createSprite(width/2-50,height/2+220,300,7)
  wall23 = createSprite(width/2-40,height/2,500,7)
  wall24 = createSprite(width/2+300,height/2+220,200,7)
  wall1.shapeColor = "red";
  wall2.shapeColor = "red";
  wall3.shapeColor = "red";
  wall4.shapeColor = "red";
  wall5.shapeColor = "red";
  wall6.shapeColor = "red";
  wall7.shapeColor = "red";
  wall8.shapeColor = "red";
  wall9.shapeColor = "red";
  wall10.shapeColor = "red";
  wall11.shapeColor = "red";
  wall12.shapeColor = "red";
  wall13.shapeColor = "red";
  wall14.shapeColor = "red";
  wall15.shapeColor = "red";
  wall16.shapeColor = "red";
  wall17.shapeColor = "red";
  wall18.shapeColor = "red";
  wall19.shapeColor = "red";
  wall20.shapeColor = "red";
  wall21.shapeColor = "red";
  wall22.shapeColor = "red";
  wall23.shapeColor = "red";
  wall24.shapeColor = "red";
}


function draw() {
  background(Maze);  

  drawSprites();
 
}

