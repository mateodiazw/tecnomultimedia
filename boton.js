class Boton {

  constructor (hover) {

    this.x = 0 ;
    this.y = 0;
    this.ancho = 0;
    this.alto = 0;
    this.direccion = 0 ;

    this.hover= hover;

    this.pantalla = 0;
    this.pantallaActual = 0;

    
  }

  botonCuadrado (x, y, ancho, alto, direccion, hover, mostrarTexto) {
    this.x = x ;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.direccion = direccion ;
    //push();
    //noFill();
    //stroke(255);
    //rect (this.x, this.y, this.ancho, this.alto);
    //pop();
    if (mouseX > this.x && mouseX < (this.x + this.ancho) &&
      mouseY > this.y && mouseY < (this.y + this.alto)) {
      image (this.hover[hover], 0, 0);

      if (mostrarTexto == 1) {
        push();
        fill (255)
          textAlign (CENTER);
        textSize (18);
        text('Click para continuar', width/2, 70);
        pop();
      }

      this.pantallaActual = this.direccion;
      this.cambiar = true;
    }
  }

  botonCircular(x, y, tam, direccion, hover, mostrarTexto) {
    this.x = x ;
    this.y = y;
    this.tam = tam;
    this.direccion = direccion ;

    //push();
    //noFill();
    //stroke(255);
    //ellipse(this.x, this.y, this.tam);
    //pop();
    if (dist(mouseX, mouseY, this.x, this.y) < this.tam) {

      image (this.hover[hover], 0, 0);

      if (mostrarTexto == 1) {
        push();
        fill (255)
          textAlign (CENTER);
        textSize (18);
        text('Click para continuar', width/2, 70);
        pop();
      }

      this.pantallaActual = this.direccion;
      this.cambiar = true;
    }
  }
}
