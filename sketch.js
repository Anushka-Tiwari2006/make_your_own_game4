const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "levelA"
var pc,stair,stairGroup;
var sound1,background;
var zBack6
var score = 0;
var life = 1;
var chain,chain2,chain3,chain4,chain5;

function preload(){
   zImage = loadImage("26.png");
   zImage2 = loadImage("32.png");
   zImage3 = loadImage("33.png");
   pcImg  = loadImage("34.png");
   zBack = loadImage("1 back.jpeg")
   log  = loadImage("35.png");
   gImg  = loadImage("36.png");
   sImg = loadImage("skull.png");
   dImg = loadImage("39.png");
   sound1 = loadSound("level1.mp3")
   sound2 = loadSound("level2.mp3")
   pcImg = loadImage("34.png")
   pcImg2 = loadImage("pc2.png")
   gaintImg = loadImage("24.png")
   mImg = loadImage("25.png")
   mImg2 = loadImage("501.png")
   sword = loadImage("sw.png")
   fly = loadImage("butter.png")
   aback = loadImage("11.png")
   aback2 = loadImage("12.png")
   aback3 = loadImage("13.png")
   aback4 = loadImage("14.png")
   sback = loadImage("3back.jpeg")
   poly = loadImage("pcpwer.png")
   coin = loadSound("mario_pick_coin.mp3")
   sound3 = loadSound("music.mp3");
  

 }
function setup() {
  createCanvas(1320,650);
  engine = Engine.create();
  world = engine.world;

 
  background1 = createSprite(800,300,10,100);
  background1.addImage(zBack);
  

  stairGroup = new Group();
  zombGroup = new Group();
  skullGroup = new Group();
  scoreGroup = new Group();
  bodyGroup = new Group();
   //level2
   monsterGroup = createGroup();
   monsterGroup2 = createGroup()
   gaintGroup = createGroup();
   weaponGroup = createGroup()
  
  

  pc = createSprite(100, 200, 50, 50);
  pc.addImage(pcImg);
  pc.scale = 0.4;
  pc.setCollider("rectangle",0,0,200,340);

  ground = createSprite(99,368,800,20);
  ground.addImage(gImg);
  ground.scale = 0.6;
  ground.setCollider("rectangle",0,0,400,100);

  ground2 = createSprite(20,508,63050,80);
  ground2.shapeColor = "black";
 
  skull2 = createSprite(12710,400,20,80);
  skull2.addImage(sImg)
  skull2.scale = 0.9;
  
  for(s = 700;s<12710;s=s+1500){
    body = createSprite(s,480,20,80);
    body.addImage(dImg)
    body.scale = 0.3;

    bodyGroup.add(body)
    }
   
  for(a = 300;a<12710;a=a+250){
    score = createSprite(a,100,20,80);
    score.addImage(fly)
    score.scale = 0.8;
    score.setCollider("circle",0,-30,20)

    scoreGroup.add(score);

  }
  
  for(var i =300;i<12710;i=i+250){ 
    stair = createSprite(i,random(30,350),80,10);
    stair.addImage(log);
    stair.scale = 0.3
    stair.setCollider("rectangle",0,0,300,100)
  
    stairGroup.add(stair);
    
  }

  pc2 = createSprite(20,400,20,20)
   pc2.addImage(pcImg)
   pc2.scale = 0.7

   
 
  button = createButton('Play');
  score = 0

  drawSprites();
  //#stack1
    h1= new Ground(200, 600, 70, 70);
    h2= new Ground(300, 600, 70, 70);
    h3= new Ground(400, 600, 70, 70);
    h4= new Ground(500, 600, 70, 70);
    h5= new Ground(600, 600, 70, 70);
    h6= new Ground(700, 600, 70, 70);

    h7 = new Ground(300, 500, 70, 70);
    h8 = new Ground(400, 500, 70, 70);
    h9 = new Ground(500, 500, 70, 70);
    h10 = new Ground(600, 500, 70, 70);
    h11 = new Ground(400, 400, 70, 70);
    h12 = new Ground(500, 400, 70, 70);
    h13 = new Ground(500, 400, 70, 70);
    h14 = new Ground(450, 300, 70, 70);
    
    //#stack2
    h15= new Ground(6000, 600, 70, 70);
    h16= new Ground(6070, 600, 70, 70);
    h17= new Ground(6140, 600, 70, 70);
    h18= new Ground(6210, 600, 70, 70);
    h19= new Ground(6280, 600, 70, 70);
    h20= new Ground(6350, 600, 70, 70);

    h21 = new Ground(6070, 525, 70, 70);
    h22 = new Ground(6140, 525, 70, 70);
    h23 = new Ground(6210, 525, 70, 70);
    h24 = new Ground(6280, 525, 70, 70);
    h25 = new Ground(6140, 460, 70, 70);
    h26 = new Ground(6210, 460, 70, 70);
    h27 = new Ground(6180, 390, 70, 70);

    //#stack3
    h28= new Ground(2000, 600, 70, 70);
    h29= new Ground(2070, 600, 70, 70);
    h30= new Ground(2140, 600, 70, 70);
    h31= new Ground(2210, 600, 70, 70);
    h32= new Ground(2280, 600, 70, 70);
    h34= new Ground(2350, 600, 70, 70);

    h35 = new Ground(2070, 535, 70, 70);
    h36 = new Ground(2140, 535, 70, 70);
    h37 = new Ground(2210, 535, 70, 70);
    h38 = new Ground(2280, 535, 70, 70);
    h39 = new Ground(2140, 470, 70, 70);
    h40 = new Ground(2210, 470, 70, 70);
    h41 = new Ground(2180, 400, 70, 70);

    hydrabig = new Ground(9000,500,600,300);
    g = new Ground2(9000,540,300,20);
    hydrabig2 = new Ground(12000,400,600,300);
    g2 = new Ground2(12000,540,300,20);



    staticGround = new Ground2(10,688,600,60);
    staticGround2 = new Ground2(180,620,1000,10);
    staticGround3 = new Ground2(5980,620,1000,10);
    staticGround4 = new Ground2(2000,620,1000,10);

    Polygon = Bodies.circle(100,400,20,25);
    World.add(world,Polygon);

  //  Polygon2 = Bodies.circle(1600,400,20,25);
   /// World.add(world,Polygon2);

  //  Polygon3 = Bodies.circle(5890,400,20,25);
  //  World.add(world,Polygon3);

    //Polygon4 = Bodies.circle(8950,400,20,25);
    //World.add(world,Polygon4);

   // Polygon5 = Bodies.circle(11950,400,20,25);
   // World.add(world,Polygon5);

    
    

    if(gameState ==="levelA"){
      sound3.play();
    }
    if(gameState ==="levelB"){
      sound2.play();
      sound1.stop()
    }
    if(gameState ==="levelC"){
      sound3.play()
      //sound2.stop()
    }

    chain = new SlingShot(this.Polygon,{x:100,y:400})
  //  chain2 = new SlingShot(this.Polygon2,{x:1600,y:400})
  //  chain3 = new SlingShot(this.Polygon3,{x:5890,y:400})
  //  chain4 = new SlingShot(this.Polygon4,{x:8950,y:400})
  //  chain5 = new SlingShot(this.Polygon5,{x:11950,y:400})
    


}
function draw() {
  background("black")
  Engine.update(engine);

  if(gameState==="levelA"){
    background1.addImage(zBack);
    background1.scale = 1;
    pc2.visible = false;
    

  if(pc.isTouching(scoreGroup)){
    score = score+1
    scoreGroup[0].destroy();
    coin.play()
  }

  pc.visible = true

  if(keyDown("up")&&pc.y>1 ) {
    pc.velocityY = -18;
    pc.velocityX = 5; 
    }
  
  pc.velocityY = pc.velocityY + 0.8;
   
  pc.collide(stairGroup);
  pc.collide(ground);


  // this.button.position(560,500);
  button.style('width', '200px');
  button.style('height', '40px');
  button.style('background', 'lightpink');
    
  zombies();
  skullFun();
  camera.position.x  = pc.x;
  camera.position.y = 200;

  if(pc.isTouching(zombGroup)||pc.isTouching(skullGroup)||pc.isTouching(ground2)){
    gameState = "end";
    }

    else if(score>=1){
      gameState = "levelB"
    }

    

    
    
  drawSprites();
  fill("white")
  textSize(25)
  text("Energy level : "+score,10,-50)
        
  }

  else if(gameState === "levelB"){

    //life = 1

  ground .visible = false
  skull2.visible = false;
  bodyGroup.destroyEach();
  ground2.visible  = false;
  zombGroup.destroyEach()
  skullGroup.destroyEach()
  stairGroup.destroyEach()
  scoreGroup.destroyEach();

 

  background1.addImage(aback3)
  background1.x  = 10
  background1.scale = 0.75
  pc2.visible =false
    
  // background1.changeImage(zBack3)

  ground = createSprite(10,700,1500,70) 
  ground.shapeColor = "black"

  if(keyCode===37){
    pc.velocityX -=4
    pc.addImage(pcImg)
  }
  if(keyCode===39){
    pc.velocityX +=4
    pc.addImage(pcImg2)
  }
  if(keyCode===38){
    pc.velocityY -=4
    pc.addImage(pcImg)
  }
  if(keyCode===40){
    pc.velocityY +=4
    pc.addImage(pcImg)
  }
    
  if(weaponGroup.isTouching(gaintGroup)){
    gaint2.destroy();
    life = life +1
    coin.play();
    butter = createSprite(80,200,10,10)
    butter.addImage(fly);
  
    if(life>1){

      butter.x = butter.x+60
    }
    if(life>2){
      butter.x = butter.x+60
    }
    if(life>3){
      butter.x = butter.x+60
    }
    if(life>4){
      butter.x = butter.x+60
    }
    if(life>5){
      butter.x = butter.x+60
    }
    if(life>6){
      butter.x = butter.x+60
    }
    if(life>7){
      butter.x = butter.x+60
    }
    if(life>8){
      butter.x = butter.x+60
    }
    }
  
    if(monsterGroup.isTouching(pc)||monsterGroup2.isTouching(pc) &&life>=1){
      life -=1
     // gameState="end"
      //butter.visible = false


      }
    else if(life===0||gaintGroup.isTouching(pc)){
        gameState = "end"
      }
    else if(life>=10){
        gameState = "levelC"
      }
  //  if(gameState === "end"){
   //   background("pink")
   // }
    
  
  pc.debug  =true;
  
  gaintFun();
  monsterFun();
  weaponFun();
  drawSprites();

  fill("white")
  textSize(20)
  text("Energy : "+life,50,100)

  pc.x = 100
  pc.y = 400
  camera.position.x = pc.x
  camera.position.y = pc.y

  }

  else if(gameState === "levelC"){

   
    
   background1.addImage(sback)
   background1.scale = 1.2
   background1.y = 450
   //gameState="chain1"
   //background1.velocityX = 4
   butter.visible = false;
   pc2.visible =true;
   weaponGroup.destroyEach()
   monsterGroup.destroyEach()
   gaintGroup.destroyEach();

   if(keyDown("right")){
    pc2.velocityX = 9
    pc2.addImage(pcImg)
  }
  if(keyDown("left")){
    pc2.velocityX = -9
    pc2.addImage(pcImg2)
  }
  if(keyDown("up")){
    pc2.velocityY = -9
    pc2.addImage(pcImg)
  }
  if(keyDown("down")){
    pc2.velocityY = 9
    pc2.addImage(pcImg)
  }
  if(keyDown("space")){
    pc2.velocityX = 0
    pc2.velocityY = 0

  }

  console.log(pc2.x)
 
   drawSprites();
   
    camera.position.x = pc2.x;
    camera.position.y = 400;

    h1.display();
    staticGround.display()
    h2.display();
    h3.display();
    h4.display();
    h5.display();
    h6.display();
    h7.display();
    h8.display();
    h9.display();
    h10.display();
    h11.display();
    h12.display();
    h13.display();
    h14.display();
    h15.display();
    h16.display();
    h17.display();
    h18.display();
    h19.display();
    h20.display();
    h21.display();
    h22.display();
    h23.display();
    h24.display();
    h25.display();
    h26.display();
    h28.display();
    h29.display();
    h30.display();
    h31.display();
    h32.display();
    h34.display();
    h35.display();
    h36.display();
    h37.display();
    h38.display();
    h39.display();
    h40.display();
    h41.display();
    h27.display();
    hydrabig.display();
    hydrabig2.display();
    g.display();
    g2.display();
    staticGround2.display();
    staticGround3.display();
    staticGround4.display();
    chain.display();
    
    //chain2.display();
    //chain3.display();
   // chain4.display();
    //chain5.display();
    imageMode(CENTER);
     image(poly, Polygon.position.x, Polygon.position.y, 200, 200);   
    }

    else if(gameState === "end"){
      background("red")
    }
    
   

     

    // imageMode(CENTER);
     //image(poly, Polygon2.position.x, Polygon2.position.y, 200, 200);  

     //imageMode(CENTER);
     //image(poly, Polygon3.position.x, Polygon3.position.y, 200, 200);  

     //imageMode(CENTER);
     //image(poly, Polygon4.position.x, Polygon4.position.y, 200, 200);  

     //imageMode(CENTER);
     //image(poly, Polygon5.position.x, Polygon5.position.y, 200, 200);  
}
 
  
  
 
 

 function zombies(){
  
  if(frameCount%20===0){
   zomb = createSprite(1,460,20,20);
   zomb.velocityX =random(4,8);
   
  var rand = Math.round(random(1,3));
  switch(rand){
   case 1: zomb.addImage(zImage);
      break;
   case 2: zomb.addImage(zImage2); 
      break;
   case 3: zomb.addImage(zImage3);
      break;  
      default:break;

      }
  zomb.scale = 0.4;
  //zomb.debug = true
  zomb.setCollider("rectangle",40,0,200,340);
  zombGroup.add(zomb)
  } 
 }

 function skullFun(){
  if(frameCount%20===0){
    sk = createSprite(random(8000,13050),10,10,10);
    sk.velocityY = 6;
    sk.addImage(sImg)
    sk.scale = 0.2
    //sk.debug = true
    sk.setCollider("circle",0,-40,80)
    skullGroup.add(sk)
  }
 }

 function gaintFun(){
  if(frameCount%200===0){
    gaint2 = createSprite(1,400,30,30);
    gaint2.addImage(gaintImg);
    gaint2.scale = 0.6;
    gaint2.velocityX = -4;
    gaint2.y = random(50,800);
    gaintGroup.add(gaint2);
    

    gaint2.setCollider("rectangle",0,0,100,200)
  }
 }

 function monsterFun(){
  if(frameCount%180===0){
    monster = createSprite(1,400,10,10)
    monster.addImage(mImg2)
    monster.scale = 0.3
    monster.velocityX  = -4
    monster.y = random(50,800)
    
    monster.setCollider("rectangle",0,0,100,200)


    monsterGroup.add(monster)
    
    
  }
  if(frameCount%240===0){
    monster2 = createSprite(1,400,10,10)
    monster2.addImage(mImg)
    monster2.scale = 0.3
    monster2.velocityX = 4
    monster2.y = random(50,800)
    monster2.debug = true;
    monster2.setCollider("rectangle",0,0,100,200)


    monsterGroup2.add(monster2)
  } 
 }

 function weaponFun(){
  if(keyDown("space")){
    weapon = createSprite(1,1,10,10)
    weapon.velocityX = 6
    weapon.addImage(sword)
    weapon.scale = 0.4;
    weapon.x = pc.x;
    weapon.y = pc.y;
    
    weapon.lifetime = 300
    weapon.setCollider("rectangle",0,0,300,200)


    weaponGroup.add(weapon)
  }
 }

 function mouseDragged(){

  Matter.Body.setPosition(this.Polygon,{x:mouseX,y:mouseY})
  Matter.Body.setPosition(this.Polygon2,{x:mouseX,y:mouseY})
  Matter.Body.setPosition(this.Polygon3,{x:mouseX,y:mouseY})
  Matter.Body.setPosition(this.Polygon4,{x:mouseX,y:mouseY})
  Matter.Body.setPosition(this.Polygon5,{x:mouseX,y:mouseY})
  
  }
  
  function mouseReleased(){
     chain.fly() 
     chain2.fly()
     chain3.fly()
     chain4.fly()
     chain5.fly()
     
  }
  function keyPressed(){
    if(keyCode === 32){
        chain.attach(Polygon);
        chain2.attach(Polygon2)
        chain3.attach(Polygon3)
        chain4.attach(Polygon4)
        chain5.attach(Polygon5)
        
    }
  }
 





