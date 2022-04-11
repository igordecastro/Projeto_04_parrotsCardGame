let gifs = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];
gifs.sort(comparador);

let shuffleCards = [];
function comparador() {
    return Math.random() - 0.5;
}
const carta = document.querySelector(".cartas1")
const carta2 = document.querySelector(".cartas2")

let CardQtd = prompt("Com quantas cartas você quer jogar?");

while (CardQtd < 4 || CardQtd > 14 || CardQtd % 2 !== 0) {
    CardQtd = prompt("Com quantas cartas você quer jogar?");
}

let halfqtd = CardQtd / 2;

function AddCard(i) {
    carta.innerHTML += `<div class="carta" onclick="virarCarta(this)">
    <div class="frente cartaConteudo">
    <img src="images/front.png">
    </div>
    <div class="tras cartaConteudo">
    <img src="images/${gifs[i]}.gif">
    </div>
    `
    carta2.innerHTML += `<div class="carta" onclick="virarCarta(this)">
    <div class="frente cartaConteudo">
    <img src="images/front.png">
    </div>
    <div class="tras cartaConteudo">
    <img src="images/${gifs[i]}.gif">
    </div>
    `
}
for (let i = 0; i < halfqtd; i++) {
    AddCard(i); 
} 

function virarCarta(elemento) {
    elemento.classList.add("selecionada")
}
