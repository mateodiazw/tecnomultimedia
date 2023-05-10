
color celeste, azul, amarillo, marron, colorBoton, colorSombra ;

int pantalla;

int x, y, d; //UBICACIÓN BOTÓN INICIO
float distancia; //UBICACIÓN BOTÓN INICIO

int marcaTiempo, difTemporal;

PImage pantalla5, pantalla4, pantalla3, pantalla2, pantalla1;

//PANTALLA 1: TEXTO
int textX, textY;
boolean izquierda, arriba;

//PANTALLA 2: TEXTO
float transparencia;

//PANTALLA 3: TEXTO
float primerRengX, segRengX;

//PANTALLA 4: TEXTO
float primerRengY, segRengY;
int alpha1, alpha2, alpha3;


//PANTALLA 5: BOTON
float yBotonFinal;

void setup () {
  size (640, 480);
  background (celeste);

  //CONFIG POR DEFAULT

  pantalla = 0;
  textAlign (CENTER, CENTER);

  //COLORES
  celeste = color(28, 123, 198);
  azul = color(9, 88, 126);
  amarillo = color(229, 188, 19);
  marron = color(188, 130, 13);
  colorBoton = color(250);
  colorSombra = color(209, 151, 4);


  //BOTON INICIO
  x = 640/2;
  y = 480 - 480/3;
  d= 100;


  //IMAGENES
  pantalla5 = loadImage ("pantalla5.jpg");
  pantalla4 = loadImage ("pantalla4.png");
  pantalla3 = loadImage ("pantalla3.png");
  pantalla2 = loadImage ("pantalla2.jpg");
  pantalla1 = loadImage ("pantalla1.jpg");

  //PANTALLA 1: TEXTO
  textX = 200;
  textY = 50;

  //PANTALLA 2: TEXTO
  transparencia = 0;

  //PANTALLA 3: TEXTO
  primerRengX = 900;
  segRengX = -300;

  //PANTALLA 4: TEXTO
  primerRengY = -50;
  segRengY = -50;
  alpha1 = 255;
  alpha2 = 255;
  alpha3 = 0;

  //PANTALLA 5
  yBotonFinal= height/3;
}

void draw () {


  difTemporal = millis () - marcaTiempo;
  /*println ("diferencia temporal " + difTemporal);
   println ("millis " + millis());
   println ("marca en el tiempo " +marcaTiempo);
   println ("pantalla " + pantalla);*/

  if ( pantalla == 0) { // PANTALLA 0

    textSize (30);

    background (celeste);

    circle (x, y, d); //BOTÓN PARA INICIAR

    text ( "PRESIONE EL BOTÓN \n PARA SABER MÁS SOBRE \n EL HORNERO ARGENTINO",
      640/2, 480/3); //TEXTO DE BIENVENIDA

    distancia = dist(x, y, mouseX, mouseY);

    if ( distancia <= d/2) { //MOUSEOVER

      fill (colorBoton);
      circle (x-7, y-7, d); //BOTON DE MOUSEOVER

      text ( "PRESIONE EL BOTÓN \n PARA SABER MÁS SOBRE \n EL HORNERO ARGENTINO",
        (640/2)-2, (480/3)-2);

      fill (colorSombra);

      if (mousePressed) { //MOUSEPRESSED

        pantalla = 1; //CAMBIO DE PANTALLA
        marcaTiempo = millis ();
      }
    } else {
      fill (colorBoton); //COLOR DE BOTÓN CUANDO NO(!!) ESTA OVER
      noStroke ();
    }

    // FIN PANTALLA 0
  } else if ( pantalla == 1) { // PANTALLA 1

    textSize (30);

    image (pantalla1, -200, 0, 853, 480);
    fill (0, 70);
    rect (0, 0, 640, 480);


    fill (azul);
    text ("Es un pájaro pequeño que mide \n entre 16 y 23 cm de longitud.", textX, textY);

    fill (250);
    text ("Es un pájaro pequeño que mide \n entre 16 y 23 cm de longitud.", textX-2, textY-2);


    if (textX >= 440) {
      izquierda = true;
    } else if (textX <=200) {
      izquierda = false;
    }

    if (izquierda) {
      textX-=2;
    } else {
      textX+=2;
    }

    if (textY >= 420) {
      arriba = true;
    } else if ( textY <= 30) {
      arriba = false;
    }

    if (arriba) {
      textY-=2;
    } else {
      textY+=2;
    }





    if (difTemporal >= 6000) {
      pantalla = 2;
      marcaTiempo = millis ();
    }


    //FIN PANTALLA 1
  } else if (pantalla == 2) { // PANTALLA 2

    image (pantalla2, -20, 0, 853, 480);
    fill (0, 70);
    rect (0, 0, 640, 480);

    textSize (30);
    transparencia+=1;

    fill (marron, transparencia );
    text ("Es reconocido por construir \n un característico nido de barro en árboles, \n construcciones y otras estructuras.",
      (width/2)+2, (height/2)+2);
    fill (250, transparencia);
    text ("Es reconocido por construir \n un característico nido de barro en árboles, \n construcciones y otras estructuras.",
      width/2, height/2);

    if (difTemporal >= 6000) {
      pantalla = 3;
      marcaTiempo = millis ();
      transparencia = 0;
    }

    //FIN PANTALLA 2
  } else if (pantalla == 3) { // PANTALLA 3
    background (255);
    image (pantalla3, 20, 130, 600, 220);

    fill (0, 20);
    rect (0, 0, 640, 480);

    fill (azul);
    text ("Es el ave nacional de Argentina desde 1928", primerRengX, height*0.2);

    text ("y a partir de 2017 apareció en el billete de $1.000", segRengX, height*0.8 );

    /* fill (255);
     text ("Es el ave nacional de Argentina desde 1928", primerRengX-2, (height*0.2)-1.5);
     
     text ("y a partir de 2017 apareció en el billete de $1.000", segRengX-2, (height*0.8)-1.5 );
     */

    if (primerRengX >= width/2) {
      primerRengX-=2;
    }
    if (segRengX <= width/2) {
      segRengX+=2;
    }





    if (difTemporal >= 7000) {
      pantalla = 4;
      marcaTiempo = millis ();
      primerRengX = 900;
      segRengX = -300;
    }

    //FIN PANTALLA 3
  } else if (pantalla == 4 ) { // PANTALLA 4

    image (pantalla4, 0, -200, 640, 807);

    fill (0, 100);
    rect (0, 0, 640, 480);

    fill (azul, alpha1);
    text("Es un ave que vive y se reproduce \n en su área de residencia, no migra.", width/2, primerRengY);

    fill (azul, alpha2);
    text("Representa fielmente al argentino de ley: \n vive bien en su lugar y quiere a su tierra.", width/2, segRengY);

    fill (marron, alpha3 );
    text ("AGUANTE EL HORNERO.", width/2, height*0.8);

    fill (250, alpha1);
    text("Es un ave que vive y se reproduce \n en su área de residencia, no migra.", (width/2)+1, primerRengY+1);

    fill (250, alpha2 );
    text("Representa fielmente al argentino de ley: \n vive bien en su lugar y quiere a su tierra.", (width/2)+1, segRengY+1);

    fill (250, alpha3  );
    text ("AGUANTE EL HORNERO.", width/2, height*0.8);


    if (primerRengY <= height/4) {
      primerRengY++;
    }

    if (difTemporal >= 4000) {
      alpha1-=3;
      if (segRengY <= height/4) {
        segRengY++;
      }
      if (difTemporal >= 8000) {
        alpha2-=3;
        if (difTemporal >= 10000) {
          alpha3=255;
        }
      }
    }

    if (difTemporal >= 13000) {
      pantalla=5;
      marcaTiempo = millis ();
      primerRengY = -50;
      segRengY = -50;
      alpha1 = 255;
      alpha2 = 255;
      alpha3 = 0;
    }
  } else if (pantalla == 5 ) { // PANTALLA 5 Y ÚLTIMA




    background (celeste);

    alpha3+=2;

    fill (255, alpha3);
    text ("PRESIONE EL BOTÓN PARA \n VOLVER AL INICIO", width/2, height*0.6);







    circle (x, yBotonFinal, d); //BOTÓN

    distancia = dist(x, yBotonFinal, mouseX, mouseY);

    if ( distancia <= d/2) { //MOUSEOVER

      fill (colorSombra, alpha3);
      circle (x, yBotonFinal, d); //BOTÓN

      fill (colorBoton, alpha3);
      circle (x-7, yBotonFinal-7, d); //BOTON DE MOUSEOVER

      fill (colorSombra, alpha3);
      text ("PRESIONE EL BOTÓN PARA \n VOLVER AL INICIO", width/2, height*0.6);

      fill (255, alpha3);
      text ("PRESIONE EL BOTÓN PARA \n VOLVER AL INICIO", (width/2)-2, (height*0.6)-2);


      if (mousePressed) { //MOUSEPRESSED

        pantalla = 0; //CAMBIO DE PANTALLA
        marcaTiempo = millis ();
        alpha3= 0;
      }
    } else {
      fill (colorBoton); //COLOR DE BOTÓN CUANDO NO(!!) ESTA OVER
      noStroke ();
    }
  }
}
