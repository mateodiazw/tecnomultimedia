//VIDEO: 
//https://youtu.be/HgtZJMH9Mzg

let juego;
let fondo, principito, gavilan, vida, miFuente;

function setup() {

  createCanvas( 600, 600 );

  juego = new Juego(fondo, vida, principito, gavilan);

//config esteticas
  textAlign (CENTER);
  textFont(miFuente);
  textLeading (25);
}


function draw() {
  //background (200);

  juego.dibujar();

  juego.actualizar();

  if (keyIsPressed) {

    juego.interaccionPrincipito(keyCode);
  }
}

function preload () {

  fondo = loadImage ('data/cielo.PNG');
  principito = loadImage ('data/principito.PNG');
  gavilan = loadImage ('data/gavilan.PNG');
  vida= loadImage ('data/vida.PNG');

  miFuente = loadFont('data/mifuente.ttf');
}
