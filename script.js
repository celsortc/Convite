const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
let contaClick = 0;

console.log(Math.random());

function moverAleatorio() {
  const larguraBotao = botaoNao.offsetWidth;
  const alturaBotao = botaoNao.offsetHeight;

  const maxLeft = window.innerWidth - larguraBotao;
  const maxTop = window.innerHeight - alturaBotao;

  botaoNao.style.position = "absolute";
  botaoNao.style.left = Math.random() * maxLeft + "px";
  botaoNao.style.top = Math.random() * maxTop + "px";
  contaClick++;

  if (contaClick === 5) {
    //com 5 cliques no não ele solta um alert
    alert("acho que a outra opção é melhor..");
  }
}

botaoNao.addEventListener("click", moverAleatorio);
