class Juego {

  constructor (fondo, img, player, enemigo) {

    //carga de principito
    this.principito = new Player (player);


    //carga de gavilan
    this.gavilan = [];
    this.cantGav = 10;
    for (let i = 0; i < this.cantGav; i++) {
      this.gavilan.push(new Enemigo (enemigo));
    }

    //carga del fondo
    this.fondo = fondo;
    //efecto parallax fondo
    this.yImg1 = -3000;

    //carga de vidas
    this.vida = [] ;
    this.cantVidas = 3;
    for (let i = 0; i < 3; i++) {
      this.vida[i] = img;
    }



    //contador y reloj
    this.contador = 1200;

    this.boton = new Boton ();
  }

  actualizarPrinc (tecla) {
    this.principito.actualizar(tecla);
  }

  actualizar () {

    //this.principito.actualizar(keyCode);

    this.colision();

    //actualizacion de gavilanes
    for (let i = 0; i < this.cantGav; i++) {
      this.gavilan[i].actualizar();
    }


    //efecto parallax fondo
    this.yImg1 +=2;


    //actualizacion contador y tiempo
    this.contador -=1;
    push();
    fill (255);
    textSize (25);
    text ( round(this.contador/60), 70, 65);
    pop();

    //text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
    //text ("this.pantalla: " + this.boton.pantalla, 100, 170);
  }


  dibujar () {
    //efecto parallax fondo
    image (this.fondo, 0, this.yImg1);
    background (0, 0, 10, 150);
    if (this.yImg1 > 0) {
      this.yImg1 = -3000;
    }


    //  push();
    //  fill (255);
    //  textAlign (CENTER);
    //  textSize (23);
    //  textLeading (34);
    //  text ('¡UNA HORDA DE GAVILANES SE ACERCA!', width/2, height/2);
    //  pop();



    //text ("this.difTemporal: " + round(this.difTemporal), 100, 150);
    //text ("this.marcaTiempo: " + round(this.marcaTiempo), 100, 170);

    //dibujo principito
    this.principito.dibujar();

    //dibujo gavilanes
    for (let i = 0; i < this.cantGav; i++) {
      this.gavilan[i].dibujar();
    }

    //dibujo vidas
    push();
    imageMode (CENTER);
    for (let i = 0; i < this.cantVidas; i++) {
      image (this.vida[i], (width*0.7)+(i*50), 50, 50, 50);
    }
    pop();
  }

  colision () {


    for (let i = 0; i < this.cantGav; i++) {

      if ( this.gavilan[i].getY() > (this.principito.getY()-80) & this.gavilan[i].getY() < this.principito.getY()
        & this.gavilan[i].getX() > (this.principito.getX()-70) & this.gavilan[i].getX() < (this.principito.getX()+70)) {
        push();
        this.gavilan[i].reinicio();
        this.cantVidas-=1;
        pop();
      }
    }
  }

  reset () {
    this.contador = 1200;
    this.cantVidas = 3;
    this.principito.x = width / 2;
    
    
    //gavilan
    for (let i = 0; i < this.cantGav; i++) {
      this.gavilan[i].reset();
    }
  }
}
