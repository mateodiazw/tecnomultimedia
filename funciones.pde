//FUNCIONES

//ELEMENTOS AZULES
void formasDuo (float x, float y) {


  noStroke();

  quad (x, y, x+12, y+4, x+12, y+17, x, y+13);
  quad (x+17, y+4, x+29, y, x+29, y+13, x+17, y+17);
}


//ROTACIÓN P/ CUADRADO PEQUEÑO CENTRAL
float rotacion (float xR) {

  float grados = map (xR, 0, 400, 0, 100);
  return grados;
}


//COLOR INTERACTIVO FONDO
int valorColor1 () {

  color valor1 = color (random(0, 50), random(0, 50), random(50, 200));
  return valor1;
}

//COLOR INTERACTIVO CUADRADO CENTRAL
int valorColor2 () {

  color valor2 = color (random(50, 200), random(0, 50), random(0, 50));
  return valor2;
}

//CUADRADO CENTRAL
void cuadCent () {
 
  translate (0, 0);
  rotate (radians(90));

  float colorlineaFrente = 0;

  for (int i = -100; i < 95; i++) {

    stroke (colorlineaFrente);
    line (-90, i, 105, i);
    colorlineaFrente+=0.7;
  }


  for (float x = -2.7; x <3; x++) {
    for (float y = -5.6; y <4.6; y++) {
      formasDuo (x*33, y*18);
    }
  };
}
