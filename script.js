// var openModal = document.getElementById('open-modal');
// var btnAbout = document.getElementById('btn-about');
// var fecharModal = document.getElementById('fecharModal');

// openModal.onclick = function(){
//     openModal.style.display = "block";
// }

// fecharModal.onclick = function(){
//     fecharModal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == openModal) {
//         openModal.style.display = "none";
//     }
// }

// Obtenha os elementos do HTML
var meuBotao = document.getElementById("meuBotao");
var meuModal = document.getElementById("meuModal");
var fecharModal = document.getElementById("fecharModal");

// Quando o botão for clicado, abra o modal
meuBotao.onclick = function() {
    meuModal.style.display = "block";
}

// Quando o usuário clicar no "X" (fechar), feche o modal
fecharModal.onclick = function() {
    meuModal.style.display = "none";
}

// Quando o usuário clicar fora do modal, feche-o
window.onclick = function(event) {
    if (event.target == meuModal) {
        meuModal.style.display = "none";
    }
}

// var inicio = document.getElementById("https://edivaniaduarte.dev.br/");
// var projetos = document.getElementById("https://github.com/Edivania88Duarte?tab=repositories");
// var curriculo = document.getElementById("file:///C:/Users/Edivania/Desktop/Curr%C3%ADculo/CV%20EDIVANIA%20DUARTE%20-%20DEVELOPER.pdf");
// var meuContato = document.getElementById("https://api.whatsapp.com/send/?phone=5585997968284&text&type=phone_number&app_absent=0");


// projetos.addEventListener("click", function() {
//         alert("Link clicado!");
// });

