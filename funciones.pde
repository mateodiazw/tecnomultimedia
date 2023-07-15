
/*funciones para encontrar la posicion de los botones
 y determinar el hover y el click para avanzar a sig pantalla*/
 
void circuloPrueba (int x, int y) {
  
  fill(255, 0, 0);
  
  circle( x, y, 85);
}

void quadPrueba (int x, int y) {
  
  fill(255, 0, 0, 50 );
  
  quad( x, y, x+200, y, x+200, y+200, x, y+200);
  
}

/*funcion para generar el proceso
 de eleccion de planeta al que dirigirse */
 
void botonPlaneta (int xPlaneta, int yPlaneta,
  int nroHover, int pantalla ) {

  if (distancia(xPlaneta, yPlaneta)<= 85) {

    image (hover[nroHover], 0, 0);

    pantallaActual= pantalla;
  }
}


/* funcion que RETORNA el valor
 de la distancia para el boton de los planetas*/

float distancia(int x, int y) {

  float resultado = dist(mouseX, mouseY, x, y) ;

  return resultado;
}

/*funcion para boton cuadrado de las palomas*/

void botonPaloma (int x, int y, int nroHover,
  int pantalla, int ancho, int alto) {

  if (mouseX > x && mouseX < (x+ancho) &&
    mouseY > y && mouseY < (y+alto)) {

    image (hover[nroHover], 0, 0);


    pantallaActual= pantalla;
  }
}

//funcion especial botones finales

void botonEspecial (int x, int y, int nroHover,
  int pantalla, int ancho, int alto) {

  if (mouseX > x && mouseX < (x+ancho) &&
    mouseY > y && mouseY < (y+alto)) {

    image (boton[nroHover], 0, 0);

    pantallaActual= pantalla;
  }
}


void text (int renglon, int y) {

  fill(255);

  text(textos[renglon], 20, y, 560, 550);
}
