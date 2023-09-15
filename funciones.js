
function inicializarCM () {
  
  //COPAS
  for ( let i=0; i<cantC; i++ ) {
    xC[i] = random( -50, width-100 );
    yC[i] = random(-700, -300);
  }

  //MEDALLAS
  for ( let i=0; i<cantM; i++ ) {
    xM[i] = random( -50, width-80 );
    yM[i] = random(-1000, -500);
  }
  
}

function dibujarCM () {
  
  //COPAS
  for ( let i=0; i<cantC; i++ ) {
    push ();
    translate(xC[i], yC[i]);
    image (imag[1], 0, 0, 50, 100);
    pop();
  }

  //MEDALLAS
  for ( let i=0; i<cantM; i++ ) {
    push ();
    translate(xM[i], yM[i]);
    image (imag[3], 0, 0, 50, 80);
    pop();
  }
  
}

function moverCM() {

  //COPAS
  for ( let i=0; i<cantC; i++ ) {
    
    //comportamiento de movimiento
    yC[i]+=velY;
    
    //limites:
    if ( yC[i] >= random(1000, 1200)) {
      yC[i] = -300;
      xC[i]= random( 0, width-100 );
    }
    
  }

  //MEDALLAS
  for ( let i=0; i<cantM; i++ ) {
    
    //comportamiento de movimiento
    yM[i]+=velY;
    
    //limites:
    if ( yM[i] >= random(1000, 1200)) {
      yM[i] = -300;
      xM[i]= random( 0, width-100 );
    }
  }
}

function actualizarCM () {
  moverCM();
  dibujarCM();
}


function moverMessi () {

  if (keyIsPressed) {

    if ( keyCode == LEFT_ARROW && xMessi > 0) {
      xMessi-= 4;
    }
    if ( keyCode == RIGHT_ARROW && xMessi < width-80 ) {
      xMessi +=4;
    }
    
  }
}

function colisiones() {
  
  //COPAS
  for ( let i=0; i<cantC; i++ ) {
    if ( dist(xMessi, yMessi, xC[i], yC[i])< 70 ) {
      //hay colision:
      puntos+=1;
      yC[i]= 700;
    }
  }
  
  //MEDALLAS
  for ( let i=0; i<cantM; i++ ) {
    if ( dist(xMessi, yMessi, xM[i], yM[i])< 70) {

      //hay colision:
      puntos-=1;
      yM[i]= 700;
    }
  }
  
}

function dibujarMarcador () {
  push ();
  translate(xMarc, yMarc);
  imageMode (CENTER);
  textSize (26);
  fill(255);
  image (marc, 0, 0, 100, 60);
  text (puntos, 0, 0 );
  pop();
}

function final () {

  if (puntos >= 10) {
    pantalla = 2;
  } else if (puntos <= -1) {
    pantalla =3;
  }
  
}


function botones ( texto1, texto2) {
  
  push ();
  translate (width/2, 500);

  imageMode (CENTER);
  textSize (14);

  //boton 1
  image (marc, -150, 0, 150, 60);
  text(texto1, -150, 0);

  //boton 2
  image (marc, 150, 0, 150, 60);
  text(texto2, 150, 0);

  pop();
  
}

function mouseClicked () {

  if ( pantalla == 0) {

    if (mouseX > 80 && mouseX < 220
      && mouseY > 475 && mouseY < 535) {
      pantalla = 1;
      puntos = 0;
      inicializarCM ();
    } else if (mouseX > 380 && mouseX < 520
      && mouseY > 475 && mouseY < 535) {
      pantalla = 4;
      puntos = 0;
    }
    
  } else if ( pantalla == 2 ||  pantalla == 3) {

    if (mouseX > 80 && mouseX < 220
      && mouseY > 475 && mouseY < 535) {
      pantalla = 1;
      puntos = 0;
      inicializarCM ();
    } else if (mouseX > 380 && mouseX < 520
      && mouseY > 475 && mouseY < 535) {
      pantalla = 0;
      puntos = 0;
    }
    
  } else  if ( pantalla == 4) {

    if (mouseX > 80 && mouseX < 220
      && mouseY > 475 && mouseY < 535) {
      pantalla = 0;
      puntos = 0;
    } else if (mouseX > 380 && mouseX < 520
      && mouseY > 475 && mouseY < 535) {
      pantalla = 1;
      puntos = 0;
      inicializarCM ();
    }
  }
}
