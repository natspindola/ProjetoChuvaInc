function verMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnVerMais = document.getElementById("btnVerMais");
    var container = document.getElementById("container-quinto");
    var containerS = document.getElementById("container-sexto");
    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVerMais.innerHTML = "ver mais";
        container.classList.remove("container-tamanhoG");
        container.classList.add("container-tamanhoP");
        containerS.classList.remove("transicao2");
        containerS.classList.add("transicao1");
        btnVerMais.style.display = "inline";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVerMais.innerHTML = "ver menos";
        btnVerMais.style.display = "none";
        container.classList.remove("container-tamanhoP");
        container.classList.add("container-tamanhoG");
        containerS.classList.remove("transicao1");
        containerS.classList.add("transicao2");
    }
}


var btn = document.getElementById('btnResp1');
var container = document.querySelector('.resposta1');
var container1 = document.getElementById("container1");
var rodape1 = document.getElementById("rodape1");
var container6 = document.getElementById("container6");
btn.addEventListener('click', function () {

    if (container.style.display === 'block') {
        container.style.display = 'none';
        container1.classList.remove("transicao4");
        container1.classList.add("transicao3");
        rodape1.classList.remove("transicao15");
        rodape1.classList.add("transicao14");
        container6.classList.remove("tamanhoG1");
        container6.classList.add("tamanhoP1");
    } else {
        container.style.display = 'block';
        container1.classList.remove("transicao3");
        container1.classList.add("transicao4");
        rodape1.classList.remove("transicao14");
        rodape1.classList.add("transicao15");
        container6.classList.remove("tamanhoP1");
        container6.classList.add("tamanhoG1");
    }
});

var btn2 = document.getElementById('btnResp2');
var containerS = document.querySelector('.resposta2');
var container2 = document.getElementById("container2");
var rodape2 = document.getElementById("rodape2");
var container6p = document.getElementById("container6.1");
btn2.addEventListener('click', function () {
    if (containerS.style.display === 'block') {
        containerS.style.display = 'none';
        container2.classList.remove("transicao6");
        container2.classList.add("transicao5");
        rodape2.classList.remove("transicao17");
        rodape2.classList.add("transicao16");
        container6p.classList.remove("tamanhoG2");
        container6p.classList.add("tamanhoP2");
        
    } else {
        containerS.style.display = 'block';
        container2.classList.remove("transicao5");
        container2.classList.add("transicao6");
        rodape2.classList.remove("transicao16");
        rodape2.classList.add("transicao17");
        container6p.classList.remove("tamanhoP2");
        container6p.classList.add("tamanhoG2");
    }
});

var btnTopico = document.getElementById("btnTopico");
var criarTopico = document.getElementById("criarTopico");
var compartilhe = document.getElementById("compartilhe");
btnTopico.addEventListener('click', function () {

    if (criarTopico.style.display === 'block') {
        criarTopico.style.display = 'none';
        compartilhe.style.display = 'block';
    } else {
        criarTopico.style.display = 'block';
        compartilhe.style.display = 'none';
    }
});

var btnEnviar = document.getElementById("btnEnviar");
var enviarTopico = document.getElementById("enviarTopico");
var enviar = document.getElementById("enviar");
var topicoNovo = document.getElementById("topicoNovo");
var mudarTopico = document.getElementById("mudarTopico");
var feedback = document.getElementById("feedback");
btnEnviar.addEventListener('click', function () {
    if(enviarTopico.style.display === 'block') {
        enviarTopico.style.display = 'none';
        enviar.style.display = 'block';
        mudarTopico.classList.remove("transicao10");
        mudarTopico.classList.add("transicao9");
        topicoNovo.style.display = 'none';
        feedback.style.display = 'none';  
    } else {
        enviarTopico.style.display = 'block';
        enviar.style.display = 'none';
        mudarTopico.classList.remove("transicao9");
        mudarTopico.classList.add("transicao10");
        topicoNovo.style.display = 'block';
        feedback.style.display = 'block';
    }
});

var btnCriarNovoTop = document.getElementById("btnCriarNovoTop");
var enviarTopico = document.getElementById("enviarTopico");
var criarTopico = document.getElementById("criarTopico");
var topicoNovo = document.getElementById("topicoNovo");
var feedback = document.getElementById("feedback");
var mudarTopico = document.getElementById("mudarTopico");
btnCriarNovoTop.addEventListener('click', function () {
    if(criarTopico.style.display === 'none') {
        criarTopico.style.display = 'none';
        enviarTopico.style.display = 'block';
        topicoNovo.style.display = 'block';
        feedback.style.display = 'block';
        mudarTopico.classList.remove("transicao9");
        mudarTopico.classList.add("transicao10");
    } else {
        criarTopico.style.display = 'block';
        enviarTopico.style.display = 'none';
        enviar.style.display = 'block';
        topicoNovo.style.display = 'none';
        feedback.style.display = 'none';
        mudarTopico.classList.remove("transicao10");
        mudarTopico.classList.add("transicao9");
    }
})

document.getElementById("btnEnviar").addEventListener("click", function() {
    clearInputText("entrada");
  });
  
  function clearInputText(name) {
    var entradas = document.querySelectorAll("input[name='"+name+"']");
    [].map.call(entradas, entrada => entrada.value = '');
  }

  document.getElementById("btnEnviar").addEventListener("click", function() {
    clearTextArea("entrada");
  });
  
  function clearTextArea(name) {
    var entradas = document.querySelectorAll("input[name='"+name+"']");
    [].map.call(entradas, entrada => entrada.value = '');
  }

  function eraseText() {
    document.getElementById("conteudo").value = "";
}