const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
var modoClaro;

if(sessionStorage.getItem("modo")){
  modoClaro = sessionStorage.getItem("modo");
  modoClaro = (modoClaro === 'true');
}
else {
  modoClaro = true;
}

if(modoClaro === false){
  body.classList.toggle("modo-escuro");
  imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
}

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  modoClaro = !modoClaro;
  sessionStorage.setItem("modo", modoClaro);
  if (modoEscuroAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
