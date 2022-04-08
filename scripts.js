
const carta = document.querySelector(".cartas1")
function AddCard() {
    console.log(carta);
    carta.innerHTML += `<div class="carta">
    <img src="images/front.png">
    </div>
    `
}

let cartas = [];

let CardQtd = prompt("Com quantas cartas você quer jogar meu consagrado?");
while(CardQtd < 4 || CardQtd > 14 || CardQtd % 2 !== 0) {
    CardQtd = prompt("Com quantas cartas você quer jogar meu consagrado?");
}

for (let i = 0 ; i < CardQtd ; i++){
AddCard();
}
qtdValidation();