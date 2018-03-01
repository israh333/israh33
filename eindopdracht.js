function Obstakel(_xSpeed){
  this.y = Math.floor(Math.random() * 599);
  this.x = 600;
  this.xSpeed = _xSpeed
  this.straal = 32;

  this.move = function(){
    this.x -= this.xSpeed;

  }

  this.show = function(){
    fill(0);
    ellipse(this.x, this.y, this.straal, this.straal);
    image(player_img1, this.x - this.straal, this.y - this.straal, 64, 64);
  }


  this.check = function(){
    if (this.x < 0){
      this.x = 1300;
    if (this.x = 1300){
      this.y = Math.floor(Math.random() * 599);
    }



    }
  }
}

function Speler(){
  this.y = height;
  this.x = 400;
  this.straal = 32;


  this.velocity = 0;
  this.lift = -21;
  this.gravity = 0.6;

  this.show = function(){
    fill(0);
    ellipse(this.x, this.y, this.straal, this.straal);
    image(player_img, this.x - this.straal, this.y - this.straal, 64, 64);
  }
  this.up = function(){
    this.velocity += this.lift;
  }
  this.update = function(){
    this.velocity += this.gravity
    this.velocity *= 0.9;
    this.y += this.velocity;

      if (this.y > height - this.straal){
          this.y = height - this.straal;
          this.velocity = 0;
      }

      if (this.y < this.straal){
          this.y = this.straal;
          this.velocity = 0;
      }
  }

}
