class NonPlayerCharacter{
    constructor(x,y,velx,vely){
        this.p=createSprite(x,y,20,20);
        this.p.shapeColor="green";
        this.p.velocityX=velx;
        this.p.velocityY=vely;
        this.p.addImage(greenVirus)
        this.p.scale=0.1
       
    
        
    }
   display(){
       this.p.bounceOff(wallGroup);
       playerGroup.add(this.p);
       if(virusGroup.isTouching(this.p)) {
        this.p.shapeColor="red"
        virusGroup.add(this.p);
        this.p.addImage(redVirus)
        this.p.scale=0.035
       }
       
   }
   stop(){
       this.p.velocityX=0;
       this.p.velocityY=0;
       virusGroup.setVelocityXEach=0
       virusGroup.setVelocityYEach=0 
   }
    
}