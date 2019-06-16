var Enemy = function(x,y,speed) {
    this.x=0;
    this.y=y;
    this.speed=speed;
    this.sprite = 'images/enemy-bug.png';
    console.log("Enemy");
  };
  var Player=function(x,y) {
    //fixing the initial position for player
  this.x=200;
  this.y=390;
  this.sprite = 'images/char-pink-girl.png';
  };
var player=new Player();
Enemy.prototype.update = function(dt) {
      this.x=this.x+this.speed*dt;
      if(this.x>500){
        this.x=0;
        speed=40*Math.floor(Math.random()*100);
      }
      if (player.x < this.x + 70  && player.x +70  > this.x && player.y < this.y + 75 && player.y + 65 > this.y) {

      swal("Alas! You Lost");
      player.x=200;
      player.y=400;
    }
};
Player.prototype.update = function(dt) {};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var allEnemies = [];
var enemyPosition=[80,150,220];
var speeds=[100,80,130];
for(var i in enemyPosition){
  var enemy=new Enemy(0,enemyPosition[i],speeds[i]);
  allEnemies.push(enemy);
}
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
