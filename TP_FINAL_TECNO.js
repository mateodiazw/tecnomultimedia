let fondo = [];
let hover = [];
let texto = [];
let tipografia;
let fondoJuego, principito, gavilan, vida ;

function preload () {
  for (let i = 0; i < 14; i++) {
    fondo[i] = loadImage("data/p" + i + ".jpg");
  }

  for (let i = 0; i < 22; i++) {
    hover[i] = loadImage("data/h" + i + ".png");
  }

  texto= loadStrings("data/textos.txt");

  tipografia = loadFont('data/tipografia.ttf');

  fondoJuego = loadImage ('data/cielo.PNG');
  principito = loadImage ('data/principito.PNG');
  gavilan = loadImage ('data/gavilan.PNG');
  vida= loadImage ('data/vida.PNG');
}

function setup() {

  createCanvas (600, 600);

  aventura = new Aventura (fondo, texto, fondoJuego, vida, principito, gavilan, hover );
  textFont (tipografia);
  
}


function draw() {

  aventura.estados(fondo);
  
  if (keyIsPressed) {

     this.aventura.actualizarPrinc(keyCode);
  }
}

function mouseClicked () {

 this.aventura.cambioDePantalla();
 
}
