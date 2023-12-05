class Visual {

  constructor (fondo, texto) {

    this.fondo = fondo;
    this.texto = texto;
  }

  dibujar (pantalla, nroText, yText) {
    image ( this.fondo[pantalla], 0, 0);
    push();
    fill (255);
    textAlign (CENTER);
    textSize (23);
    textLeading (34);
    text(this.texto[nroText], 20, yText, 560, 550);
    pop();
  }
}
