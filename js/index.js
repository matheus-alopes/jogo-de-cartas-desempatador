import { tirarUmaCartaDoBaralho } from "./services/tirarUmaCarta.js";
import { card1, card2 } from "./objects/cards.js";
import { sword1, sword2 } from "./objects/swords.js";
import { alertBox } from "./objects/alertBox.js";

function gerarImagemCarta(cardHtmlId, imageUrl) {
	document.getElementById(cardHtmlId).src = imageUrl;
}

function identificarForcaDaCarta(carta) {
	const valor = carta.value;

	if(valor == "ACE") {
		carta.value = 1;
	} else if (valor == "JACK") {
		carta.value = 11;
	} else if (valor == "QUEEN") {
		carta.value = 12;
	} else if (valor == "KING") {
		carta.value = 13;
	}

	return;
}

function compararCartas(carta1, carta2) {
	if(carta1.value > carta2.value) {
		alertBox.setWinnerAlert(1);
	}

	if(carta2.value > carta1.value) {
		alertBox.setWinnerAlert(2);
	}

	if(carta2.value == carta1.value) {
		alertBox.setTieAlert();
	}
}

function desabilitarBotao(botao) {
	botao.setAttribute("disabled", true);

	botao.classList.remove("hover-button");
}

let alguemJogou = false;

card1.botao.addEventListener("click",
	async () => {
		let card = await tirarUmaCartaDoBaralho();
		
		card1.setCardInfos(card);

		gerarImagemCarta("card1", card1.imageUrl);

		identificarForcaDaCarta(card1);

		console.log(card1);

		desabilitarBotao(card1.botao);

		sword1.rotateSword();

		if (alguemJogou) {
			compararCartas(card1, card2);
		} else {
			alguemJogou = true;

			return;
		}
	}
)

card2.botao.addEventListener("click",
	async () => {
		let card = await tirarUmaCartaDoBaralho();
		
		card2.setCardInfos(card);

		gerarImagemCarta("card2", card2.imageUrl);

		identificarForcaDaCarta(card2);
		
		console.log(card2);

		desabilitarBotao(card2.botao);

		sword2.rotateSword();

		if (alguemJogou) {
			compararCartas(card1, card2);
		} else {
			alguemJogou = true;

			return;
		}
	}
)