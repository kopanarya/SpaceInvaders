class SpaceShip{
    constructor(xPos, yPos, health, selectedPlayer, gameBoard, missileNumbers){
        this.xPos = xPos
        this.yPos = yPos
        this.selectedPlayer = selectedPlayer
        this.health = health
        this.gameBoard = gameBoard
        this.bulletPos = []
        this.playerWidth = 100
        this.playerHeight = 100
        this.missileNumbers = missileNumbers
    }
    // When Spaceship moves left
    movesLeft(){
      if( this.xPos > 5){
        this.xPos -= 20
      
        this.selectedPlayer.style.left = this.xPos + "px" 
      }else{
        this.xPos = 5

        this.selectedPlayer.style.left = this.xPos + "px" 
      }
    }
    // When Spaceship moves right
    movesRight(){
        
      if( this.xPos < 1285 ){
        this.xPos += 20
      
        this.selectedPlayer.style.left = this.xPos + "px" 
      }else{
        this.xPos = 1285
        this.selectedPlayer.style.left = this.xPos + "px"  
      }
     
    }
    // When Spaceship moves down
    movesDown(){
       if( this.yPos < 720 ){
        this.yPos += 20
        this.selectedPlayer.style.top = this.yPos + "px" 
       }else{
        this.yPos = 720
        this.selectedPlayer.style.top = this.yPos + "px" 
       }
      
    }
    // When Spaceship moves up
    movesUp(){
      if( this.yPos > 5 ){
        this.yPos -= 20
        this.selectedPlayer.style.top = this.yPos + "px"
      }else{
        this.yPos = 5
        this.selectedPlayer.style.top = this.yPos + "px"
      }
     
    }
    // When Spaceship moves up-left 
    movesUpLeft(){
        if( this.yPos > 5   && this.xPos > 5 ){

            this.yPos -= 15
         
        
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos -= 20
            this.selectedPlayer.style.left = this.xPos + "px"
        }
        else if(this.yPos > 5 && this.xPos < 5){

            this.yPos -= 20
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos = 5
            this.selectedPlayer.style.left = this.xPos + "px" 
        }
        else if( this.yPos < 5 && this.xPos > 5){
            this.yPos = 5
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos -= 20
            this.selectedPlayer.style.left = this.xPos + "px"
        }
        else if( this.yPos < 5 && this.xPos < 5 ){
            this.xPos = 5
            this.selectedPlayer.style.left = this.xPos + "px" 
            this.yPos = 5
            this.selectedPlayer.style.top = this.yPos + "px"
        }
    }
    // When Spaceship moves up-right
    movesUpRight(){

        if( this.yPos > 5 && this.xPos < 1300  ){
            this.yPos -= 20
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos += 20
            this.selectedPlayer.style.left = this.xPos + "px" 
        }
        else if( this.yPos > 5 && this.xPos > 1300){
            this.yPos -= 15
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos = 1290
            this.selectedPlayer.style.left = this.xPos + "px"  
        }
        else if( this.yPos < 5 && this.xPos < 1300 ){
            this.yPos = 5
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos += 20
            this.selectedPlayer.style.left = this.xPos + "px" 
        }
        else if( this.yPos < 5 && this.xPos > 1300 ){
            this.yPos = 5
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos = 1300
            this.selectedPlayer.style.left = this.xPos + "px"  
          }
    }
    // When Spaceship moves down-left
    movesDownLeft(){
        if( this.yPos < 720 && this.xPos > 5 ){
            this.xPos -= 20
            this.selectedPlayer.style.left = this.xPos + "px" 
            this.yPos += 20
            this.selectedPlayer.style.top = this.yPos + "px" 
        }
        else if(this.yPos < 720 && this.xPos < 5){
            this.yPos += 20
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos = 5
            this.selectedPlayer.style.left = this.xPos + "px" 
        }
        else if(this.yPos > 720 && this.xPos > 5){

            this.yPos = 720
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos -= 20
            this.selectedPlayer.style.left = this.xPos + "px" 
        }
        else if( this.yPos > 720 && this.xPos < 5){
            this.xPos = 5
            this.selectedPlayer.style.left = this.xPos + "px" 
            this.yPos = 720
            this.selectedPlayer.style.top = this.yPos + "px" 
        }
    }
    // When Spaceship moves down-right
    movesDownRight(){
        if( this.yPos < 720 &&  this.xPos < 1300  ){
            this.yPos += 20
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos += 20
            this.selectedPlayer.style.left = this.xPos + "px" 
        }
        else if( this.yPos < 720 &&  this.xPos > 1300 ){
            this.xPos = 1300
            this.selectedPlayer.style.left = this.xPos + "px"
            this.yPos += 20
            this.selectedPlayer.style.top = this.yPos + "px"
            
        }
        else if( this.yPos > 720 &&  this.xPos < 1300 ){
            this.xPos += 20
            this.selectedPlayer.style.left = this.xPos + "px"
            this.yPos = 720
            this.selectedPlayer.style.top = this.yPos + "px"
        }
        else if( this.yPos > 720 && this.xPos > 1300 ){
            this.yPos = 720
            this.selectedPlayer.style.top = this.yPos + "px"
            this.xPos = 1300
            this.selectedPlayer.style.left = this.xPos + "px"  
        }
    }
    createBullet(isSuperBomb){
      const  leftMissile = document.createElement('div')
      const  rightMissile = document.createElement('div')
      let leftX = this.xPos - 5
      let rightX = this.xPos + 80
      let yPos = this.yPos + 15
      let imageName 
      if(isSuperBomb){
          imageName = "super-bomb.png"
      }
      else{
        imageName = "bullet.png"
      }
      leftMissile.style.cssText="width:30px;height:30px;background-image:url('/assets/images/"+imageName +"');background-size:cover;top:"+yPos+"px;left:"+leftX+"px;position:absolute;"
      rightMissile.style.cssText="width:30px;height:30px;background-image:url('/assets/images/"+imageName +"');background-size:cover;top:"+yPos+"px;left:"+rightX+"px;position:absolute;"
      const leftBullet = new Bullet(leftX, yPos, leftMissile)
      const rightBullet = new Bullet(rightX, yPos, rightMissile)
      this.bulletPos.push(rightBullet)
      this.bulletPos.push(leftBullet)
      this.gameBoard.appendChild(leftMissile)
      this.gameBoard.appendChild(rightMissile)
     
    }
    //When Spaceship fire its gun.
    fireBullet(){
        this.bulletPos.map(bul => {
            bul.moveUp()
        })
       return this.bulletPos
    }
    clearBullet(bullet, index){
     
        this.bulletPos[index].targetElement.style.backgroundImage ="url('/assets/images/spaceship-bomb.png')"
        let selectedBullet = this.bulletPos[index]
        this.bulletPos.splice(index, 1)
        
        setTimeout(() => {
            selectedBullet.targetElement.style.display = "none"
          
        },50)
      
       
    }
    stopBullets(){
        this.bulletPos.map(bul => {
            bul.moveNot()
        })
    }
}