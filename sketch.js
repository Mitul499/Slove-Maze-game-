var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var wallGroup,virusGroup,playerGroup;
var life=3;
var Vaccine;
var flag=0;
function preload(){
greenVirus=loadImage("greenVirus.png")
redVirus=loadImage("red virus.png")
}
function setup(){
    createCanvas(1000,650); 
    //To use angle in Degrees
    wallGroup=new Group();
    wall1=new Maze(500,15,900,15)
    wall2=new Maze(45,320,15,625)
    wall3=new Maze(955,320,15,625)
    wall4=new Maze(238,630,400,15)
    wallf5=new Maze(762,630,400,15)
    wall6=new Maze(100,270,15,382)
    wall7=new Maze(500,570,815,15)
    wall8=new Maze(100,540,15,60)
    wall9=new Maze(900,540,15,70)
    wall10=new Maze(900,270,15,382)
    wall11=new Maze(400,75,614,15)
    wall12=new Maze(857,75,100,15)
    wall13=new Maze(500,155,600,15)
    wall14=new Maze(600,120,15,75)
    wall15=new Maze(800,168,15,40)
    wall16=new Maze(200,180,15,65)
    wall17=new Maze(200,310,15,100)
    wall18=new Maze(150,280,100,15)
    wall19=new Maze(200,450,15,100)
    wall20=new Maze(253,500,120,15)
    wall21=new Maze(253,540,15,75)
    wall22=new Maze(600,500,400,15)
    wall23=new Maze(800,373,15,270)
    wall24=new Maze(850,350,100,15)
    wall25=new Maze(930,300,50,15)
    wall26=new Maze(230,320,70,15)
    wall27=new Maze(265,330,15,225)
    wall28=new Maze(527,445,540,15)
    wall29=new Maze(730,410,15,60)
    wall30=new Maze(730,285,15,100)
    wall31=new Maze(535,230,405,15)
    wall32=new Maze(435,230,355,15)
    wall33=new Maze(490,280,355,15)

    wall34=new Maze(660,325,15,100)
    wall35=new Maze(319,325,15,100)
    wall36=new Maze(290,300,50,15)

    wall37=new Maze(382,375,140,15)
    wall38=new Maze(598,375,140,15)

    playerGroup=new Group();
    player1=new NonPlayerCharacter(70,480,2,0);
    player2=new NonPlayerCharacter(130,155,0,2)
   player3=new NonPlayerCharacter(300,60,-2,0)
    //player4=new NonPlayerCharacter(750,120,0,2)
   player5=new NonPlayerCharacter(340,500,0,2)
    player6=new NonPlayerCharacter(300,260,2,0)
    player7=new NonPlayerCharacter(340,330,-2,0)
    player8=new NonPlayerCharacter(200,600,2,0)
    player9=new NonPlayerCharacter(850,500,0,-2)
    player10=new NonPlayerCharacter(300,200,-2,0)
    
    player=createSprite(500,630,20,20)
    player.shapeColor="blue"
    
    
   virus1=createSprite(750,120,20,20);
    virus1.velocityY=2;
    virus1.shapeColor="red";
    virus2=createSprite(400,550,20,20);
    virus2.shapeColor="red"
    virus2.velocityX=-2
    
   // virus2=new NonPlayerCharacter(300,255)
    virusGroup= new Group();
    virusGroup.add(virus1);
    virusGroup.add(virus2);
    virus1.addImage(redVirus)
    virus2.addImage(redVirus)
    virus1.scale=0.035
    virus2.scale=0.035
    Vaccine=createSprite(480,320,30,30);



    
   

    


    

    
    

  
   

}


function draw(){
    background(0);
    drawSprites();

    player1.display()
    player2.display()
    player3.display()
    //player4.display()   
    player5.display()
    player6.display()
    player7.display()
    player8.display()
    player9.display()
    player10.display()
    if(keyDown(LEFT_ARROW)){
        player.x=player.x-6;
    }
    
    if(keyDown(RIGHT_ARROW)){
        player.x=player.x+6;
    }

    if(keyDown(UP_ARROW)){
        player.y=player.y-6;
    }
    if(keyDown(DOWN_ARROW)){
        player.y=player.y+6;
    }
    player.bounceOff(wallGroup);
    virus1.bounceOff(wallGroup);
    virus2.bounceOff(wallGroup);

    if(player.isTouching(Vaccine)){
        
        flag=1;
        player1.stop();
        player2.stop();
        player3.stop();
        player5.stop();
        player6.stop();
        player7.stop();
        player8.stop();
        player9.stop();
        player10.stop();
        
       
        

       
    }

    if(flag==1){
        textSize(15);
        fill("yellow");
        text("You Won",480,320)
       // playerGroup.setVelocityXEach=0;
        //playerGroup.setVelocityYEach=0;
        
       // player4.velocityY=0;
        //player4.velocityX=0;
        virus1.velocityX=0
        virus1.velocityY=0
        virus2.velocityX=0
        virus2.velocityY=0

    }



    /*wallGroup.bounceOff(wall1)
    wallGroup.add(wall2)
    wallGroup.bounceOff(wall3)
    wallGroup.bounceOff(wall4)
    wallGroup.bounceOff(wall5)
    wallGroup.add(wall6)
    wallGroup.add(wall7)
    wallGroup.add(wall8)
    wallGroup.add(wall9)
    wallGroup.add(wall10)
    wallGroup.add(wall11)
    wallGroup.add(wall12)
    wallGroup.add(wall13)
    wallGroup.add(wall14)
    wallGroup.add(wall15)
    wallGroup.add(wall16)
    wallGroup.add(wall17)
    wallGroup.add(wall18)
    wallGroup.add(wall19)
    wallGroup.add(wall20)
    wallGroup.add(wall21)
    wallGroup.add(wall22)
    wallGroup.add(wall23)
    wallGroup.add(wall24)
    wallGroup.add(wall25)
    wallGroup.add(wall26)
    wallGroup.add(wall27)
    wallGroup.add(wall28)
    wallGroup.add(wall29)
    wallGroup.add(wall30)
    wallGroup.add(wall31)
    wallGroup.add(wall32)
    wallGroup.add(wall33)
    wallGroup.add(wall34)
    wallGroup.add(wall35)
    wallGroup.add(wall36)
    wallGroup.add(wall37)
    wallGroup.add(wall38)*/





    

    if(player.isTouching(virusGroup)){
        life=life-1;
        player.x=500;
        player.y=650;
        
    }
    text("Lives left: "+life,20,30)

    if(life==0){

        textSize(15);
        fill("yellow");
        text('GameOver',500,425)
        player.destroy();

    }
    



}