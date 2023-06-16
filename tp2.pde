
// LINK:

//ACLARACIONES: INTERACTUAMOS CON EL PROGRAMA AL TOCAR
//LA BARRA ESPACIADORA Y AL DESPLAZAR EL MOUSE A LO ANCHO.
//PARA REINICIAR LAS VARIABLES, DEBEMOS PRESIONAR
//LA TECLA ´r´.



//IMAGEN DE REFE
PImage refe ;

//VARIABLES GLOBALES
//interactivas
color colordefault, bg, bg1;

//no interactivas
float colorlinea = 0;



void setup () {

  size (800, 400);

  //REFERENCIA
  refe = loadImage ("opcion4.jpg");

  //ASIGNACIÓN VARIABLES INTERACTIVAS
  colordefault = color (40, 57, 103);
  bg = colordefault ;
  bg1 = colordefault ;

  //frameRate (1);
}

void draw () {

  //REFERENCIA
  image(refe, 0, 0, 400, 400);

  //FONDO
  pushMatrix ();
  translate (400, 0);

  //DEGRADE ByN DEL FONDO
  for (int x = 0; x < (width/2); x++) {
    stroke (colorlinea);
    strokeWeight (10);
    line ( x, 0, x, height) ;
    colorlinea+=0.5;
  }

  //RESETEO VALOR DE COLORLINEA
  if (colorlinea >= 200) {
    colorlinea = 0;
  }


  //FONDO: GRILLA DE FORMASDUO
  fill (bg);
  for (int x = 0; x < 15; x++) {
    for (int y = 0; y <23; y++) {
      formasDuo (x*33, y*18);
    }
  }

  //FIN DEL FONDO
  popMatrix();

  // ------------------------> FIN DE MATRIZ 1


  //CUADRADO CENTRAL DELANTERO
  pushMatrix ();
  translate (width-(width/4), height/2);
  rotate ( radians (rotacion(mouseX)));

  fill (bg1);
  cuadCent ();

  popMatrix();
  
}

void keyPressed () {

  if (key == ' ') {
    bg = valorColor1 ();
    bg1 = valorColor2 ();
  }

  if (key == 'r') {
    colordefault = color (40, 57, 103);
    bg = colordefault ;
    bg1 = colordefault ;
  }
}
