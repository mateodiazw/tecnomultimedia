class Enemigo { // gavilan

  constructor (img) {
    this.ancho = 100;
    this.alto = 30;
    this.x = random ( -50, 600);
    this.y = random ( -800, -1500);
    this.vel = random ( 4, 6);
    this.gavilan = img;
  }

  actualizar () {
    this.y += this.vel;

    //reinicio de enemigos
    if (this.y > random(600, 1000) ) {
      this.reinicio ();
    }
  }

  dibujar () {
    push ();
    imageMode (CENTER);
    image (gavilan, this.x, this.y, this.ancho, this.alto );
    pop();
  }

  reinicio () {
    this.y = random (0, -500);
    this.x = random ( -50, 600);
  }

  getY() {
    return this.y;
  }

  getX() {
    return this.x;
  }

  reset() {
    this.x = random ( -50, 600);
    this.y = random ( -800, -1500);
    this.vel = random ( 4, 6);
  }
}
