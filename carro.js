let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [45, 100, 155, 220, 275, 325];
let velocidadeCarros = [2.5, 3.7, 3.2, 3.5, 4.8, 4.2];
let comprimentoCarro = 50;
let alturaCarro = 35;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro (){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela (xCarros) {
  return xCarros < -30;
}