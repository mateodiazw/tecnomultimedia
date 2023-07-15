//LINK A VIDEO: https://youtu.be/qALAF_tupV8

//estados
int pantalla = 0;
int pantallaActual =0;

//tipografía
PFont miFuente;


//textos
String [] textos = new String [15];

//variable para boton de volver
int pantallaAnterior;

//fondos de cada estado
PImage [] backgrounds = new PImage [14];

//hover de cada estado
PImage [] hover = new PImage [14];

//botones especiales
PImage [] boton = new PImage [8];


void setup () {
  size (600, 600);
  frameRate (30);

  for ( int i = 0; i < 14; i++ ) {
    backgrounds[i] = loadImage( "p" + i + ".jpg" );
  }

  for ( int i = 0; i < 14; i++ ) {
    hover[i] = loadImage( "hover" + i + ".jpg" );
  }

  for ( int i = 0; i < 8; i++ ) {
    boton[i] = loadImage( "especial" + i + ".png" );
  }

  textos = loadStrings("textos.txt");

  miFuente = createFont ("Jost", 14) ;
  textFont (miFuente);
  textAlign (CENTER);
  textSize (23);
  textLeading (34);
}


void draw () {
  println (pantalla);
  switch (pantalla) {

  case 0: //INICIO

    image (backgrounds[0], 0, 0);

    //quadPrueba (230, 540);
    botonPaloma (200, 490, 0, 1, 195, 40);

    botonEspecial(230, 540, 0, 0, 100, 50);

    botonEspecial (240, 535, 0, 13, 110, 40);


    break;

  case 1: // B612

    image (backgrounds[1], 0, 0);

    botonPaloma (100, 250, 1, 2, 100, 200);

    text(0, 60);

    break;

  case 2: // VIAJANDO

    image (backgrounds[2], 0, 0);
    //volver (1);
    //PLANETA ROJO
    botonPlaneta (330, 220, 3, 3);


    //PLANETA AMARILLO
    botonPlaneta (455, 315, 2, 4);

    text(1, 40);

    break;

  case 3: //  REY

    image (backgrounds[3], 0, 0);
    //volver (2);

    botonPaloma (50, 300, 4, 5, 100, 200);

    pantallaAnterior= 3;

    text(2, 40);

    break;

  case 4: // VANIDOSO

    image (backgrounds[4], 0, 0);
    // volver (2);

    pantallaAnterior= 4;

    botonPaloma (40, 280, 5, 5, 100, 200);

    fill (10, 200);

    text(3, 20);

    break;

  case 5: // VIAJANDO

    image (backgrounds[5], 0, 0);
    //volver ();

    //circuloPrueba (420, 425);

    //NEBULOSA AMARILLA: A FINAL 1
    botonPlaneta (290, 300, 6, 6);

    //NEBULOSA VERDE: A PLANETA TIERRA
    botonPlaneta (470, 255, 7, 7);

    //NEBULOSA VIOLETA: A PLANETA GEÓGRAFO
    botonPlaneta (420, 425, 8, 8);
    //volver(pantallaAnterior);

    text(4, 40);

    break;

  case 6: //FINAL 1

    image (backgrounds[6], 0, 0);
    botonEspecial (300, 505, 6, 0, 80, 50);
    botonEspecial (380, 505, 5, 13, 100, 50);
    //quadPrueba(380, 500);

    text(5, 100);

    break;

  case 7: // DIVISA LA TIERRA

    image (backgrounds[7], 0, 0);

    //circuloPrueba (380, 325);

    //NEBULOSA AMARILLA: A FINAL 1
    botonPlaneta (380, 325, 9, 9);

    text(6, 120);

    break;

  case 8: // DIVISA ASTEROIDE

    image (backgrounds[8], 0, 0);
    //circuloPrueba (380, 325);
    botonPlaneta (380, 325, 10, 10);

    text(7, 120);

    break;

  case 9: // AVIADOR Y ELECCIÓN

    image (backgrounds[9], 0, 0);

    botonPaloma (450, 200, 11, 12, 100, 300);


    botonPaloma (90, 220, 12, 11, 150, 300);
    //quadPrueba(100, 200);

    text(8, 20);

    break;

  case 10: // GEOGRAFO

    image (backgrounds[10], 0, 0);
    //quadPrueba(55, 270);
    botonPaloma (55, 270, 13, 12, 100, 200);

    text(9, 20);

    break;

  case 11: // FINAL 2: VIVIENDO EN LA TIERRA

    image (backgrounds[11], 0, 0);
    botonEspecial (210, 545, 4, 0, 70, 20);
    botonEspecial (300, 545, 7, 13, 120, 20);
    // quadPrueba(220, 550);

    text(10, 20);

    break;

  case 12: // FINAL 3: VOLVIENDO A B612

    image (backgrounds[12], 0, 0);

    botonEspecial (270, 535, 1, 0, 80, 40);
    botonEspecial (365, 535, 2, 13, 110, 40);
    //quadPrueba(360, 530);

    text(11, 110);

    break;

  case 13: // CREDITOS

    image (backgrounds[13], 0, 0);
    botonEspecial (260, 520, 3, 0, 110, 40);
    //quadPrueba(260, 520);

    text(12, 100);
    text(13, 200);
    text(14, 300);

    break;


  default: // AVISO DE ERROR

    break;
  }
}

void mouseClicked () {
  pantalla = pantallaActual;
}
