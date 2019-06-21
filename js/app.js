// function for enemy to set initial pasition position and speed
var Enemy = function(x,y,speed) {
    this.x=0;
    this.y=y;
    this.speed=speed;
 // lets you create animations and games using sprites in an efficient way
    this.sprite = 'images/enemy-bug.png';
  };
// function for player to set initial positions
  var Player=function(x,y) {
  this.x=200;
  this.y=390;
  this.sprite = 'images/char-pink-girl.png';
  };
// creating the object for player
var player=new Player();
Enemy.prototype.update = function(dt) {
//     updating the x position of the bug according to the speed of the bug
      this.x=this.x+this.speed*dt;
      if(this.x>500){
// if bug moves to right-most end then it is set to its initial position
        this.x=0;
        speed=40*Math.floor(Math.random()*100);
      }
      if (player.x < this.x + 70  && player.x +70  > this.x && player.y < this.y + 75 && player.y + 65 > this.y) {

      swal("Alas! You Lost");
      player.x=200;
      player.y=400;
    }
};
// update function for player which gets updated for every move
Player.prototype.update = function(dt) {};
// function for drawing the new position of the player
Player.prototype.render = function() {
//     drawImage() method draws an image, canvas, or video onto the canvas
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// empty array to place bugs
var allEnemies = [];
// array to set position for each bug
var enemyPosition=[80,150,220];
// array to set speeds for each bug
var speeds=[100,80,130];
// for loop to set each bug in action by giving inital positions and speeds
for(var i in enemyPosition){
  var enemy=new Enemy(0,enemyPosition[i],speeds[i]);
//     pushing each enemy bug into the array
  allEnemies.push(enemy);
}
// creating the handleInput function
player.handleInput=function(pm){
    if(pm==='left'&& this.x>0){
      console.log("Left");
      this.x= this.x-100;
    }
    else if(pm==='right'&& this.x<390){
      console.log("Right");
      this.x= this.x+100;
    }
    else if(pm==='up'&& this.y>25){
      console.log("up");
      this.y= this.y-100;
      console.log(this.y);
    }
    else if(pm==='down'&& this.y<390) {
      console.log("down");
      this.y= this.y+100;
      console.log(this.y);
    }
    if(this.y<60){
      swal({
        html:true,
        title:"You Won",
        type:'success',
      //  imageUrl:"./images/congobg2.gif",
        confirmButtonText: 'Do you want to Play again'},
        function(){
          location.reload()
        }
);
}
}
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
