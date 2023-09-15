
//PERDÓN PROFE POR LA EXTENSIÓN DEL VIIDEO, NO PUDE HACERLO
//MÁS CORTO YA QUE QUEDABAN COSAS SIN EXPLICAR

//ENLACE A VIDEO:
//https://youtu.be/mkuQTI3z7l4

//-------------------------------------------->


//pantalla
let pantalla;

// variables de copas y medallas
let imag=[], xC=[], yC=[], xM=[], yM=[], velY;

//marcador
let marc, xMarc, yMarc, puntos;

//cantidad de copas y medllas/frame
let cantC, cantM;

//variables de messi
let xMessi, yMessi;

//carga tipografica con preload
let miFuente;

function preload() {
  miFuente = loadFont('data/mifuente.ttf');
}


function setup() {

  //config de entorno
  createCanvas (600, 600);
  textAlign (CENTER, CENTER);
  pantalla = 0;
  textFont(miFuente);
  fill(50, 50, 100);

  //copas y medallas
  cantC = random (4, 6);
  cantM = random (4, 8);
  velY=12;

  //carga imagenes visuales
  for (let i=0; i < 4; i++) {
    imag[i] = loadImage("data/elemento"+i+".png");
  }

  //carga marcador
  marc = loadImage("data/marcador.png");

  //inicializacion messi
  xMessi = width/2;
  yMessi = 420;

//inicializacion copas y medallas
  inicializarCM();

  //inicializacion Marcador
  xMarc = 520;
  yMarc = 50;
  puntos=0;
}

function draw() {

  if (pantalla == 0) { //HOME

    image (imag[0], 0, 0, 600, 600 );
    background (255, 100);
    textSize (16);


    image (imag[1], 270, 50, 50, 100);

    text('\n AYUDA A MESSI A JUNTAR 10 COPAS \n Y SALI CAMPEON DEL MUNDO ', width/2, height*0.35);
    text('\n\n USA LAS TECLAS ← Y → \n PARA  MOVERTE POR LA PANTALLA ', width/2, height*0.45);
    text('\n \n \n \n ¡CUIDADO LEO! \n LA MEDALLA DE SEGUNDO PUESTO \n ES LETAL: RESTA 1 PUNTO ', width/2, height*0.55);

    botones ('JUGAR', 'CREDITOS');
    
  } else if (pantalla == 1) { //JUEGO

    //fondo
    image (imag[0], 0, 0, 600, 600 );

    //messi
    push();
    translate(xMessi, yMessi);
    image (imag[2], 0, 0, 80, 170);
    pop();

    actualizarCM ();

    moverMessi ();

    colisiones();

    final ();

    dibujarMarcador();
    
  } else if ( pantalla == 2 ) { //TRIUNFO

    image (imag[0], 0, 0, 600, 600 );

    background (255, 100);
    
    textSize (32);
    text('¡FELICITACIONES!', width/2, height*0.4);
    textSize (16);
    text('¡SOS CAMPEON DEL MUNDO!', width/2, height*0.5);

    botones ( 'REINICIAR', 'SALIR');
    
  } else if ( pantalla == 3 ) { //DERROTA

    image (imag[0], 0, 0, 600, 600 );

    background (255, 100);
    
    textSize (32);
    text('UPS :(', width/2, height*0.3);
    textSize (16);
    text('\n\n\n\n ¡TE LO DIJE! ¡CUIDADO! \n \n NO TE DECLARES VENCIDO, TODO LLEGA \n\n ¡ANIMO!', width/2, height*0.4);
    
    botones ( 'REINICIAR', 'SALIR');
    
  } else if ( pantalla == 4 ) { // CREDITOS

    image (imag[0], 0, 0, 600, 600 );
    
    background (255, 100);
    
    textSize (32);
    text('CREDITOS', width/2, height*0.4);
    textSize (16);
    text('\n \n IDEACION, PROGRAMACION \n E ILUSTRACION: \n MATEO DIAZ', width/2, height*0.5);

    botones ('INICIO', 'JUGAR');
  }
}
