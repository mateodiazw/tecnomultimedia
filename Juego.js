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

    this.estado = 'home';

    //contador y reloj
    this.contador = 1200;
    
  }


  actualizar () {

    if ( this.estado == 'home') {
      this.boton ('JUGAR', 'juego', 0.85);
    } else if (this.estado == 'juego') {

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
      
     


      //finales
      if (this.cantVidas <= 0) {
        this.estado = 'derrota';

        //reseteo de variables
        this.reset();
      } else if (this.cantVidas > 0 & this.contador < 0) {

        if (this.cantVidas == 3) {
          this.estado = 'victoria';

          //reseteo de variables
          this.reset();
        } else if (this.cantVidas > 0 & this.cantVidas < 3 ) {
          this.estado = 'empate';

          //reseteo de variables
          this.reset();
        }
      }
    } else if (this.estado == 'derrota') {
      //boton
      this.boton ('VOLVER', 'home', 0.6);
    } else if (this.estado == 'empate') {
      //boton
      this.boton ('VOLVER', 'home', 0.65);
    } else if (this.estado == 'victoria') {
      //boton
      this.boton ('VOLVER', 'home', 0.6);
    }
  }

  interaccionPrincipito() {
    if ( this.estado == 'juego') {
      this.principito.actualizar(keyCode);
    }
  }

  dibujar () {


    if (this.estado == 'home') {

      image (this.fondo, 0, this.yImg1);
      background (0, 0, 5, 100);

      push();
      fill(255);
      textSize(14);
      text(' UNA BANDADA DE GAVILANES ESPACIALES\nESTA ATACANDO AL PRINCIPITO: QUIEREN\nCOMERSE SU NAVE DE PALOMAS', width/2, height*0.2);
      text('¡AYUDALO A ESCAPAR!\nESQUIVA A LOS PAJAROS ASESINOS PARA\nCONTINUAR LA TRAVESIA POR LOS PLANETAS', width/2, height*0.4);
      text('MOVETE CON ← Y →\n¡ATENCION! TENES SOLO 3 VIDAS', width/2, height*0.6);
      pop();
    } else if (this.estado == 'juego') {

      //efecto parallax fondo
      image (this.fondo, 0, this.yImg1);
      background (0, 0, 10, 150);
      if (this.yImg1 > 0) {
        this.yImg1 = -3000;
      }

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

      
    } else if (this.estado == 'derrota') {

      image (this.fondo, 0, this.yImg1);
      background (0, 0, 10, 150);

      push();
      fill(255);
      textSize(14);
      text(' LOS GAVILANES MATARON A TUS PALOMAS \n TE PERIDISTE DIVAGANDO POR EL ESPACIO.', width/2, height*0.4);
      pop();
    } else if (this.estado == 'empate') {

      image (this.fondo, 0, this.yImg1);
      background (0, 0, 10, 150);

      push();
      fill(255);
      textSize(14);
      text(' ¡SOBREVIVISTE A LOS GAVILANES! \n PERO RESULTASTE HERIDO \n Y NO LOGRASTE LLEGAR A LA TIERRA. \n \n TERMINASTE EN UN NUEVO PLANETA CERCANO.', width/2, height*0.35);
      pop();
    } else if (this.estado == 'victoria') {

      image (this.fondo, 0, this.yImg1);
      background (0, 0, 10, 150);

      push();
      fill(255);
      textSize(14);
      text(' ¡SOBREVIVISTE A LOS GAVILANES! \n SALISTE ILESO Y LOGRASTE \n LLEGAR A LA TIERRA.', width/2, height*0.4);
      pop();
    }
  }

  colision () {

    if (this.estado == 'juego') {

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
  }

  boton (texto, direccion, pos) {

    push();
    textSize(20);

    if ( mouseX > width/2-(textWidth(texto)/2) & mouseX < width/2+(textWidth(texto)/2)
      & mouseY > (height*pos)-30 & mouseY < height*pos ) {
      fill(255, 200, 0);

      if (mouseIsPressed) {
        this.estado = direccion;
      }
    } else {
      fill (255);
    }

    let boton = text ( texto, width/2, height*pos);
    pop();
  }

  reset () {
    this.contador = 1200;
    this.cantVidas = 3;
    
    //gavilan
    for (let i = 0; i < this.cantGav; i++) {
    this.gavilan[i].reinicio();
    }
  }
}
