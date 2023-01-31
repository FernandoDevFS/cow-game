//ator
let xAtor = 85;
let yAtor = 366;
let colisao = false
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3 
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3
  }
}

function verificaColisao (){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10)
    if (colisao){
      voltaAtorPosicaoInicial();
      if (pontosMaiorQueZero()){
        meusPontos -=1;
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 363;
}

function incluiPontos(){
  fill(color(255, 255, 70,));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 30);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0
}

function podeSeMover (){
  return yAtor < 366;
}