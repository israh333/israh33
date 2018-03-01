var bal2;
var bal;
var player_img;
var i = 0;
var score = 0;

function setup(){
  createCanvas(1300,600);
  pleun = new Speler();
  koekje = new Obstakel(2);

  player_img1 = loadImage("kinker.png");
  player_img = loadImage("koonkjenmoounster.png");
}

function draw(){
  background(255, 255, 255, 50);
  pleun.update();
  pleun.show();
  koekje.move();
  koekje.show();
  koekje.check();

  // botsdetectie
  var dx = pleun.x - koekje.x;
  var dy = pleun.y - koekje.y;
  //console.log("verschil x " + dx);
  //console.log("verschil y " + dy);

  var tussenresultaat = dx*dx + dy*dy;
  var afstand = Math.sqrt(tussenresultaat);
  //console.log(afstand);


  if ((pleun.straal + koekje.straal) < afstand) {
    koekje.splice
  }
}
 function keyPressed() {
   if (key == ' ') {
     pleun.up();

   }
  }
//document.getElementById("teller").innerHTML = score
