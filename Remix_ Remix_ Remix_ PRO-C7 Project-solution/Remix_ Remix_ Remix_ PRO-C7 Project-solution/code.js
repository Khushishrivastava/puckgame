var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fb1d2f15-881e-4a39-83e7-887875f51187","7f7b8399-3d74-4b7f-9181-608bb5f355b9","bc5be2e2-982e-4202-9634-bdc86e4d3bb3","cd742769-26a0-469a-a5ce-8ce0ab2c2140","98f3f136-6c5b-499c-a5f0-bf34bd600096","ffb56946-7116-46a0-ad58-a4bf3424f1b4","ec7645c2-9185-45de-b9fa-e573cf01ae40","57f52cf9-e670-4b51-82ab-1b51484be71b"],"propsByKey":{"fb1d2f15-881e-4a39-83e7-887875f51187":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"__kSiq2DOm1Nt8ePVB_0JQKQJ2JYaLFm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/fb1d2f15-881e-4a39-83e7-887875f51187.png"},"7f7b8399-3d74-4b7f-9181-608bb5f355b9":{"name":"jammy","sourceUrl":null,"frameSize":{"x":202,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ukv45Dczl6HyuuWPf51xT57N4MZJN2KD","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":202,"y":400},"rootRelativePath":"assets/7f7b8399-3d74-4b7f-9181-608bb5f355b9.png"},"bc5be2e2-982e-4202-9634-bdc86e4d3bb3":{"name":"jimmy","sourceUrl":null,"frameSize":{"x":202,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wcw8CArp6PnGxF0coIQLSMCk8su26B0v","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":202,"y":400},"rootRelativePath":"assets/bc5be2e2-982e-4202-9634-bdc86e4d3bb3.png"},"cd742769-26a0-469a-a5ce-8ce0ab2c2140":{"name":"puck","sourceUrl":null,"frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":12,"version":"RxbAQ4HnTXgT0pApsgxHF0XaOp.321M0","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/cd742769-26a0-469a-a5ce-8ce0ab2c2140.png"},"98f3f136-6c5b-499c-a5f0-bf34bd600096":{"name":"shell_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uACFOKDGsd6IOtUpxGv8AGUtQSmQ8O2B/category_aquatic_objects/shell_11.png","frameSize":{"x":400,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"uACFOKDGsd6IOtUpxGv8AGUtQSmQ8O2B","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uACFOKDGsd6IOtUpxGv8AGUtQSmQ8O2B/category_aquatic_objects/shell_11.png"},"ffb56946-7116-46a0-ad58-a4bf3424f1b4":{"name":"shell_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5CUYBGXNcI0Kmoz7MTCJejm7EgWoi.XI/category_aquatic_objects/shell_01.png","frameSize":{"x":398,"y":317},"frameCount":1,"looping":true,"frameDelay":2,"version":"5CUYBGXNcI0Kmoz7MTCJejm7EgWoi.XI","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":317},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5CUYBGXNcI0Kmoz7MTCJejm7EgWoi.XI/category_aquatic_objects/shell_01.png"},"ec7645c2-9185-45de-b9fa-e573cf01ae40":{"name":"shell_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NTNKpyYK1gmKyDyFuWsYRZRz88609Ula/category_aquatic_objects/shell_04.png","frameSize":{"x":389,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"NTNKpyYK1gmKyDyFuWsYRZRz88609Ula","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NTNKpyYK1gmKyDyFuWsYRZRz88609Ula/category_aquatic_objects/shell_04.png"},"57f52cf9-e670-4b51-82ab-1b51484be71b":{"name":"goal ","sourceUrl":null,"frameSize":{"x":395,"y":331},"frameCount":1,"looping":true,"frameDelay":12,"version":"MlQzk7MMb3vKwuPOOxZxziKbCKqFKlsb","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":331},"rootRelativePath":"assets/57f52cf9-e670-4b51-82ab-1b51484be71b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;
var Score = 0;
var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("blue");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("blue");

// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "red";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "red";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "red";
var boundary4 = createSprite(400,200,10,400);

boundary4.shapeColor = "red";
playSound("assets/category_background/eerie_beginnings.mp3",true);



 
 //  creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.setAnimation("puck");
striker.scale=0.1;
var playerMallet = createSprite(200,50,50,10);
playerMallet.setAnimation("jimmy");
playerMallet .scale=0.2;
var computerMallet = createSprite(200,350,50,10);
computerMallet.setAnimation("jammy");
computerMallet.scale=0.2;

//score variables
var playerScore=0;
var compScore=0;

function draw(){
  //clear the screen
  background("white");

  //display the compScore  and playerScore
  textSize(18);
  fill("red");
  text(compScore,23,225);
  text(playerScore,25,160);

  
  // display Score text
  
     if(striker.isTouching(goal1))
      { //increase the score of the player
        compScore = compScore+1;
        //use show grid to identify the  value of x and y to bring striker to center
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
      if(striker.isTouching(goal2))
      {//increase the score of the computer
        playerScore = playerScore+1;
        //Reset the striker by adding center value of x and y 
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
   
      if(playerScore===5 || compScore===5)

      {
        fill("maroon");
        textSize(18);
        //add the text for GameOver
        text("GameOver",170,160);
      }
 
 
  //make the player paddle move with the Arrow keys
  paddleMovement();
  
  
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;

  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  //serve the striker when space is pressed
  if (keyDown("space")) {
    serve();
  }
  
 
  drawSprites();
  
  }
    
  




























function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  } 
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
